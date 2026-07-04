import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
const HOVER_CARD_SIDES = ["left", "top", "bottom", "right"] as const

const Contact= () => {
  const nav=useNavigate();
  return (
   <div>
     <h1 style={{color: "green"}}>Contact page</h1>
    <button  className="btn" onClick={() => nav("/about")}>Go to About</button>
    <button className="btn" onClick={() => nav("/home")}>Go to home</button>
    <button className="btn" onClick={() => nav("/sheet")}>Go to sheet</button>
    

    <div className="flex flex-wrap justify-center gap-2">
        {HOVER_CARD_SIDES.map((side) => (
        <HoverCard  key={side} openDelay={100} closeDelay={100}>
          <HoverCardTrigger asChild>
            <Button variant="outline" className="capitalize">
              {side}
            </Button>
          </HoverCardTrigger>
          <HoverCardContent side={side}>
            <div className="flex flex-col gap-1">
              <h4 className="font-medium">Hover Card</h4>
              <p>This hover card appears on the {side} side of the trigger.</p>
            </div>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
   </div>
  )
}

export default Contact;