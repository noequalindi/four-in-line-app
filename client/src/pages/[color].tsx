import React, { useEffect, useState } from "react"
import Home from '../components/Home/Home';
import { useRouter } from "next/router";


enum PlayerColor {
    RED = 'red',
    YELLOW = 'yellow',
}

const Player = () => {
    const router = useRouter();
    const { color } = router.query;

   useEffect(() => {

        if( color && !( (color === PlayerColor.RED) || (color === PlayerColor.YELLOW) ) ) { 
            router.push('/init')
        }
    }, [router]);

    return (
     color === PlayerColor.RED || color === PlayerColor.YELLOW ?
        <Home playerColor={color}/> : <p></p>
        )
}
export default Player;