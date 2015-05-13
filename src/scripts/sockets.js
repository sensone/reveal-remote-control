'use strict';

const io = require('socket.io-client'),
  _ = require('underscore'),
  socket = io('http://10.6.166.19:3005');

let model = require('./models/model'),
  session = require('./models/session');

function getSessionObj() {
  return {
    presentation_id: session.get('id'),
    token: session.get('token')
  };
}

function changeHandler(data) {
  console.log('slidechange');

  if (!data) { return; }

  model.set({
    buttons: data.buttons,
    name: data.name,
    notes: data.notes,
    screenshot: data.screenshot
  });
}

function emit(eventName , data) {
  console.log('remote:' + eventName);

  socket.emit('remote:' + eventName , data);
}

socket.on('connect' , function () {
  console.log('connected!');

  emit('connect', getSessionObj());
});

socket.on('disconnect' , function () {
  console.log('disconnected!');
});

socket.on('presentation:slidechanged' , changeHandler);


module.exports = emit;
