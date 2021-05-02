import React, { useEffect, useState, useCallback } from "react";
import socket from "../Socket/Socket";
import useStyles from './style'

const initState = {
  
}

const Game: React.FC = () => {
 // const { gameState , setGameState } = useContextOfGame;
  const classes = useStyles()

  const [ gameState, setGameState ] = useState(initState)

  useEffect( () => {
     socket.emit('connected');
  })
  
  return (
    <div className={classes.app}>
     Game APP
    </div>
  );

}
export default Game