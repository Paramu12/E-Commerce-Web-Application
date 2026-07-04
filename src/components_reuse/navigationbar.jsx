import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {UserContext} from "../App"


const Navigationbar = () => {
    const navigate = useNavigate();
    const {setIsDark} = useContext(UserContext);
  return (
    <div className='flex justify-between items-center p-4 w-full h-15 border-b-2 border-gray-400 sticky top-0 left-0 right-0 bg-white px-10 z-30'>
        <div>
                <h1 className="text-2xl text-black-900" onClick={() => navigate("/")}>LuxeGold</h1>
        </div>
        <div className='flex items-center gap-10'>
            <Label className='text-lg font-semibold' htmlFor="page" onClick={() => navigate("/page")}>About</Label>
              <Label className='text-lg font-semibold' htmlFor="collection" onClick={() => navigate("/product")}>Collection</Label>
             <Label className='text-lg font-semibold' htmlFor="feedback" onClick={() => navigate("/feedback")}>Feedback</Label>
        </div>
        <div className='flex items-center gap-10'>
            <div className="flex items-center space-x-2">
                <Switch id="airplane-mode" onCheckedChange={(e) => setIsDark(e)}/>
                <Label htmlFor="airplane-mode">Dark Mode</Label>
            </div>
            <img src="./cart.png" alt="logo" className='w-8 h-8' onClick={() => navigate("/cart")}/>
        </div>
    </div>
  )
}

export default Navigationbar
 