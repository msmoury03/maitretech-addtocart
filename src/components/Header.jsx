import React from "react";
import { Link } from "react-router-dom";


const Header = ({setshow,size}) => {
  return (
    <div className="bg-blue-500 text-white h-12 flex items-center justify-between">
      <Link to='/'><div onClick={()=>setshow(true)} className="flex mx-1 ml-5">
        <img src="../assets/restaurant_24px.svg" />
        <p className="text-lg font-bold">Food Restaurants</p>
      </div>
      </Link>

     <Link to='/cart'> <div  className="mr-52">
        <li class="font-sans block mt-4 lg:inline-block lg:mt-0 lg:ml-6 align-middle text-black hover:text-gray-700">
          <a href="#" role="button" class="relative flex">
            <svg class="flex-1 w-8 h-8 fill-current" viewbox="0 0 24 24">
              <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
            </svg>
            <span class="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
              {size}
            </span>
          </a>
        </li>

      </div>
      </Link>

    </div>
  );
};

export default Header;
