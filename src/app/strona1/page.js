"use client"
import { useState } from "react"
export default function Strona1(){

    const [licznik, setLicznik] = useState(0) //wartosc licznika w nawiasie

    const handleClick = () =>{
        setLicznik(licznik + 1)
    }

    const Click = () =>{
        setLicznik(licznik - 1)
    }

    return(
        <>
        <button onClick={handleClick}>Dodaj 1</button>
        <br></br>
        <button onClick={Click}>Odejmij 1</button>
        <h1>{licznik}</h1>

        </>
    )
}

//dodawanie i odejmowanie liczby