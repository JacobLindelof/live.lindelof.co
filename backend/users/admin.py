from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User, ViewerRecord

@admin.register(User)
class CustomUserAdmin(UserAdmin):
    list_display = UserAdmin.list_display + ('is_active', )

    fieldsets = UserAdmin.fieldsets + (
            ("Stream Info", {'fields': ("stream_key", "live_at", "stream_title")}),
    )

admin.site.register(ViewerRecord)