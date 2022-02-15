import React,{ createContext, useReducer, useState }  from 'react'
import { cartreducer } from './Reducer'


export const Cart = createContext()

const Context = (props) => {

    const products = [
        {"name": "Fries",
        "price": "100",
        "image": "../assets/fries.jpeg"}
    ]

    const [state, dispatch] = useReducer(cartreducer,{
        products:products,
        cart:[]
    })

  return (
    
    <Cart.Provider value={{state, dispatch}}>
        {props.children}
    </Cart.Provider>
  )
}

export default Context