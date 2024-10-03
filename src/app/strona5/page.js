"use client"
import { useState } from "react"
export default function strona5(){

    const [items, setItems] = useState([""]) 
    const [input, setInput] = useState("")



    const addList = () =>{
        setItems([...items, input])
        console.log(...items)
        setInput("")
    }


    return(
        <div>
        <input className="bg-black" type="text" value={input} placeholder="type here" onChange={(e) => setInput(e.target.value)}></input>
        <button onClick={addList}>add</button>
        <ul>
        {
            items.map((item, idx)=>
                <li key={idx}>{item}</li>
            )
        }
        </ul>
        </div>
    )
}
//dodawanie przez inputa wartości do listy


