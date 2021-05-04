const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const socketio = require("socket.io");
const player = require('./player');

const io = socketio(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
});

io.on("connection", player(io));

server.listen(5000, () => console.log("Server Initializated"));
