import React, { useEffect, useState, useCallback } from "react";
import Board from "../Board/Board";
import { IMatrixProps, State } from "./types";
import socket from "../Socket/Socket";
import classes from './style.module.css';
import { Button, Dialog, DialogActions, DialogContent, Grid, Typography } from "@material-ui/core";
import Zoom from '@material-ui/core/Zoom';
import { TransitionProps } from '@material-ui/core/transitions';


const initState: State = {
  circlesPositions: {},
  playerTurn: "red",
  gameStatus: '',
  gameOver: { player: '', winner: false },
}
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>,
) {
  return <Zoom ref={ref} {...props} />;
});

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
              <Typography variant="h4"> It's {playerTurn} Turn!</Typography>
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
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-slide-title"
                  aria-describedby="alert-dialog-slide-description">
                  <div className={classes.buttonContainer}>
                    <DialogContent>
                      <Typography variant="h4"> Player {gameOver.player} Won!</Typography>
                    </DialogContent>
                    <DialogActions>
                      <Button variant="contained" color="secondary" onClick={restartGame}> Restart Game</Button>
                    </DialogActions>
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