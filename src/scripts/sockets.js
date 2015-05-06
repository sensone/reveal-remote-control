'use strict';

const io = require('socket.io-client')
  , _ = require('underscore')
  , model = require('./models/model')
  , session = require('./models/session')
  , socket = io('http://10.6.165.235:3005');

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
  console.log('change action', data);

  model.set(data.state);
  console.log(JSON.stringify(data));
}
socket.on('presentation:slidechanged' , changeHandler);
socket.on('presentation:checkClient', function() {
  console.log('checkClient')
  emit('checkClient', getSessionObj());
});

function emit(eventName , data) {
  console.log('remote:' + eventName);

  socket.emit('remote:' + eventName , _.extend({}, data, getSessionObj()));
}

module.exports = emit;
