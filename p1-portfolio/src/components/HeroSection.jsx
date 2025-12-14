import React from 'react'

export default function HeroSection() {
  return (
    <div className='mt-8 flex items-center justify-center md:justify-between flex-wrap'>
      <div>
    <span className='text-blue-400 text-xl  '>
      Welcome to my site
    </span>
    <h1 className='text-5xl text-blue-500 md:text-7xl mt-8 leading-tight'>Hii, I'm Aditya , a <br /> UI / UX&nbsp;<span className='text-blue-600'> Designer</span>  </h1>
    <span className='flex md:w-[35rem] mt-8 text-gray-600'>
      A UI/UX designer creates user-centered designs for digital products by conducting user research, developing wireframes, and designing visually appealing interfaces. They ensure the product is intuitive, functional, and provides a seamless user experience. 
    </span>
    <div className=' flex items-center gap-4 mt-8' >
      <button className=' cursor-pointer bg-blue-500 text-white py-2 px-6 text-xl rounded-md hover:bg-blue-600'>Hire Me </button>
      <button className=' cursor-pointer bg-blue-500 text-white py-2 px-6 text-xl rounded-md hover:bg-blue-600'>View Resume</button>
    </div>
      </div>
      <div>
        <img src="/assets/hero.avif" alt="hero image"  className='w-[25rem] h-[25rem] md:mt-0 mt-16 rounded-2xl'/>
      </div>
    </div>
  )
}
