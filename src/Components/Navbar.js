
import React from 'react'


const Navbar = () => {
  return (
    <div className=' bg-slate-950'>
        <div className='flex justify-between p-3 mx-auto w-[1200px] '>
        <div className='w-[120px]'>
           <img className='mt-2' src="/images/main.png" alt="" />
        </div>
        <div className='flex  gap-5 text-white text-2xl'>
            <div>Home</div>
            <div>Store</div>
            <div>Live TV</div>
            <div>Categories</div>
        </div>
        <div className='flex gap-3 text-white text-2xl'>
        <div className='bg-white h-10 w-10 p-2'><img  className='h-5 w-5 text-white' src="https://cdn-icons-png.flaticon.com/128/54/54481.png" alt="" /></div>
        <div>Try For Free</div>
        <div>EN</div>
        <div><img className='rounded-full h-10 ' src={'/images/images.jpeg'} alt="" /></div>
        </div>
        </div>
    </div>
  )
}

export default Navbar