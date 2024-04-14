import React from 'react'
import { useNavigate } from 'react-router-dom'

const Createaccount = () => {
 const navigate= useNavigate()

 const handler = () => {
navigate('/login')
 }

  return (
    <div>
   <div className='flex justify-center items-center flex-col mt-9 h-full'>
      <div >
    <img className='h-19 ' src="/images/logo.png" alt="" />
    </div>
    <div>
    <form className='flex shadow-sm justify-start flex-col border h-full p-8 mt-7' action="">
      <div className='flex '>
      <div className=' font-semibold text-4xl tracking-wide'>Create Account</div>
      </div>
      <div className='flex'>
      <div className='font-bold ml-0 mt-5'>Your Name</div>
      </div>
      <div className='flex flex-col gap-4 mt-2 mb-4'>
      <input className=' border shadow-md rounded-sm w-[400px] p-2 border-gray-500  rounded-md' placeholder='first and last name' type="text" />
      </div>
      
   
      <div className='flex'>
      <div className='font-bold '>Mobile Number</div>
      </div>
      <div className='flex gap-6'>
      <div className=' border rounded-lg p-3'>IN +91</div>
      <input className=' border shadow-md rounded-sm w-[310px] p-3  border-gray-500  rounded-md' placeholder='Mobile Number' type="number" />
      
      </div>
      <span  onClick={handler} className='text-blue-600 flex cursor-pointer mb-3 mt-2'>Use your email instead</span>

      <div className='flex'>
      <div className='font-bold '>Password</div>
      </div>
      <input className=' border shadow-md rounded-sm w-[400px] p-2 border-gray-500  rounded-md mb-2' placeholder='At lest 6 characters' type="text" />
     <div className=' leading-tight mb-4'>To verify your number, we will send you a text message <br/> with a temporary code. Message and data rates may <br/> apply.</div>
      <button className=' p-2 rounded-lg bg-yellow-400 w-[400px] text-black'>Continue</button>
      

      <div className=' w-full mt-4 mb-4'>
        <hr />
      </div>
      <div>Already have an account? 
        <span  onClick={handler} className='text-blue-600 cursor-pointer'> Sign in</span>
    </div>
    </form>
   
   
    </div>
   
  </div>

  </div>


  )
}

export default Createaccount