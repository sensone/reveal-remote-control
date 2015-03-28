'use strict';

const io = require('socket.io-client')
  , model = require('./model')
  , socket = io('http://192.168.0.93:3005');

socket.on('connect' , function () {
  console.log('connected!');

  emit('connect');
});

socket.on('disconnect' , function () {
  console.log('disconnected!')
});

function changeHandler(data) {
  console.log('change action');

  model.set(data);
  console.log(JSON.stringify(data));
}
socket.on('remote:slidechanged' , changeHandler);

function emit(eventName , data) {
  console.log('remote:' + eventName);

  socket.emit('remote:' + eventName , data);
}

module.exports = emit;
