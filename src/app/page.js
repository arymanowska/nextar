import Namelist from "@/components/namelist";
import Image from "next/image";
import Link from "next/link";


export default function Home() {

  const lista = [{imie: "test1", status: true},{imie: "test2", status: true},{imie: "test3", status: false}]

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-2">
    <Namelist imie="Jan Kowalski"/>
    <Namelist imie="Jan" ok/>
    <Namelist imie="Kowalski"/>
    <Namelist imie="Kowal" ok/>

    {
      lista.map((osoba, idx) => (
        <Namelist key={idx} imie={osoba.imie} ok={osoba.status}/>
      ))
    }
    
    </div>
  );
}