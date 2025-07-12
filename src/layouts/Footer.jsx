import arrow from '../assets/images/logo/arrow-footer.svg';
import bitmoji from '../assets/images/logo/bitmoji-call.png'
import git from '../assets/images/logo/git.png'
import ig from '../assets/images/logo/ig.png'
import lnkdn from '../assets/images/logo/lnkdn.png'
import twitter from '../assets/images/logo/twitter.png'
import upArrow from '../assets/images/logo/upArrow.svg'
import { BiCopyright } from 'react-icons/bi';
import Marque from './Marque';
import {Link} from 'react-router-dom';


function Footer(props) {
  return (
    <>
    <section className='mt-20 pb-5 '>
        <div className='foot-header w-[95%] lg:w-[90%] mx-auto flex items-center justify-between'>
            <h1 className='font-extrabold font-[raleway] lg:w-[50%] w-[97%] text-[38px] md:text-[40px] lg:text-[48px]'>Have a cool project in mind?</h1>
            <Link to="/contact"><img src={arrow}  className='justify-items-end w-[100%]   self-end lg:self-auto' alt="" /></Link>
        </div>
         <div className='w-[95%] lg:w-[90%] mx-auto mt-10 p-5 lg:p-[8%] h-auto rounded-[30px] lg:rounded-full bg-[#D1D1D1] relative'>
            <h1 className='font-bold font-[oswald] text-[36px] text-[#FFFFFF] relative z-30'>Let's make something cool</h1>
            <div className='relative mt-5 w-full footer-contact-details flex flex-col lg:flex-row gap-5 z-20'>
                <a href="mailto:tarinamikpoh@gmail.com" className=' underline'>tarinamikpoh@gmail.com</a>
                <a href="tel:+2348067230232">+234 806 723 0232</a>
                <img src={bitmoji} className='absolute bottom-0 right-0 w-[35%] md:w-[20%] z-10 lg:w-[30%] lg:bottom-[-200%]' alt="" />
            </div>
        </div>
         {/* =========================== FOOTER DIV SECTION =========================== */}
       <Marque display={props.showMarquee}/>
        <hr className='border-t-2 border-[#b0b0b0a9] mt-5 w-full md:w-[90%]  mx-auto' />
        <hr className='border-t-2 border-[#b0b0b0a9] mt-2 lg:mt-1 w-full md:w-[90%]  mx-auto' />
          {/* =========================== FOOTER DIV SECTION =========================== */}
        <div className='w-[95%] lg:w-[90%] lg:mt-5 mx-auto flex flex-col lg:flex-row justify-between lg:items-center'>
          <a href={`#${props.name}`} className='mx-auto lg:mx-0 mt-5 lg:mt-0'><span className='flex items-center gap-2 cursor-pointer'><p className='font-semibold font-[raleway] lg:text-[24px]'>Back to Top</p><img src={upArrow} alt="" /></span></a>
          <div className='socials  mt-8 lg:mt-0 mx-auto w-[80%] sm:w-[50%] md:w-[50%] lg:w-[20%]  flex gap-3 justify-between items-center'>
            <div className='w-[50px] h-[50px] flex items-center justify-center rounded-full hover:border-[#036AE3] transition-[0.4s] border-1 border-[#b0b0b0a9]'>
                  <a href="https://github.com/IamMishael06">
                    <img src={git} alt="" className='' />
                  </a> 
                  </div>
                  <div className='w-[50px] h-[50px] flex items-center justify-center hover:border-[#036AE3]   rounded-full border-1 border-[#b0b0b0a9]'>
                    <a href="https://www.linkedin.com/in/-tari-namikpoh/">
                      <img src={ig} alt="" />
                    </a>
                    
                  </div>
                  <div className='w-[50px] h-[50px] flex items-center justify-center hover:border-[#036AE3]  rounded-full border-1 border-[#b0b0b0a9]'>
                    <a href="https://www.instagram.com/mish_codes?igsh=YWliMHhya2Fpb3Vq&utm_source=qr">
                    <img src={lnkdn} alt="" />
                    </a>
                    
                  </div>
                  <div className='w-[50px] h-[50px] flex items-center justify-center hover:border-[#036AE3]  rounded-full border-1 border-[#b0b0b0a9]'>
                    <a href="https://x.com/lil_xmich?s=21">
                      <img src={twitter} alt="" />
                    </a>
                    
                  </div>
        </div>
        <span className='flex items-center text-center justify-center lg:mt-0 mt-10 text-[18px] font-[raleway] '><BiCopyright /> 2024  <a href="https://www.behance.net/trustbello" className='underline'> Trust</a>. All rights reserved.</span>
   
        </div>
        
    </section>
    </>
  )
}

export default Footer