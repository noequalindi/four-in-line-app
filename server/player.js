const rows = 6;
const columns = 7;

const getInitialState = () => ({
  circlesPositions: {},
  playerTurn: "red",
  gameStatus: "",
  gameOver: { player: "", winner: false },
});

let gameState = getInitialState();

const getLastEmptyGroove = (column) => {
  const { circlesPositions } = gameState;
  for (let row = rows - 1; row >= 0; row--) {
    const circleId = `${row}:${column}`;
    if (!circlesPositions[circleId]) {
      return circleId;
    }
  }
};

const checkGameStatus = (playerTurn, circlesPositions) => {
  const connectFourWinnerH = checkHorizontallyConnections(circlesPositions);
  const connectFourWinnerV = checkVerticallyConnections(circlesPositions);
  const player = {
    player: playerTurn,
    winner: false,
  };
  return connectFourWinnerH
    ? connectFourWinnerH
    : connectFourWinnerV
    ? connectFourWinnerV
    : player;
};

const checkHorizontallyConnections = (circlesPositions) => {
  for (let row = 0; row < rows; row++) {
    let repetitionCountStatus = { player: "", count: 0 };

    for (let col = 0; col < columns; col++) {
      const circle = circlesPositions[`${row}:${col}`];
      circle && circle === repetitionCountStatus.player
        ? repetitionCountStatus.count++
        : (repetitionCountStatus = { player: circle, count: 1 });

      if (repetitionCountStatus.count === 4) {
        const playerWinner = {
          player: repetitionCountStatus.player,
          winner: true,
        };
        return playerWinner;
      }
    }
  }
};

const checkVerticallyConnections = (circlesPositions) => {
  for (let col = 0; col < columns; col++) {
    let repetitionCountStatus = { player: "", count: 0 };

    for (let row = 0; row < rows; row++) {
      const circle = circlesPositions[`${row}:${col}`];

      circle && circle === repetitionCountStatus.player
        ? repetitionCountStatus.count++
        : (repetitionCountStatus = { player: circle, count: 1 });

      if (repetitionCountStatus.count === 4) {
        const player = {
          player: repetitionCountStatus.player,
          winner: true,
        };
        return player;
      }
    }
  }
};

const player = (io) => (socket) => {
  let color;
  socket.on("connected", (playerColor) => {
    if (playerColor) {
      color = playerColor;
      io.emit("gameState", gameState);
    }
  });

  socket.on("restartGame", () => {
    gameState = getInitialState();
    io.emit("gameState", gameState);
  });

  socket.on("grooveClick", (grooveId) => {
    if (color !== gameState.playerTurn) return;
    const { circlesPositions } = gameState;

    const column = parseInt(grooveId.split(":")[1]);
    const lastEmptyGrooveId = getLastEmptyGroove(column);

    if (!lastEmptyGrooveId) {
      return;
    }

    const newCirclesPositions = {
      ...circlesPositions,
      [lastEmptyGrooveId]: color,
    };

    const newPlayerTurn = color === "red" ? "yellow" : "red";

    const gameStatus = checkGameStatus(newPlayerTurn, newCirclesPositions);

    gameState = {
      circlesPositions: newCirclesPositions,
      playerTurn: newPlayerTurn,
      gameOver: gameStatus,
    };
    io.emit("gameState", gameState);
  });
};

module.exports = player;
