import React, {useContext} from 'react'
import { Button } from "@/components/ui/button"
import { UserContext } from '../App';




const Page = () => {
    const {isDark} = useContext(UserContext);
  return(
    
    
    <div className={`h-178 ${isDark ? "bg-black text-white" : "bg-white text-black"}`} >
       <div className="mt=0">
       <section className="py-40 px-40 flex justify-between ">
        <div>
            <h2 className="text-4xl text-black-1000 ">Timeless Elegance Crafted in Gold</h2><br></br>
            <p>Discover exclusive handcrafted jewellery collections designed to celebrate your beauty and special moments.</p>
            <Button variant="outline" className="bg-blue-400  rounded-2xl mt-10">Explore Collection</Button>
        </div>
        <div className="w-60 h-40 fixed right-60 top-50">
          <img src="https://images.unsplash.com/photo-1611652022419-a9419f74343d " className="rounded-2xl"/>
        </div>
        </section>
        </div>
    </div>
    
    
  )
}
export default Page