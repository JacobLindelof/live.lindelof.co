from django.conf import settings
from django.contrib import admin
from django.conf.urls.static import static
from django.urls import include, path
from django.views import defaults as default_views
from django.views.generic import TemplateView

from rest_framework import routers
from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token

from core import views as core_views
from users import views as user_views

router = routers.DefaultRouter()
router.register(r'channels', user_views.UserViewSet)

urlpatterns = [
    path('on-publish/', core_views.on_publish),
    path('on-publish-done/', core_views.on_publish_done),
    path('admin/', admin.site.urls),
    path('api/auth/obtain-token/', obtain_jwt_token),
    path('api/auth/refresh-token/', refresh_jwt_token),
    path('api/auth/register/', user_views.register_user),    
    path('api/auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('api/', include(router.urls)),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

if settings.DEBUG:
    # This allows the error pages to be debugged during development, just visit
    # these url in browser to see how these error pages look like.
    urlpatterns += [
        path(
            "400/",
            default_views.bad_request,
            kwargs={"exception": Exception("Bad Request!")},
        ),
        path(
            "403/",
            default_views.permission_denied,
            kwargs={"exception": Exception("Permission Denied")},
        ),
        path(
            "404/",
            default_views.page_not_found,
            kwargs={"exception": Exception("Page not Found")},
        ),
        path("500/", default_views.server_error),
    ]
    if "debug_toolbar" in settings.INSTALLED_APPS:
        import debug_toolbar

        urlpatterns = [path("__debug__/", include(debug_toolbar.urls))] + urlpatterns
