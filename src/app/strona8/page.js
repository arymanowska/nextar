"use client"
import { Button } from "@/components/ui/button"
import { DialogHeader } from "@/components/ui/dialog"
import { HoverCard } from "@/components/ui/hover-card"
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@radix-ui/react-dialog"
import { HoverCardContent, HoverCardTrigger } from "@radix-ui/react-hover-card"
import { useState } from "react"
export default function Page8(){

const [licznik, setLicznik] = useState(0)

const plus = () =>{
    setLicznik(licznik+1)
}

const minus = () =>{
    setLicznik(licznik-1)
}

    return(
        <div className="flex justify-center items-center h-screen gap-5 flex-col">
            <HoverCard>

            <HoverCardTrigger>

            <HoverCardContent>


    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        licznik to: {licznik}
    </h1>
            </HoverCardContent>
            </HoverCardTrigger>
            </HoverCard>
        <div>

        <Button onClick={minus}>-1</Button>
        <Button onClick={plus}>+1</Button>
        </div>
        <Dialog>
  <DialogTrigger><Button>Settings</Button></DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
      <Button>Zeruj</Button>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

        
        </div>
    )
}