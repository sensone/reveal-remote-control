'use strict';

const io = require('socket.io-client')
  , _ = require('underscore')
  , socket = io('https://warm-coast-3384.herokuapp.com/');

let model = require('./models/model')
  , session = require('./models/session');

model.on('all', function(a,b,c) {console.log(a)} )

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

function changeHandler(dataObj) {
  console.log('slidechange')
  let data = dataObj.state;

  if (!data) return;

  model.set({
    buttons: data.buttons,
    name: data.name,
    notes: data.notes,
    screenshot: data.screenshot
  });
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
