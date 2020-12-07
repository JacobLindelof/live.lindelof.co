from django.contrib.auth.models import Group
from django.conf import settings
from django.http import JsonResponse

from rest_framework import status
from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework import permissions
from rest_framework.decorators import api_view, permission_classes
from rest_framework_jwt.settings import api_settings
from users.serializers import UserSerializer, UserRegistrationSerializer
from users.models import User


@api_view(['POST'])
@permission_classes([permissions.AllowAny])
def register_user(request):
    serialized = UserRegistrationSerializer(data=request.data, context={'request': request})
    if serialized.is_valid():
        username = serialized.data['username']
        if User.objects.filter(username__iexact=username).exists():
            serialized._errors['username'] = ["A user with that username already exists."]
            return Response(serialized._errors, status=status.HTTP_400_BAD_REQUEST)
        user = User.objects.create_user(
            username=serialized.data['username'],
            email=serialized.data['email'],
            password=serialized.data['password']
        )
        user.save()

        jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
        jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

        payload = jwt_payload_handler(user)
        token = jwt_encode_handler(payload)
        return Response({"token": token}, status=status.HTTP_201_CREATED)
    else:
        username = serialized.data['username']
        if User.objects.filter(username__iexact=username).exists() and not User.objects.filter(username=username).exists():
            serialized._errors['username'] = ["A user with that username already exists."]
        return Response(serialized._errors, status=status.HTTP_400_BAD_REQUEST)


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('username')
    serializer_class = UserSerializer
    lookup_field = 'slug'
    permission_classes = [permissions.AllowAny]

    def get_object(self):
        slug = self.kwargs.get('slug')

        if slug == "current" and self.request.user.is_authenticated:
            return self.request.user

        return super(UserViewSet, self).get_object()
