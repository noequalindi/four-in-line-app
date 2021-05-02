import Head from 'next/head'
import React, { useState } from 'react';
import styles from '../styles/Home.module.css'
import socket from '../components/Socket/Socket';
import Grid from '@material-ui/core/Grid';
import Game from '../components/Game/Game';

export default function Home() {
   socket.emit('connected', 'HELLO!');
  const [registered, setRegistered] = useState(false);

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
        <Game/>
      </Grid>
    </Grid>
 
    </>
  )
}

