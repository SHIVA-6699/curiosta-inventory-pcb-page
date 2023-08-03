import { useState } from "preact/hooks";
import BottomCart from "../BottomCart";
import PCB from "@pages/PCB_Components";

const CartNumber = () =>
 {
  const[cart,setCart]=useState(1)
  const data=cart;

  if(cart>0)
  {
  return(

    <>
    <div className={"flex flex-wrap  items-baseline"}>

      <button class={"p-2 border-spacing-56 text-xl"} onClick={()=>setCart(cart+1)}>+</button>
      <input  value={cart} className={"w-11 h-8  shadow-2xl rounded-md bg-white text-center"} readOnly />
      <button class={"p-2 border-spacing-56 text-xl "} onClick={()=>setCart(cart-1)}>-</button>
    </div>
  

 
   </>
   );
  }

  return(
 
    <>
         <div className={"flex flex-wrap justify-end items-baseline"}>

      <button class={"p-2 border-spacing-56 text-xl"} onClick={()=>setCart(cart+1)}>+</button>
      <input  value={cart} className={"w-11 h-8 text-center shadow-2xl rounded-md bg-white"} readOnly />
      <button class={"p-2 border-spacing-56 text-xl "} >-</button>
    </div>
    
    </>
  
    
  )
  }

export default CartNumber;