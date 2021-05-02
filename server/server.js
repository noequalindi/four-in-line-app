const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const socketio = require('socket.io');
const rows = 6;
const columns = 6;

let users = 0;
let gameState = {
  circlesPositions: {},
  playerTurn: "red",
  gameStatus: '',
  restart: false,
}

const getLastEmptyGroove = (column) => {
  const { circlesPositions } = gameState;
  for (let row = rows - 1; row >= 0; row--) {
    const circleId = `${row}:${column}`;
    if (!circlesPositions[circleId]) {
      return circleId;
    }
  }
}

const io = socketio(server, {
    cors: {
      origin: "http://localhost:3000",
      credentials: true
    }
  });
  
io.on('connection', socket => {
  users ++;
  let color = users % 2 === 0 ? 'red' : 'yellow';
  socket.on('connected', (userColor) => {
    console.log("User connected");
    if (userColor) color = userColor;
  })

  socket.on('grooveClick', (grooveId) => {
    if(color !== gameState.playerTurn) return;

    const { circlesPositions } = gameState;
    console.log(grooveId)
    const column = parseInt(grooveId.split(":")[1]);
    const lastEmptyGrooveId = getLastEmptyGroove(column);

    if (!lastEmptyGrooveId) {
      return;
    }
    const newCirclesPositions = {
      ...circlesPositions,
      [lastEmptyGrooveId]: color
    };

    const newPlayerTurn = color === "red" ? "yellow" : "red";

    gameState =  { circlesPositions: newCirclesPositions, playerTurn: newPlayerTurn }
    io.emit('gameState', gameState);
  })
})
server.listen(5000, () => console.log("Server Initializated"));