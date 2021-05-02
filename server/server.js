const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);

const socketio = require('socket.io');
const io = socketio(server, {
    cors: {
      origin: "http://localhost:3000",
      credentials: true
    }
  });
io.on('connection', socket => {
    socket.on('connected', () => {
        console.log("User connected");
    })
})
server.listen(5000, () => console.log("Server Initializated"));