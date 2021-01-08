import uuid 

from django.contrib.auth.models import AbstractUser, UserManager
from django.db import models
from django.utils.text import slugify


class CustomUserManager(UserManager):
    def get_by_natural_key(self, username):
        case_insensitive_username_field = '{}__iexact'.format(self.model.USERNAME_FIELD)
        return self.get(**{case_insensitive_username_field: username})


class User(AbstractUser):
    objects = CustomUserManager()

    email = models.EmailField(unique=True)
    slug = models.SlugField(default='', editable=False, max_length=255)

    stream_key = models.UUIDField(default=uuid.uuid4)

    name_styling = models.CharField(max_length=255, blank=True, null=True)
    chat_color = models.CharField(max_length=7, default="#121212")
    stream_title = models.CharField(max_length=255, blank=True, null=True)
    live_at = models.DateTimeField(blank=True, null=True)
    viewers = models.ManyToManyField(to='self', through='ViewerRecord', through_fields=('viewed_user', 'viewing_user'))

    def reset_stream_key(self):
        self.stream_key = uuid.uuid4()
        self.save()

    def save(self, *args, **kwargs):
        value = self.username
        self.slug = slugify(value, allow_unicode=True)
        super().save(*args, **kwargs)

    @property
    def is_live(self):
        return True if self.live_at else False

    @property
    def viewer_count(self):
        return self.viewers.all().values('viewing_user__ip_address', 'username').distinct().count()

    @property
    def display_name(self):
        return self.name_styling if self.name_styling else self.username


class ViewerRecord(models.Model):
    viewed_user = models.ForeignKey('User', on_delete=models.CASCADE)
    viewing_user = models.ForeignKey('user', on_delete=models.CASCADE, related_name='viewing_user',blank=True, null=True)
    ip_address = models.GenericIPAddressField()
