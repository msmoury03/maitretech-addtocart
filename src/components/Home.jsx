import React from 'react'
import { Link } from 'react-router-dom'
import Loading from './Loading'



const Home = () => {
  return (
    <div className=' '>
        <div className='flex items-center justify-center'>
        <p className='font-sans text-3xl -space-y-32'>Welcome to Food's Kitchen</p>
        </div>
        <div className='flex items-center justify-center'>
            
            <Link to='/menu'><button className='bg-blue-800 text-white  rounded w-28 '>Go to Menu</button> </Link>
            
            
        </div>

        


    </div>
  )
}

export default Home