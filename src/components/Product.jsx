import React from 'react'

const Product = ({item,handlclk}) => {
  return (
    <div className=" flex items-center  mx-14 my-5 bg-white rounded">
            <div class="max-w-xs rounded overflow-hidden shadow-lg">
              <img
                class="w-64 h-48"
                src={item.image}
                
              />
              <div class="px-1 py-1">
                <div class=" text-lg font-semibold mb-2">{item.name}</div>
                <div class=" text-sm mb-2">Price ₹{item.price}</div>
                <div>
                  <button onClick={()=>handlclk(item)} class=" w-16 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border  rounded m-1">
                    +
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
  )
}

export default Product