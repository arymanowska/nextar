"use client"
import { useState } from "react"
export default function strona2(){

    const [start, setstart] = useState("start") 

    const Click = () =>{
        setstart(start == "start" ? "stop" : "start")
    }


    return(
        <>
        <button onClick={Click}>Start/Stop</button>
        <h1>{start}</h1>

        </>
    )
}

//stop/start