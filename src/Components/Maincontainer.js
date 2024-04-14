import React from 'react'
import { useNavigate } from 'react-router-dom'






const Maincontainer = () => {

  const navigate = useNavigate()

 
 const btnhandler = () => {

  navigate('/login')
 }


  return (
    <div className=' w-full relative bg-gradient-to-r to-black'>
        <img className='w-full absolute' src={'/images/bg.jpg'} alt="" 
        />
         <div className=' absolute flex flex-col  items-start ml-8 mt-9'>
            <div className='text-white font-semibold text-6xl mb-8'>Welcome to Prime Video</div>
            <div className='text-white font-semibold text-3xl '>Watch the latest movies, TV shows, and award-winning </div>
            <div className='text-white font-semibold text-3xl mb-4'>Amazon Originals</div>
            <button onClick={btnhandler} className=' bg-sky-500 px-9 py-3 text-white font-semibold text-2xl rounded-md'>
             Sign in to join Prime</button>
        </div>
       
    </div>
  )
}

export default Maincontainer