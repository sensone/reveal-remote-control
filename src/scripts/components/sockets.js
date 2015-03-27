var io = require('socket.io-client');

var socket = io('http://localhost:3005');

socket.on('connect', function () {
    console.log('connected!');
});

socket.on('event', function (data) {
    console.log('event!')
});

socket.on('next', function (data) {
    console.log('next!');
    console.log(JSON.stringify(data));
});

socket.on('disconnect', function () {
    console.log('disconnected!')
});
