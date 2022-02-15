import React from 'react'
import ReactLoading from "react-loading";

const Loading = () => {

    return (
        <div className='flex justify-center items-center mt-20'>

        <ReactLoading type="spin" color="#2c67bf" height={'5%'} width={'5%'}/>

    </div>
  )
}

export default Loading