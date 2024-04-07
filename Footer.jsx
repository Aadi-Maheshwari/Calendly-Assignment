
import React from 'react'
import logo1 from "../assets/AppStore-15f01eefb2013206cc7e26d98fbe95fb.svg"
import logo2 from "../assets/google-play-badge-logo-svgrepo-com.svg"
import fac from "../assets/facebook.svg"
import ing from "../assets/instagram.svg"
import link from "../assets/linkedin.svg"
import twitt from "../assets/twitter.svg"
import you from "../assets/youtube.svg"
    const Footer = () => {
      return (
        <footer className='flex items-center max-gg:flex-wrap-reverse  justify-center w-full  '>
          
           <section className='  mt-[45px] pt-[20px] px-[30px] ' >
           
             <div className='footer-section max-md:mt-[-65px] max-gg:flex-col flex justify-between max-gg:w-full  m-0 p-0 box-border scroll-smooth '>      
             
                <div className='footerLeft w-[32%] max-gg:w-full m-0 p-0 font-poppins box-border scroll-smooth '>
               
                 <h1 className="footereasy text-left mt-2 text-[35px] leading-[1.2] pb-[20px] text-[#0b3558]  font-poppins   font-extrabold">Easy
                <br></br><label className=" text-[#006bff]" for="deliveryinp"> ahead</label></h1>
                <p className='text-[16px] p-0 mt-6 leading-[1.5]   font-light font-poppins text-[#0b3558] max-gg:min-w-[300px] max-gg:mx-au '>We take the work out of connecting with others so you can accomplish more.</p>
                <br></br>
                <br></br>
               <select name="country" className=' max-gg:hidden py-[10px] mt-1 px-[5px] w-full h-[50px]  hover:text-[#066bff]  transition-all duration-200 ease-linear  rounded-md outline-none cursor-pointer font-poppins border-[0.5px] border-solid   border-[#cfcdcd]  font-semibold' >
               <option value="eng" >English (US)</option>
              <option value="deu">Deutsch</option>
              <option value="esp">Espanol</option>
              <option value="fran">France</option>
              <option value="port">Portugues</option>
              </select>
              <div className='flex mt-[30px] max-gg:hidden'>
              <img className=" cursor-pointer align-middle w-[126px] mr-1" src={logo1}alt=""/>
              <img className="cursor-pointer align-middle w-[126px] " src={logo2} alt="" />
         
              </div>
    
              <div className='w-full flex mt-4 items-center gap-[24px] max-gg:hidden'>
              <img src={twitt} className=' cursor-pointer'></img>
              <img src={fac} className=' cursor-pointer'></img>
              <img src={ing} className=' cursor-pointer'></img>
              <img src={link} className=' cursor-pointer'></img>
              <img src={you} className=' cursor-pointer'></img>
              </div>
             
              <br></br>
              <br></br>
              <br></br>          
            
              </div>
              <div className="footerRight w-[63%] max-gg:w-full  grid grid-cols-3 max-vg:grid-cols-2 max-gg:grid-cols-3 max-gg:gap-x-3 max-yg:grid-cols-2 max-bg:grid-cols-1  max-gg:ml-[-55px] max-vg:pl-12 max-gg:mt-[-80px] gap-[10px]  box-border">
              <div class="footerul ">
                <div className='p-[10px] text-[#0b3558] text-[22px] font-poppins font-[580px] leading-[1.33]  pb-6 '> <b>About</b></div>
                <div className='p-[10px] text-[#0b3558] text-[1rem] leading-[1.1]  cursor-pointer'> About Calendly</div>
                <div className='p-[10px] text-[#0b3558] text-[1rem] leading-[0.9] cursor-pointer'> Contact Sales</div>
                <div className='p-[10px] text-[#0b3558] text-[1rem] leading-[0.9] cursor-pointer'> Newsroom</div>
                <div className='p-[10px] text-[#0b3558] text-[1rem] leading-[0.9] cursor-pointer'> Careers</div>
                <div className='p-[10px] text-[#0b3558] text-[1rem] leading-[0.9] cursor-pointer'> Security</div>
              </div>
              <div class="footerul">
                <div className='p-[10px] text-[#0b3558] text-[22px] font-poppins font-[580px] leading-[1.33] pb-6'><b>Solutions</b></div>
                <div className='p-[10px] text-[#0b3558] text-[1rem] leading-[1.1]  cursor-pointer' > Customer Success</div>
                <div className='p-[10px] text-[#0b3558] text-[1rem] leading-[0.9] cursor-pointer'> Sales</div>
                <div className='p-[10px] text-[#0b3558] text-[1rem] leading-[0.9] cursor-pointer'> Recruiting</div>
                <div className='p-[10px] text-[#0b3558] text-[1rem] leading-[1.1] cursor-pointer'> Information Technology</div>
                <div className='p-[10px] text-[#0b3558] text-[1rem] leading-[0.9] cursor-pointer'> Marketing</div>
    
              </div>
              <div class="footerul ">
                <div className='p-[10px] text-[#0b3558] text-[22px] font-poppins font-[580px] leading-[1.33] pb-6'><b> Popular Features</b></div>
                <div className='p-[10px] text-[#0b3558] text-[1rem] leading-[1.1]  cursor-pointer pb-6'> Embed Calendly</div>
                <div className='p-[10px] text-[#0b3558] text-[1rem] leading-[0.9] cursor-pointer pb-6'> Availability</div>
                <div className='p-[10px] text-[#0b3558] text-[1rem] leading-[1.1]  cursor-pointer pb-6'> Sending  Notification</div>
                <div className='p-[10px] text-[#0b3558] text-[1rem] leading-[1.1]  cursor-pointer pb-6'> Using Calendly Mobile</div>
              </div>
              <div class="footerul mt-[-100px] max-vg:mt-1">
                <div className='p-[10px] text-[#0b3558] text-[22px] font-poppins font-[580px] leading-[1.33] pb-6'><b>Support</b></div>
                <div className='p-[10px] text-[#0b3558] text-[1rem] leading-[0.9] cursor-pointer'>Help Center</div>
                <div className='p-[10px] text-[#0b3558] text-[1rem] leading-[1.1]  cursor-pointer'>Video Tutorials</div>
              </div>
              <div class="footerul mt-[-100px] max-vg:mt-1">
                <div className='p-[10px] text-[#0b3558] text-[22px] font-poppins font-[580px] leading-[1.33] pb-6'> <b>Add-Ons</b></div>
                <div className='p-[10px] text-[#0b3558] text-[1rem] leading-[1.1]  cursor-pointer'> Download for Chrome</div>
                <div className='p-[10px] text-[#0b3558] text-[1rem] leading-[1.1]  cursor-pointer'> Download for Firefox</div>
              </div>
              <div class="footerul mt-[-100px] max-gg:mt-1">
                <div className='p-[10px] text-[#0b3558] text-[22px] font-poppins font-[580px] leading-[1.33] pb-6'> <b>Developers</b></div>
                <div className='p-[10px] text-[#0b3558] text-[1rem] leading-[1.1]  cursor-pointer'> Developer Tools</div>
              </div>
            </div>
           
           </div>
           <div className="flex justify-between   box-border w-full gap-[16px] pb-[70px] mt-[-40px] max-vg:mt-20 max-gg:flex-col">
           <label for="" className='m-[7px] text-[#476788] leading-[1.5] text-[0.75rem] inline-block cursor-default'>Copyright Calendly 2022</label>
           
           <label for="" className='m-[7px] text-[#476788] leading-[1.5] text-[0.75rem] inline-block cursor-default max-gg:mt-[-2px]'>Privacy / Terms and Conditions</label>


           
         </div>
         <select name="country" className=' gg:hidden  py-[0px] mt-8 px-[5px] w-full h-[50px]  hover:text-[#066bff]  transition-all duration-200 ease-linear  rounded-md outline-none cursor-pointer font-poppins border-[0.5px] border-solid   border-[#cfcdcd]  font-semibold' >
               <option value="eng" >English (US)</option>
              <option value="deu">Deutsch</option>
              <option value="esp">Espanol</option>
              <option value="fran">France</option>
              <option value="port">Portugues</option>
              </select>
              <div className='flex mt-[20px] gg:hidden'>
              <img className=" cursor-pointer align-middle w-[126px] mr-1" src={logo1}alt=""/>
              <img className="cursor-pointer align-middle w-[126px] " src={logo2} alt="" />
              </div>
    
              <div className='w-full flex mt-4 items-center gap-[24px] gg:hidden mb-[-45px]'>
              <img src={twitt} className=' cursor-pointer'></img>
              <img src={fac} className=' cursor-pointer'></img>
              <img src={ing} className=' cursor-pointer'></img>
              <img src={link} className=' cursor-pointer'></img>
              <img src={you} className=' cursor-pointer'></img>
              </div>
        </section>
        </footer>
      )
    }

export default Footer;

// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/Aadi-Maheshwari/Assignment.git
// git push -u origin main