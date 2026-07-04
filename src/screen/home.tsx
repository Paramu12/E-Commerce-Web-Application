import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const Home = () => {
    const nav = useNavigate();
   
  return (
   <div>
    <div className="flex justify-around px-2 py-5 bg-blue-100">
              <h1 className="text-2xl text-black-900" onClick={() => nav("/")}>LuxeGold</h1>
            <nav className="flex justify-around  gap-15">
              <div className="mt-1 flex justify-around gap-8">
                <a href="#">Home</a>
                <a href="#" onClick={() => nav("/product")}>Collections</a>
                <a href="#">About</a>
                </div>
                <div className="flex justify-around gap-8">
               <Button onClick={() => nav("/feedback")}>FeedBack</Button>
                <Button  onClick={() => nav("/cart")}>Cart</Button>
               </div>
            </nav>
           </div>
     <h1 style={{color: "green"}}>Home page</h1>
     <button className="btn" onClick={() => nav("/about")}>Go to About</button>
     <button className="btn" onClick={() => nav("/contact")}>Go to Contact</button>
     <button className="btn" onClick={() => nav("/sheet")}>Go to sheet</button>
     
     <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline">Open Dialog</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="name-1">Name</Label>
              <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
            </Field>
            <Field>
              <Label htmlFor="username-1">Username</Label>
              <Input id="username-1" name="username" defaultValue="@peduarte" />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
   </div>
  )
}

export default Home;