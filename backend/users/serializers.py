from django.contrib.auth.models import Group

from rest_framework import serializers

from users.models import User


class UserRegistrationSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email', 'password']


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        lookup_field = 'slug'
        fields = ['url', 'username', 'slug', 'stream_title', 'is_live', 'live_at', 'viewer_count']
        extra_kwargs = {
            'url': {'lookup_field': 'slug'}
        }
        