var io = require('socket.io-client');

var socket = io('http://localhost:3005');

socket.on('connect', function () {
    console.log('connected!');
});

socket.on('disconnect', function () {
    console.log('disconnected!')
});

socket.on('remote:left', function (data) {
    console.log('remote:left!');
    console.log(JSON.stringify(data));
});

socket.on('remote:right', function (data) {
    console.log('remote:right!');
    console.log(JSON.stringify(data));
});

socket.on('remote:up', function (data) {
    console.log('remote:up!');
    console.log(JSON.stringify(data));
});

socket.on('remote:down', function (data) {
    console.log('remote:down!');
    console.log(JSON.stringify(data));
});

function emit(eventName, data) {
    socket.emit('remote:' + eventName, data);
}

module.exports = emit;
