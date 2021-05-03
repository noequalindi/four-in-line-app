import React from "react"
import Home from './index';
import { useRouter } from "next/router";

const RedPlayer = () => {
    const router = useRouter();
    const {color} = router.query;
    return (
        <Home playerColor={color}/>
    )
}
export default RedPlayer;