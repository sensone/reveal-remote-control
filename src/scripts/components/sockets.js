'use strict';

const io = require('socket.io-client')
  , _ = require('underscore')
  , model = require('./model')
  , session = require('./session')
  , socket = io('http://localhost:3005');

socket.on('connect' , function () {
  console.log('connected!');

  emit('connect', getSessionObj());
});

socket.on('disconnect' , function () {
  console.log('disconnected!')
});

function getSessionObj() {
  return {
    presentation_id: session.get('id'),
    token: session.get('token')
  };
}

function changeHandler(data) {
  console.log('change action');

  model.set(data);
  console.log(JSON.stringify(data));
}
socket.on('remote:slidechanged' , changeHandler);

function emit(eventName , data) {
  console.log('remote:' + eventName);

  socket.emit('remote:' + eventName , _.extend({}, data, getSessionObj()));
}

module.exports = emit;
