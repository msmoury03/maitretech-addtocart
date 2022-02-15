import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loading from "./Loading";
 




const Cart = ({ cart, setcart, handlechnge }) => {
  const [price, setprice] = useState(0);
  const [payment, setpayment] = useState(false);

  const navigate = useNavigate()



 

  const handleremove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setcart(arr);
    handleprice();
  };

  const handleprice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setprice(ans);
  };

  useEffect(() => {
    handleprice();
  });

  
  
  const procedclk = ()=>{

    setpayment(true)


    setTimeout(() => {
      setcart([])
      navigate('/thankyou')
      setpayment(false)
    
    }, 3000);
    
    
  }

  setTimeout(() => {
    
    
  }, 3000);

  


  

  return (
    <div>
   
      {cart.map((val) => {
        return (
          <div>
            <div className=" flex items-center  mx-14 my-5 bg-white rounded">
              <div class="flex w-screen  rounded overflow-hidden shadow-lg justify-between items-center">
                <img class="w-24 h-24 p-4" src={val.image} />
                <p className="text-sm font-bold">{val.name}</p>

                <div className="flex justify-center ">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handlechnge(val, 1)}>+</button>
                <button className=" cursor-default font-bold py-2 px-4 rounded">{val.amount}</button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handlechnge(val, -1)}>-</button>
                </div>

                <p>Price ₹{val.price}</p>
                <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleremove(val.id)}>remove</button>
                
              </div>
            </div>
          </div>
        );
      })}

      {
          price==0? (<div>Cart Empty.....</div>) : 
          (
            <div className="bg-white  justify-center items-center flex">
            <div className=" items-center justify-center p-5 ">
        <p><span>Total Payment </span><span className="text-green-500 font-bold">₹{price}</span></p>
        <button onClick={procedclk} 
         className="mx-5 my-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >Place Order</button>
  
            </div>
            
          
        
        </div>
        
          )
      }
      
      

      
      <div>
      {
        payment?<Loading/> :''
      }
      </div>

    </div>
  );
};

export default Cart;
