import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faBriefcase,
  faEnvelope,
  faPhone
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <nav className='flex gap-4 md:gap-0 items-start md:items-center justify-between flex-wrap md:flex-row'>
<span className='bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl'>A

</span>
<div className="flex item-centre justify-center gap-8">
    <span className='flex items-center justify-center gap-2'>
       <FontAwesomeIcon icon={faHouse} />
       <span className='text-gray-600 flex items-center justify-center gap-2 cursor-pointer hover:text-blue-700'
       >Home</span>
    </span>  
      <span className='flex items-center justify-center gap-2'>
        <FontAwesomeIcon icon ={faUser} />
        <span className='text-gray-600 flex items-center justify-center gap-2 cursor-pointer hover:text-blue-700'>About Me </span>
      </span>

      <span className='flex items-center justify-center gap-2'>
        <FontAwesomeIcon icon ={faBriefcase} />
        <span className='text-gray-600 flex items-center justify-center gap-2 cursor-pointer hover:text-blue-700'>Education</span>
      </span>

      <span className='flex items-center justify-center gap-2'>
        <FontAwesomeIcon icon ={faPhone} />
        <span className='text-gray-600 flex items-center justify-center gap-2 cursor-pointer hover:text-blue-700'>Contact Me</span>
      </span>
     
   
</div>
    </nav>
  )
}
