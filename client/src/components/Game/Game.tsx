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
 // const { gameState , setGameState } = useContextOfGame;
  const classes = useStyles()

  const [ gameState, setGameState ] = useState(initState)

  // useEffect( () => {
  //   socket.emit('connected');
  // })

  useEffect(() => {
    socket.on('gameState', (newState: State) => {
      setGameState(newState);
    })

  }, [socket]);

  const restartGame = () => {
    setGameState(initState)
  }
  

  return (
    <div className={classes.app}>
  
      <Board />
        
        <button onClick={restartGame}>Restart Game</button>
      
    </div>
  );

}
export default Game