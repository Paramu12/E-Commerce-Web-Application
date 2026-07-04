import React, { createContext, useState } from 'react'
import { Routes, Route, Outlet } from 'react-router-dom';
import Home from './screen/home';
import Contact from './screen/contact';
import About from './screen/about';
import Sheet from './screen/sheet';
import Login from './screen/login';
import Land from './screen/land';
import Page from './screen/page';
import Product from './screen/product';
import Feedback from './screen/feedback';
import Cart from './screen/cart';
import Navigationbar from './components_reuse/navigationbar'
import NotFound from './screen/NotFound';

export const UserContext = createContext();

const App = () => {
  const [isDark, setIsDark] = useState(false);
  const LayoutWithNav = () => (
    <>
      <Navigationbar />
      <Outlet />
    </>
  );

  return (
   <div >
      <UserContext.Provider value={{ isDark, setIsDark }}>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='*' element={<NotFound />} />

          <Route element={<LayoutWithNav />}>
            <Route path='/home' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
            <Route path='/sheet' element={<Sheet />} />
            <Route path='/land' element={<Land />} />
            <Route path='/page' element={<Page />} />
            <Route path='/product' element={<Product />} />
            <Route path='/feedback' element={<Feedback />} />
            <Route path='/cart' element={<Cart />} />
          </Route>
        </Routes>
      </UserContext.Provider>
    </div>
  )
}

export default App