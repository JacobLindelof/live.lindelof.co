from django.contrib.auth.models import Group
from django.conf import settings
from rest_framework import viewsets
from rest_framework import permissions
from users.serializers import UserSerializer
from users.models import User


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('username')
    serializer_class = UserSerializer
    lookup_field = 'slug'
