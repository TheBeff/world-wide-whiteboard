var path = require('path');
var socketio = require('socket.io');


var http = require('http');
var server = http.createServer();

var express = require('express');
var app = express();

server.on('request', app);
server.listen(1337, function () {
    console.log('The server is listening on port 1337!');
});

var io = socketio(server);
io.on('connection', function (socket) {
    /* This function receives the newly connected socket.
       This function will be called for EACH browser that connects to our server. */
    console.log('A new client has connected!');
    console.log(socket.id);
});

app.use(express.static(path.join(__dirname, 'browser')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});