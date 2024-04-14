import React from 'react'
import { useNavigate } from 'react-router-dom'


const Login = () => {
  const navigate = useNavigate()

const btnhandler = () => {
 navigate('/Createaccount')
}
  

 


  return (
    <div className='flex justify-center items-center flex-col mt-9 h-full'>
      <div >
    <img className='h-19 ' src="/images/logo.png" alt="" />
    </div>
    <div>
    <form className='flex shadow-sm justify-start flex-col border h-full p-8 mt-7' action="">
      <div className='flex '>
      <div className=' font-semibold text-4xl tracking-wide'>Sign in</div>
      </div>
      <div className='flex'>
      <div className='font-bold ml-0 mt-5'>Email or mobile phone number</div>
      </div>
      <div className='flex flex-col gap-4 mt-2 mb-4'>
      <input className=' border shadow-md rounded-sm w-[400px] p-2 border-gray-500  rounded-md' type="text" />
      <button className=' p-2 rounded-lg bg-yellow-400 w-[400px] text-black'>Continue</button>
      </div>
      <div>By continuing, you agree to the Amazon Conditions of <br/> Use and Privacy Notice.</div>
      <span className=' text-blue-600 ml-0'>Need help?</span>
    </form>
    <div className='flex mt-6'>
      <div class="flex-grow border-t border-gray-300 mt-3"></div>
      <span class="flex-shrink mx-4 text-gray-500">New to Amazon?</span>
      <div class="flex-grow border-t border-gray-300 mt-3"></div>
    </div>
    <button onClick={btnhandler} className=' border-2 shadow-md p-2  w-full mt-4 rounded-lg'>Create Your Amazon Account</button>
    </div>
  </div>
  )
}

export default Login