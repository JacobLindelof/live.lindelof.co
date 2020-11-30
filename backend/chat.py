from flask import Flask, render_template
from flask_socketio import SocketIO, send, join_room, leave_room

app = Flask(__name__)

socketio = SocketIO(app, async_mode='eventlet')
socketio.init_app(app, cors_allowed_origins="*")

@app.route('/')
def sessions():
    return render_template('session.html')

@socketio.on('join')
def on_join(data):
    room = data['room']
    print(f'Joining Room - {data["room"]}')
    join_room(room)

@socketio.on('leave')
def on_leave(data):
    room = data['room']
    print(f'Leaving Room - {data["room"]}')
    leave_room(room)

@socketio.on('chatMessage')
def on_chat_message(data, methods=['GET', 'POST']):
    username = data['username']
    room = data['room']
    socketio.emit('newChatMessage', data, room=room)

if __name__ == '__main__':
    socketio.run(app, debug=True)