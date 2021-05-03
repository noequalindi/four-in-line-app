import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Typography } from "@material-ui/core";

export default function Page() {

  const router = useRouter()
  const color = 'red' || 'yellow';
  useEffect(() => {
    if ( !(router.pathname === color)) {
      router.push('/init')
    } 
  }, [router])

  return (<Typography variant="h4" color="secondary" align="center"> Redirecting...</Typography>)
}



