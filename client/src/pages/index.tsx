import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Typography } from "@material-ui/core";
import LinearProgress from '@material-ui/core/LinearProgress';
import classes from '../styles/style.module.css';

export default function Page() {

  const router = useRouter()

  useEffect(() => {
      router.push('/init')
  }, [router])

  return (
    <>
    <div className={classes.background}>
    <LinearProgress color="secondary" />
    <Typography variant="h6" color="secondary" align="center"> Loading...</Typography>
    <LinearProgress color="secondary" />
    </div>
    </>)
}



