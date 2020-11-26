from datetime import datetime
import json

from flask import Flask, abort, redirect, request
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)

users = json.loads(open('users.json', 'r').read())

@app.errorhandler(404)
def page_not_found(error):
    return "Aborted with 404", 404

@app.route('/on_publish/',  methods=['POST'])
def on_publish():
    # nginx-rtmp makes the stream name available in the POST body via `name`
    stream_key = request.form.get('name')


    # Assuming we have a model `Stream` with a foreign key
    # to `django.contrib.auth.models.User`, we can
    # lookup the stream and verify the publisher is allowed to stream.
    if stream_key in users.keys():
        stream = users[stream_key]
    else:
        abort(404)

    # Set the stream live
    stream['live_at'] = datetime.now()

    # Redirect the private stream key to the user's public stream
    return redirect('rtmp://127.0.0.1/hls-live/' + stream['username'])

@app.route('/on_publish_done/',  methods=['POST'])
def on_publish_done():
    # nginx-rtmp makes the stream name available in the POST body via `name`
    stream_key = request.form.get('name')

    # Assuming we have a model `Stream` with a foreign key
    # to `django.contrib.auth.models.User`, we can
    # lookup the stream and verify the publisher is allowed to stream.
    if stream_key in users.keys():
        stream = users[stream_key]
    else:
        abort(404)

    # Set the stream not live
    stream['live_at'] = None

    # Redirect the private stream key to the user's public stream
    return "OK"

class ChannelList(Resource):
    def get(self):
        data = []
        for user in users.values():
            data.append({
                "username": user['username'],
                "is_live": True if user['live_at'] else False,
                "live_at": str(user['live_at']),
                "stream_title": user['stream_title'],
                "viewers": user['viewers']
            })
        return data

class ChannelDetails(Resource):
    def get(self, username):
        for user in users.values():
            if user['username'] == username:
                user.pop('stream_key', None)
                return user
api.add_resource(ChannelList, '/api/channels/')
api.add_resource(ChannelDetails, '/api/channels/<string:username>/')

if __name__ == '__main__':
    app.run(debug=True)