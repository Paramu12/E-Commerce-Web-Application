import React, {useContext} from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  
  CardContent,
  
  CardFooter,
  
  
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { UserContext } from '../App'

const Feedback = () => {
  const {isDark} = useContext(UserContext);
  return (
    <div className={`mt-0 ${isDark ? "bg-black text-white" : "bg-white text-black"} h-165 `}>
      <div className="pt-10">
      <Card className="w-full max-w-sm  ml-150">
      
      <CardContent >
        <form >
          <div className="flex flex-col  gap-6">
            <div className="grid gap-2">

              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone-no">Phone_No</Label>
              <Input
                id="phone-no"
                type="number"
                placeholder="Enter your phone_no"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
             
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input id="password" type="password" required />
            </div>
             <div className="grid gap-2">
              <Label htmlFor="message">Suggestion</Label>
              <Input
                id="message"
                type="text"
                
                required
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          Submit
        </Button>
       
      </CardFooter>
    </Card>
    </div>
     </div>
    // <div className=" mt-30 ">
    //   <h1 className="text-orange-400 text-4xl text-center">Feedback</h1>
    //   <form className="mt-20 ml-150 bg-blue-100 w-100 h-90 border border-blue rounded-2xl py-10 px-6">
    //     <table  className="border-separate border-spacing-y-4 border-spacing-x-4">
    //       <tr>
    //         <td>Name:</td>
    //         <td> <input type="text" placeholder="Enter your name" className="border border-black" /></td>
    //       </tr>
    //       <tr></tr>
    //       <tr>
    //         <td>Email:</td>
    //         <td><input type="text" placeholder="Enter your email" className="border border-black"/></td>
            
    //       </tr>

    //       <tr>
    //         <td>Phone No:</td>
    //         <td> <input type="number" placeholder="Enter your number " className="border border-black" /></td>
    //       </tr>
    //       <tr>
    //         <td>Password:</td>
    //         <td><input type="password" placeholder="Enter your password"className="border border-black"/></td>
    //       </tr>
    //       <tr>
    //         <td>Suggestion:</td>
    //         <td> <textarea id="Message" name="message" className="border border-black"/></td>
    //       </tr>
    //     </table>
         
          
         
          
         
          
    //   </form>
        
    // </div>
   
  )
}

export default Feedback