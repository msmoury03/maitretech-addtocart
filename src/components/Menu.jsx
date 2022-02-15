import React, { useContext, useState } from "react";
import { Cart } from "../context/Context";
import data from "../data/data.json";
import Product from "./Product";



const Menu = ({handlclk}) => {
  

  


  

  return (
    <div className=" flex flex-wrap items-center justify-center w-full  ">
      {data.map((val) => {
        return (
          <Product item={val} handlclk={handlclk} />
        );
      })}
    </div>
  );
};

export default Menu;
