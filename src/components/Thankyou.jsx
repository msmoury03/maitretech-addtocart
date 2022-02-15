import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Thankyou = () => {

  const navigate = useNavigate()
  const [time , settime] = useState(4)

  

  // useEffect(()=>{
  //   setcart([])
  // },[])

  setTimeout(() => {



   
    navigate('/')



  }, 5000);

  setInterval(() => {
    settime(time - 1)
  }, 1000);

  



 


  return (
    <div className="bg-white   ">
      <div className=" flex items-center justify-center">
        <p>
          <span>Thank You For Your Order  </span>
          <span className="text-green-500 font-bold"></span>
        </p>
        
      </div>
      <div className="flex items-center justify-center">
      <p>You will be Redirect to Home page within <span className="text-green-700">{time}</span></p>
      </div>
    </div>
  );
};

export default Thankyou;
