import React from 'react'
import { Button } from "@/components/ui/button"

const Land = () => {
    return (
        <div className="bg-blue-500 w-full h-screen">
            <div className="flex flex-row justify-around bg-white gap-230">
                <h2 className="bg-blue-300 w-30 h-8 mb-7 mt-7 text-white text-center rounded-xl pt-1">AESCION</h2>
                <ul className="absolute right-130 list-none flex flex-row justify-end gap-3 p-8  ">
                    <li>Home</li>
                    <li>Courses</li>
                    <li>Contact</li>
                </ul>
                <button className="bg-blue-400 w-30 h-8 text-white text-center rounded-xl mt-5">Enquiry Form</button>
            </div>
            <section className="fixed left-20 top-30 ">
            <div>
                <h1 className="text-white-400 text-5xl">Transform your <br></br> <strong className="text-yellow-300">Career</strong> <br></br>with AESCION</h1>
                <p className="fixed top-70 mt-10  text-white text-lg opacity-100">Master cutting-edge technologies with industry experts. <br></br>
                    Build your future in tech with hands-on training and real- <br></br>world project.</p>

            </div>
            <div className="mt-60 fixed left-20 top-55  flex gap-10 rounded-sm ">
                {/* <div className="bg-yellow-300 rounded-xl pt-5 pr-13 pl-13 pb-3 text-black-100"><a href="" >Explore courses</a></div>
                <div className="border-solid border-white-500 border-1 rounded-xl pt-5 pr-13 pb-3 pl-13 text-white -100"><a href="">Watch Demo</a></div> */}
                <Button variant="outline" className="text-xl bg-yellow-300 rounded-xl py-5 px-13 text-black-100" >Explore Course</Button>
                <Button variant="outline" className="text-xl border border-black  rounded-xl py-5 px-13 text-black-100 ">Watch Demo</Button>
                
            </div>
            <div className="fixed bottom-30 left-30 flex gap-20 rounded-md text-white">
                <div> <strong className="text-yellow-300">5000+</strong> <br></br>Students Trained</div>
                <div>  <strong className="text-yellow-300">95%</strong>  <br></br>Placement Rate</div>
                <div><strong className="text-yellow-300">50+</strong> <br></br>industry Partners</div>
            </div>
            <div className="w-130 h-190 fixed right-60 top-60">
                <img src="./computer.jpg "/>
            </div>
            </section>
        </div>
       
        
        )
}
export default Land;