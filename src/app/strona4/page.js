"use client"
import { useState } from "react"
export default function strona4(){

    const [bg, setBg] = useState("bg-pink-500") 
    const [input, setInput] = useState("")


    const color = () =>{
        setBg(input)
    }


    return(
        <div className={`h-screen w-full ${bg}`}>

        <input className="bg-black" type="text" placeholder="type color" onChange={(e) => setInput(e.target.value)}></input>
        <button onClick={color}>change color</button>
        </div>
    )
}
//zmiana tła za pomocą wartości z inputa