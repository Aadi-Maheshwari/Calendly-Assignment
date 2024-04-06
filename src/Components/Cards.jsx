import React from 'react'
import iconsSales from "../assets/Icon-Sales.svg";
import iconCustomer from "../assets/Icon-Customer-Success.svg";
import iconRecruting from "../assets/Icon-Recruiting.svg";
import iconSolution from "../assets/IT_Solution.svg";
import iconDemand from "../assets/Icon-Demand-Generation.svg";
import iconRevenue from "../assets/Icon-Revenue-Ops.svg";
import { MdKeyboardArrowRight } from "react-icons/md";
const Cards = () => {
  return (
    <>
    
    <div className='relative w-11/12 max-w-[1180px] mx-auto pt-6'>
      
    <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 mt-10 '>
      <div className='flex flex-col border shadow-lg rounded-lg p-10 '>
        <img src={iconsSales} width={40} />
        <h1 className='mt-8 font-bold text-[#11385a] text-2xl'>Sales</h1>
        <div className='h-'>
        <p className='text-lg mt-8 text-[#5c7287]'>Spend more time in selling and less time on admin.Shorter your sales cycle by letting prospects schedule while they're in peak buying mode. </p>
        </div>
       
        <button className='text-xl text-blue-500 hover:text-blue-600 font-bold mt-8 flex'>Learn more <span><MdKeyboardArrowRight className='mt-[0.40rem]'/></span></button>
      </div>
      <div className='flex flex-col border shadow-lg rounded-lg p-10 '>
        <img src={iconRecruting} width={40} />
        <h1 className='mt-8 font-bold text-[#11385a] text-2xl'>Recruiting</h1>
        <div>
        <p className='text-lg mt-8 text-[#5c7287]'>Simplify recruitment by smoothing every aspect of the interview scheduling process, including automated follow-ups.</p>
        </div>
       
        <button className='text-xl text-blue-500 hover:text-blue-600 font-bold mt-8 flex'>Learn more <span><MdKeyboardArrowRight className='mt-[0.40rem]'/></span></button>
      </div>
      <div  className='flex flex-col border shadow-lg rounded-lg p-10 '>
        <img src={iconSolution} width={40} />
        <h1 className='mt-8 font-bold text-[#11385a] text-2xl'>Education</h1>
        <div className='h-36'>
        <p className='text-lg mt-8 text-[#5c7287]'>Control your office hours,and empower students and parents to schedule appointments easily.</p>
        </div>
        
        <button className='text-xl text-blue-500 hover:text-blue-600 font-bold mt-8 flex'>Learn more <span><MdKeyboardArrowRight className='mt-[0.40rem]'/></span></button>
      </div>
      <div className='flex flex-col border shadow-lg rounded-lg p-10 '>
        <img src={iconRevenue} width={40} />
        <h1 className='mt-8 font-bold text-[#11385a] text-2xl'>Revenue Operations</h1>
        <div>
        <p className='text-lg mt-8 text-[#5c7287]'>Streamline meeting and activity data, Calendly's native integrations with Salesforse and HubSpot ensure up-to-date reporting.</p>
        </div>
        
        <button className='text-xl text-blue-500 hover:text-blue-600 font-bold mt-8 flex'>Learn more <span><MdKeyboardArrowRight className='mt-[0.40rem]'/></span></button>
      </div>
      <div className='flex flex-col border shadow-lg rounded-lg p-10 '>
        <img src={iconDemand} width={40} />
        <h1 className='mt-8 font-bold text-[#11385a] text-2xl'>Marketing</h1>
        <div>
        <p className='text-lg mt-8 text-[#5c7287]'>Convert interested prospects into scheduled meetings and demos faster.Skip steps that cause customer friction.</p>
        </div>
        
        <button className='text-xl text-blue-500 hover:text-blue-600 font-bold mt-8 flex'>Learn more <span><MdKeyboardArrowRight className='mt-[0.40rem]'/></span></button>
      </div>
      <div className='flex flex-col border shadow-lg rounded-lg p-10 '>
        <img src={iconCustomer} width={40} />
        <h1 className='mt-8 font-bold text-[#11385a] text-2xl'>Customer Success</h1>
        <div>
        <p className='text-lg mt-8 text-[#5c7287]'>Offer exceptional support: Your clients will be delighted with one-click scheduling and increased responsiveness.</p>
        </div>
      
        <button className='text-xl text-blue-500 hover:text-blue-600
         font-bold mt-8 flex'>Learn more <span><MdKeyboardArrowRight className='mt-[0.40rem]'/></span></button>
      </div>
    </div>
    </div>
     <div className='w-full relative  '>
      <div className='w-full bg-[#0b2343]'>
      <div className=' items-center mt-14 text-center 
       w-11/12 max-w-[850px] mx-auto pt-4 flex flex-col'>
        <h1 className='text-center text-white font-bold text-4xl pt-20'>Easy access for easy bookings</h1>
        <h4 className='text-[#ced9dd] text-2xl mt-16 '>share your calendly link right from your browser,so you can schedule meetings without the back-and-forth</h4>
        <div className='mb-12 '>
          <button className='text-white bg-blue-600 font-bold p-5 rounded-full ml-6 pr-10 pl-10 mt-16 hover:bg-blue-700 duration-300'>start for free</button>
          <button className='text-white outline rounded-full p-4 ml-6 pl-10 pr-10 mb-16 hover:text-gray-100 duration-300 mt-4' >Talk with Sales</button>
          </div>
      </div>
      </div>
    
     
    </div>
    </>
  )
}

export default Cards;