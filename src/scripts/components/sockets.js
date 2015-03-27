var io = require('socket.io-client')

var socket = io('http://localhost:3005');

socket.on('connect', function () {
    alert('connected!')
})

socket.on('event', function (data) {
    alert('event!')
})

socket.on('disconnect', function () {
    alert('disconnected!')
})
