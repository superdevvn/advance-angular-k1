// Setup basic express server
var express = require('express');
var app = express();
var path = require('path');
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 9001;

server.listen(port, function () {
  console.log('Server listening at port %d', port);
});

var numUsers = 0;
io.set('transports', ['websocket', 
                      'flashsocket', 
                      'htmlfile', 
                      'xhr-polling', 
                      'jsonp-polling', 
                      'polling']);
io.on('connection', function (socket) {
  socket.on('superdev', function(data){
    socket.broadcast.emit('superdev', data);
  });
});
