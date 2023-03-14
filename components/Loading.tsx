import React from 'react';
import PropagateLoader from 'react-spinners/PropagateLoader'


function Loading() {
  return (
    <div className='bg-gradient-to-r from-pink-900 to-purple-900 min-h-screen flex flex-col items-center justify-center'>
    <div className='flex items-center space-x-2 mb-10'>
     <img 
      className='rounded-full h-14 w-14' 
      src="https://imgur.com/c0MlhjN.png" 
      alt="" />
     <h1 className='text-large text-white text-bold'>Loading the Draw</h1>
    </div>
    <PropagateLoader color='orange' size={27}/>
   </div>
  )
}

export default Loading;