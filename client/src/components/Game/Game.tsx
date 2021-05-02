import React, { useEffect, useState, useCallback } from "react";
import Board from "../Board/Board";
import { IMatrixProps, State} from "./types";
import socket from "../Socket/Socket";
import useStyles from './style'

const initState: State = {
  circlesPositions: {},
  playerTurn: "red",
  gameStatus: '',
  restart: false,
}

const Game: React.FC<IMatrixProps> = ({ columns, rows }) => {
  const classes = useStyles()

  const [ gameState, setGameState ] = useState(initState)

  const handleGrooveClick = useCallback((grooveId: string) => {
    socket?.emit('grooveClick', grooveId);
  }, [socket]);

  useEffect(() => {
    socket.on('gameState', (newState: State) => {
      setGameState(newState);
    })

  }, [socket]);


  const restartGame = () => {
    setGameState(initState)
  }
  const { circlesPositions, restart } = gameState;

  return (
    <div className={classes.app}>
      <Board 
        columns={columns} 
        rows={rows} 
        circlesPositions={circlesPositions} 
        onGrooveClick={handleGrooveClick} 
        />
    </div>
  );

}
export default Game