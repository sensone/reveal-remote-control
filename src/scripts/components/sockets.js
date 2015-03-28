'use strict';

let io = require('socket.io-client');

let socket = io('http://localhost:3005');

socket.on('connect', function () {
    console.log('connected!');
});

socket.on('disconnect', function () {
    console.log('disconnected!')
});

function changeHandler(data) {
    console.log('change action');

    console.log(JSON.stringify(data));
}
socket.on('remote:slidechanged', changeHandler);

function emit(eventName, data) {
    console.log('remote:' + eventName);

    socket.emit('remote:' + eventName, data);
}

module.exports = emit;
