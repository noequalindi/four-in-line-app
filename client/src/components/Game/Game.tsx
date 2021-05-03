import React, { useEffect, useState, useCallback } from "react";
import Board from "../Board/Board";
import { IMatrixProps, State } from "./types";
import socket from "../Socket/Socket";
import classes from './style.module.css';
import { Button, Dialog, DialogContent, Grid, Typography } from "@material-ui/core";
import ZoomTransition from '../ZoomTransition/ZoomTransition'
import Emoji from "../Emoji/Emoji";

const initState: State = {
  circlesPositions: {},
  playerTurn: "red",
  gameStatus: '',
  gameOver: { player: '', winner: false },
}

const Game: React.FC<IMatrixProps> = ({ columns, rows, playerColor }) => {
  const [gameState, setGameState] = useState(initState)
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (playerColor) socket?.emit('connected', playerColor);
  }, [socket, playerColor]);

  const handleGrooveClick = useCallback((grooveId: string) => {
    socket?.emit('grooveClick', grooveId);
  }, [socket]);

  useEffect(() => {
    socket.on('gameState', (newState: State) => {
      setGameState(newState);
    })
  }, [socket]);

  const restartGame = useCallback(() => {
    setOpenModal(false);
    socket?.emit('restartGame');
  }, [socket]);

  const { circlesPositions, gameOver, playerTurn } = gameState;
  const GameStyled = (): JSX.Element => {

    if (gameOver && gameOver.winner) setOpenModal(true);

    const handleClose = () => {
      setOpenModal(false);
    };

    return (
      <Grid container>
        <div className={classes.app}>
          <Grid item xs={12}>
            <>
              <div className="actions">
                <Typography variant="h4">
                  <span className={classes.tipography}> Turn: {playerTurn}
                    <Emoji label="hand" symbol="👉🏻" />
                    {playerTurn === 'red' ? <Emoji label="red" symbol="🔴" /> : <Emoji label="yellow" symbol="🟡" />}
                  </span>

                  <Button variant="contained" color="secondary" onClick={restartGame}>
                    <span className={classes.button}> Restart Game </span>
                  </Button>
                </Typography>
              </div>
              <Board
                columns={columns}
                rows={rows}
                circlesPositions={circlesPositions}
                onGrooveClick={handleGrooveClick}
              />
            </>

            <>
              {gameOver && gameOver.winner ?
                <Dialog
                  open={openModal}
                  TransitionComponent={ZoomTransition}
                  keepMounted
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-slide-title"
                  aria-describedby="alert-dialog-slide-description">
                  <div className={classes.dialogContainer}>
                    <DialogContent>
                      <Typography variant="h4">
                        <span className={classes.button}> Player {gameOver.player} won!
                       <Emoji label="party" symbol="🥳" />
                          <Emoji label="party2" symbol="🎉" />
                        </span>
                      </Typography>
                      <span className={classes.alignCenter}>
                        <Button variant="contained" color="secondary" onClick={restartGame}>
                          <span className={classes.button}> Restart Game </span>
                        </Button>
                      </span>
                    </DialogContent>
                  </div>
                </Dialog> : ''
              }
            </>
          </Grid>
        </div>
      </Grid>
    )
  }
  return (
    <>
      <GameStyled />
    </>
  );

}
export default Game