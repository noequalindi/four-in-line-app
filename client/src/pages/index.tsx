import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Typography } from "@material-ui/core";
import LinearProgress from '@material-ui/core/LinearProgress';

export default function Page() {

  const router = useRouter()

  useEffect(() => {
      router.push('/init')
  }, [router])

  return (
    <>
    <LinearProgress color="secondary" />
    <Typography variant="h6" color="secondary" align="center"> Loading...</Typography>
    <LinearProgress color="secondary" />

    </>)
}



