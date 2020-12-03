from django.http import HttpResponse, HttpResponseForbidden, HttpResponseRedirect
from django.shortcuts import get_object_or_404
from django.utils import timezone
from django.views.decorators.http import require_POST
from django.views.decorators.csrf import csrf_exempt

from users.models import User

class RTMPRedirect(HttpResponseRedirect):
    allowed_schemes = ['rtmp']

@require_POST
@csrf_exempt
def on_publish(request):
    # nginx-rtmp makes the stream name available in the POST body via `name`
    stream_key = request.POST['name']


    # Assuming we have a model `Stream` with a foreign key
    # to `django.contrib.auth.models.User`, we can
    # lookup the stream and verify the publisher is allowed to stream.
    user = get_object_or_404(User, stream_key=stream_key)

    if not user.is_active:
        return HttpResponseForbidden("inactive user")

    # Set the stream live
    user.live_at = timezone.now()
    user.save()

    # Redirect the private stream key to the user's public stream
    return RTMPRedirect(f'rtmp://127.0.0.1/hls-live/{user.username}')

@require_POST
@csrf_exempt
def on_publish_done(request):
    # nginx-rtmp makes the stream name available in the POST body via `name`
    stream_key = request.POST['name']

    # Assuming we have a model `Stream` with a foreign key
    # to `django.contrib.auth.models.User`, we can
    # lookup the stream and verify the publisher is allowed to stream.
     # Set the stream offline
    User.objects.filter(stream_key=stream_key).update(live_at=None)

    # Response is ignored.
    return HttpResponse("OK")