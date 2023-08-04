import { useState } from "preact/hooks";


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
      <input  value={cart} className={"w-11 h-8 text-center shadow-lg bg-white rounded-md box-border border-0 outline-none "} readOnly />
      <button class={"p-2 border-spacing-56 text-xl "} onClick={()=>setCart(cart-1)}>-</button>
    </div>
  

 
   </>
   );
  }

  return(
 
    <>
         <div className={"flex flex-wrap justify-center items-baseline"}>

      <button class={"p-2 border-spacing-56 text-xl"} onClick={()=>setCart(cart+1)}>+</button>
      <input  value={cart} className={"w-11 h-8 text-center shadow-lg bg-white rounded-md box-border border-0 outline-none "} readOnly />
      <button class={"p-2 border-spacing-56 text-xl "} >-</button>
      
    </div>
    
    </>
  
    
  )
  }

export default CartNumber;