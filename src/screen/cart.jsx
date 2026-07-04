import React, {useContext} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, clearCart } from '../redux/cartSlice';
import { Button } from "@/components/ui/button";

import { UserContext } from '../App'

const Cart = () => {
  const {isDark} = useContext(UserContext);
   const { items, totalPrice, totalQuantity } = useSelector(state => state.cart);
  const dispatch = useDispatch();
  return (
    <div className={`${isDark ? "bg-black text-white" : "bg-white text-black"} text-center h-screen`}>
       <div className='flex justify-center items-center flex-col gap-2'>
      <h2>Cart : </h2>
      <p>Total items: {totalQuantity}</p>

      {
        items.map(data => (
          <div key={data.id} className='border-2 p-2'>
            <h4>{data.title}</h4>
            <p> QTY : {data.quantity}</p>
            <p> TOTAL : ₹{data.totalPrice}</p>

            <div >
              <Button variant="outline" onClick={() => dispatch(addToCart(data))}>+</Button>
              <Button variant="outline" onClick={() => dispatch(removeFromCart(data.id))}>-</Button>
            </div>  
            
          </div>  
        ))
      }

      <h3>TOTAL PRICE: ₹{totalPrice}</h3>
      <Button variant="destructive" onClick={() => dispatch(clearCart())}>Clear cart</Button>

    </div>
    </div>
  )
}

export default Cart