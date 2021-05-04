import Head from 'next/head'
import classes from './Home.module.css';
import Game from '../Game/Game';
import Grid from '@material-ui/core/Grid';
import Emoji from '../Emoji/Emoji';
import { Typography } from "@material-ui/core";

enum GameBoard {
    columns = 7,
    rows = 6,
  }
    
  const Home = ({playerColor}): JSX.Element => {
    return (
      <>
      <div className={classes.container}>
    
      <Grid container spacing={3}>
        <Grid item xs={12}>
           <Typography variant="h3" className={classes.title}>
            <span className={classes.fontStyle}> Welcome to four in line app! </span>
            <Emoji label="happyFace" symbol="😁"/> 
           </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12}>
         <Game columns={GameBoard.columns} rows={GameBoard.rows} playerColor={playerColor}/>
      </Grid>
      </div>
      </>
    )
  }
  export default Home
