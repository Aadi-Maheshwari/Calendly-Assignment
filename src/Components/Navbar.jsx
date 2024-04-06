import React from 'react'
import logo from '../assets/logo.svg';
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaBars , FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {
  const [nav,setnav]=useState(false);
  return (
    <nav>
    <div className=' items-center justify-center mr-4 ml-4 relative '>
     <div className='flex justify-between  p-8 w-full  '>
      <div>
        <img src={logo} className='w-40 ' />
      </div>
      <div className='hidden xl:flex'>
        <ul className='flex gap-10 font-bold mt-2'>
          <li>Individuals</li>
          <li>Teams</li>
          <li>Enterprises</li>
          <li className='flex '>Product <MdKeyboardArrowDown className='mt-2'/></li>
          <li>Pricing </li>
          <li className='flex'>Resources <MdKeyboardArrowDown className='mt-2'/> </li>
        </ul>
      
      </div>
      <div className='flex'>
        <button className='font-bold hidden md:inline-flex items-center justify-center'>Log In</button>
        <button className='text-white bg-blue-600 p-4 rounded-full ml-4 pr-8 pl-8 text-xs sm:text-[1rem] hover:bg-blue-700 duration-300'>Get started</button>
        
        <div onClick={()=>{
      setnav(!nav)
     }} className='cursor-pointer pt-3 pl-2 text-xs  z-10 text-black md:hidden justify-center items-center'>
      {
        !nav ? (<FaBars size={25} />) : (<FaTimes size={25}/>)
      }
     </div>
      </div>
    
    
     {nav &&(
         <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full font-bold bg-white mt-8'>
         <li>Individuals</li>
         <li>Teams</li>
         <li>Enterprises</li>
         <li className='flex '>Product <MdKeyboardArrowDown className='mt-2'/></li>
         <li>Pricing </li>
         <li className='flex'>Resources <MdKeyboardArrowDown className='mt-2'/> </li>
       </ul>
     )}
    </div>
  </div>
 </nav>
  )
}

export default Navbar;