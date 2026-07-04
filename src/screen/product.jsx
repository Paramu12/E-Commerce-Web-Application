import React, {useContext} from 'react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { UserContext } from '../App';
import { toast } from "sonner"


const dummyData = [
  {id:1, img: "/photo1.jpg", title: "Luminous", badge: "10,454", desc: "A practical talk on component APIs, accessibility, and shipping faster.", price:10000, quantity:1 },
  {id:2, img: "/photo2.jpg", title: "Ethereal", badge: "20,677", desc: "A practical talk on component APIs, accessibility, and shipping faster.",price:20000, quantity:1},
  {id:3, img: "/photo3.jpg", title: "Elite Gems", badge: "29,456", desc: "A practical talk on component APIs, accessibility, and shipping faster.",price:30000, quantity:1 },
  {id:4, img: "/photo4.jpg", title: "Royal Gold Palace", badge: "80,345", desc: "A practical talk on component APIs, accessibility, and shipping faster.",price:60000, quantity:1 },
  {id:5, img: "/photo5.jpg", title: "Divine Sparkle Jewels", badge: "20,345", desc: "A practical talk on component APIs, accessibility, and shipping faster.",price:40000, quantity:1 },
  {id:6, img: "https://media.istockphoto.com/id/2077197585/photo/emerald-necklace.jpg?s=1024x1024&w=is&k=20&c=Fx9ITWt09VbTHS4J1lMfHm1lwkBAE3_j1wNBC8Qv2kE=", title: "Diamond Dynasty", badge: "70,456", desc: "A practical talk on component APIs, accessibility, and shipping faster.",price:70000, quantity:1 }
];

const Product = () => {
        const {isDark} = useContext(UserContext);
        const dispatch = useDispatch();
  return (
    <div className={`${isDark ? "bg-black text-white" : "bg-white text-black "} flex flex-col gap-4 w-[100%] py-10 px-10`}>
      
      <div className='flex flex-row flex-wrap gap-3 p-3'>
        {
          dummyData.map((items) => 
            <Card className="relative mx-auto w-full max-w-sm pt-0 mb-4  " key={items.id}>
              <div className="absolute inset-0 z-30 aspect-video bg-black/35 rounded-tl-lg rounded-tr-lg"  />
              <img
                src={items.img}
                alt="Event cover"
                className="relative z-20 aspect-video w-full object-cover brightness-60 dark:brightness-40 rounded-tl-lg rounded-tr-lg"
              />
              <CardHeader>
                <CardAction>
                  <Badge variant="secondary">{items.badge}</Badge>
                </CardAction>
                <CardTitle>{items.title}</CardTitle>
                <CardDescription>
                  {items.desc}
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button className="w-full" onClick={() =>
                  {  
                    dispatch(addToCart({...items})) 
                    toast.success(` ${items.title} added to cart!`)}}>{`Buy @ ₹${items.price}`}</Button>
              </CardFooter>
            </Card>
          
        )
    }

      </div>
    </div>
  )
}

export default Product