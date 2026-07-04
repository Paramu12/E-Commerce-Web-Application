import React from 'react';
import {useNavigate} from 'react-router-dom';
import { Button } from "@/components/ui/button"

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col justify-center items-center gap-3 text-center h-screen'>
      <h1 className='font-bold text-3xl'>404 - Page Not Found !</h1>
      <p>This page you are looking for does not exist</p>
      <Button variant="link" onClick={() => navigate("/")}> Go to Login </Button>
    </div>
  )
}

export default NotFound;