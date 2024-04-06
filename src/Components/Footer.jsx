import React from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md';
import PlayStore from "../assets/Play-store.png";
import AppStore from "../assets/appStore.png";
import { ImLinkedin2 } from "react-icons/im";
import { FaFacebookF } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineYoutube } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
const Footer = () => {
  return (
    <footer className='w-full flex items-center justify-center '>
    <section className='mt-16 pt-4 justify-center items-center' >
      <div className='flex justify-center items-center flex-col md:flex-row md:justify-between' >      
         <div className='w-[30%] flex flex-col '>
         <h1 className="text-[2.36875rem] leading-[1.4] pb-[16px] text-[#0b3558] font-extrabold">Easy
         <br></br><label className=" text-[#006bff]" for="deliveryinp"> ahead</label></h1>
         <p className='text-xl text-[#33495a] '>We take the work out of connecting with others so you can accomplish more.</p>

  <div className='w-full font-bold justify-between hidden md:flex md:flex-col'>
   
    <div className='flex mt-14 border rounded-lg shadow-sm p-4 justify-between text-xl'>
      <p>English</p>
      <MdKeyboardArrowDown className='text-2xl font-bold'/>
    </div>
    <div className='flex mt-14 '>
      <img src={PlayStore}  width={150} />
      <img src={AppStore} width={160} />
    </div>
    <div className='flex gap-10 mt-20 text-2xl mb-8'>
      <BsTwitter/>
      <FaFacebookF/>
      <BsInstagram/>
      <ImLinkedin2 />
      <AiOutlineYoutube/>
    </div>
  </div>
    
       
       
       </div >
       <div className="w-[60%] grid grid-cols-2 md:grid-cols-3 gap-8">
       <div >
         <div className='p-[10px] text-[#0b3558] text-xl font-extrabold'> About</div>
         <div className='p-[10px] text-[#0b3558] text-[1rem]'> About Calendly</div>
         <div className='p-[10px] text-[#0b3558] text-[1rem]'> Contact Sales</div>
         <div className='p-[10px] text-[#0b3558] text-[1rem]'> Newsroom</div>
         <div className='p-[10px] text-[#0b3558] text-[1rem]'> Careers</div>
         <div className='p-[10px] text-[#0b3558] text-[1rem]'> Security</div>
       </div>
       <div >
         <div className='p-[10px] text-[#0b3558] text-xl font-extrabold'>Solutions</div>
         <div className='p-[10px] text-[#0b3558] text-[1rem]' > Customer Success</div>
         <div className='p-[10px] text-[#0b3558] text-[1rem]'> Sales</div>
         <div className='p-[10px] text-[#0b3558] text-[1rem]'> Recruiting</div>
         <div className='p-[10px] text-[#0b3558] text-[1rem]'> Information Technology</div>
         <div className='p-[10px] text-[#0b3558] text-[1rem]'> Marketing</div>

       </div>
       <div >
         <div className='p-[10px] text-[#0b3558] text-xl font-extrabold'> Popular Features</div>
         <div className='p-[10px] text-[#0b3558] text-[1rem]'> Embed Calendly</div>
         <div className='p-[10px] text-[#0b3558] text-[1rem]'> Availability</div>
         <div className='p-[10px] text-[#0b3558] text-[1rem]'> Sending Notifications</div>
         <div className='p-[10px] text-[#0b3558] text-[1rem]'> Using Calendly Mobile</div>
         
       </div>
       <div>
         <div className='p-[10px] text-[#0b3558] text-xl font-extrabold'>Support</div>
         <div className='p-[10px] text-[#0b3558] text-[1rem]'>Help Center</div>
         <div className='p-[10px] text-[#0b3558] text-[1rem]'>Video Tutorials</div>
         <div className='p-[10px] text-[#0b3558] text-[1rem]'>Cookie Settings</div>
       </div>
       <div>
         <div className='p-[10px] text-[#0b3558] text-xl font-extrabold'> Add-Ons</div>
         <div className='p-[10px] text-[#0b3558] text-[1rem]'> Download for Chrome</div>
         <div className='p-[10px] text-[#0b3558] text-[1rem]'> Download for Firefox</div>
       </div>
       <div>
         <div className='p-[10px] text-[#0b3558] text-xl font-extrabold'> Developers</div>
         <div className='p-[10px] text-[#0b3558] text-[1rem]'> Developer Tools</div>
       </div>
     </div>
    </div>
    
     <div className="flex justify-center sm:justify-between mt-16 mb-8">
       <label for="" className='m-[7px] text-[#476788] leading-[1.5] text-[0.75rem] inline-block cursor-default'>Copyright Calendly 2022</label>
       <label for="" className='m-[7px] text-[#476788] leading-[1.5] text-[0.75rem] inline-block cursor-default'>Privacy / Terms and Conditions</label>
     </div>
   
 </section>
 </footer>

  )
}

export default Footer;

