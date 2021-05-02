import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Game from '../components/Game/Game'
import Grid from '@material-ui/core/Grid';

enum GameBoard {
  columns = 7,
  rows = 6,
}

export default function Home() {

  return (
    <>
    <Head>
    <title>Four in lines App</title>
    <meta name="description" content="Generated by create next app" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
    <Grid container spacing={3}>
      <Grid item xs={12}>
         <h3 className={styles.title}>
          Welcome to Four in line app!
        </h3>
      </Grid>
    </Grid>
    <Grid item xs={12}>
       <Game columns={GameBoard.columns} rows={GameBoard.rows} />
    </Grid>
    </>
  )
}

