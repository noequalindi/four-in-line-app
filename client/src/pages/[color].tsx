import React, { useEffect } from "react"
import Home from './index';
import { useRouter } from "next/router";
import Redirect from "../components/Redirect/Redirect";

enum PlayerColor {
    RED = 'red',
    YELLOW = 'yellow',
}
const Player = () => {
    const router = useRouter();
    const { color } = router.query;
    
    return (<Home playerColor={color}/> )
}
export default Player;