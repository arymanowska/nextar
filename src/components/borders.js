import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";
export default function Borders({borders}){

const [kraje, setKraje] = useState(null)
const [data, setData] = useState(null)
const [error, setError] = useState(false)
const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        const getData = async() =>{
        try{
            const krajeData = []
        
            for (const border of borders){
                const response = await fetch(`https://restcountries.com/v3.1/alpha/${border}`)
                const data = await response.json();
                console.log(data)
                krajeData.push(data[0])
            }
            setKraje(krajeData)
        }catch(error){
            console.error("error")
            setError(true)
        }finally{
            setLoading(false)
        }
    }
        getData()
    },[borders])

    return(
        <div className={"flex flex-wrap justify-center items-center space-x-4 p-4"}>
            <h1>Borders</h1>
            {loading && <h1>Pobieranie danych...</h1>}
            {error && <h1>Nie udało się pobrać danych</h1>}
            {kraje && kraje.map((kraj, idx)=>
            <Link key={idx} href={`/useEffect/${kraj.cca2}`}>
            <div className="gap-3 border-2 space-x-4">
            <Image className='h-[150px] w-[300px]'
            src={kraj.flags.png}
            width={200}
            height={100}
            alt={kraj.name.common}
            />
            <h1>{kraj.name.common}</h1>
            <h1>({kraj.cca2})</h1>
        </div>
                </Link>
        )
    }
            

        </div>
    )

}
