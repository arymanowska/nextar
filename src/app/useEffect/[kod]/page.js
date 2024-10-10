"use client"
import { useState, useEffect} from "react"
import Image from "next/image"
import Borders from "@/components/borders"
export default function KrajInfo({params}){
    
const [kraj, setKraj] = useState({})
const[pobieranie, setPobieranie] = useState(true)
const [error, setError] = useState(false)

    useEffect(()=>{
        const getData = async ()=>{

            try{
                const response = await fetch(`https://restcountries.com/v3.1/alpha/${params.kod}`)
                const json = await response.json()
                console.log(json)
                setKraj(json[0])

                if(response.status == 400){
                    setError(true)
                }
    
            }catch(error){
                setError(true)
                console.log(error)
            }finally{
                setPobieranie(false)
            }
        }
        getData()
    },[])


    return(
        <div>
            {pobieranie && <h1>Pobieranie danych...</h1>}
            {error && <h1>Nie udało się pobrać danych</h1>}
            {kraj.cca2 != null && 
            <div><div class="flex flex-col justify-center items-center text-center min-screen">
            <Image src={kraj.flags.png} width={600} height={200}></Image>
            <h1>{(kraj.name.common).toUpperCase()}({(kraj.cca2).toLowerCase()})</h1>
            <h1>capital: {kraj.capital[0]}</h1>
            <h1>population: {kraj.population}</h1>
            </div>

            <div className="flex flex-wrap gap-2">
                <Borders borders={kraj.borders}> 

                </Borders>
            </div>
            </div>
        

            }
        </div>
    )
}

