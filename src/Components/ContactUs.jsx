import React from 'react'

const ContactUs = () => {
  return (
    // sales part
    <div className='relative mt-16 w-11/12 max-w-[1180px] mx-auto'>
      <div className='relative w-11/12 max-w-[1080px] mx-auto pt-4'>
        <h1 className='text-blue-500 font-semibold uppercase text-xl text-center'>Solutions</h1>
        <div className='text-center mx-auto mt-14'>

        <p className='text-7xl font-extrabold'><span className='text-blue-600 '>Calendly</span><span className='text-[#11385a]'> for the work you do</span>
          </p>
        <p className='text-3xl mt-14 text-[#5c7287]'>Across a range of uses,Calendly helps people and teams build effeciency, professionalism, and results into the work they do.</p>
      
       
        <button className='text-white bg-blue-600 font-bold p-5 rounded-full ml-6 pr-10 pl-10 mt-14 hover:bg-blue-700 duration-300'>Contact Sales</button>
        </div>
      </div>

        {/* sol part */}
      <div className=' w-11/12 max-w-[1180px] mx-auto relative mt-16'>
        <h1 className='text-blue-500 font-semibold uppercase text-xl text-center '>Solutions</h1>
        <h4 className='text-5xl text-[#11385a] font-bold text-center mt-16'>Calendly can solve your specific pain points</h4>
      </div>
    </div>
  )
}

export default ContactUs;
// #11385a
// #2596be