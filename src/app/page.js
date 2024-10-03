import Namelist from "@/components/namelist";
import Image from "next/image";


export default function Home() {

  const lista = ["1","2","3"]

  return (
    <div className="flex flex-col justify-center items-center h-screen">
    <Namelist imie="Jan Kowalksi"/>
    <Namelist imie="Jan" ok/>
    <Namelist imie="Kowalksi"/>
    <Namelist imie="Kowal" ok/>

    {
      lista.map((osoba) => (
        <Namelist imie={osoba}/>
      ))
    }
    </div>
  );
}