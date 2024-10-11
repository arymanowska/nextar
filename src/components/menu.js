import Link from "next/link";

export default function Menu(){

    return(
        <div className="flex flex-row justify-center gap-10">
          <Link href="/" className="text-pink-400">Strona główna</Link>
          <Link href="/strona1" className="text-purple-400">Strona 1</Link>
          <Link href="/strona2" className="text-blue-400">Strona 2</Link>
          <Link href="/strona3" className="text-green-400">Strona 3</Link>
          <Link href="/strona4" className="text-yellow-400">Strona 4</Link>
          <Link href="/strona5" className="text-orange-400">Strona 5</Link>
          <Link href="/useEffect" className="text-red-400">Rest Countries</Link>
          <Link href="/strona6">Strona 6</Link>
          <Link href="/strona7">Strona 7</Link>
          <Link href="/strona7">Strona 8</Link>
        </div>
    )
}