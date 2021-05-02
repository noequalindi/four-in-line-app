import React, { useEffect, useState, useCallback } from "react";
import Board from "../Board/Board";
import { IMatrixProps, State } from "./types";
import socket from "../Socket/Socket";
import useStyles from './style'
import { Button, Grid, Typography } from "@material-ui/core";

const initState: State = {
  circlesPositions: {},
  playerTurn: "red",
  gameStatus: '',
  gameOver: { player: '', winner: false },
}

const Game: React.FC<IMatrixProps> = ({ columns, rows, playerColor }) => {
  const classes = useStyles()
  const [gameState, setGameState] = useState(initState)

   useCallback( () => {
    socket?.emit('connected', playerColor);
  },[socket])();

  const handleGrooveClick = useCallback((grooveId: string) => {
    socket?.emit('grooveClick', grooveId);
  }, [socket]);

  useEffect(() => {
    socket.on('gameState', (newState: State) => {
      setGameState(newState);
    })
  }, [socket]);

  const restartGame = useCallback(() => {
    socket?.emit('restartGame');
  }, [socket]);

  const { circlesPositions, gameOver, playerTurn } = gameState;

  return (
    <>
    <Grid container>
      <div className={classes.app}>
        <Grid item xs={12}>
        { gameOver && !gameOver.winner ?
        <>
        <Typography variant="h4"> It's {playerTurn} Turn!</Typography>
          <Board
            columns={columns}
            rows={rows}
            circlesPositions={circlesPositions}
            onGrooveClick={handleGrooveClick}
          />  
           </> :
        
          <>
          <div className={classes.buttonContainer}>
            <Typography variant="h4"> Player {gameOver.player} Won!</Typography>
            <Button variant="contained" color="secondary" onClick={restartGame}> Restart Game</Button>
          </div>
          </>
        }
        </Grid>
      </div>
      </Grid>
    </>
  );

}
export default Game