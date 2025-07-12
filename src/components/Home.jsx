import NavBar from '../layouts/NavBar'
import bitmoji1 from '../assets/images/logo/bitmoji-wave.png'
import git from '../assets/images/logo/git.png'
import ig from '../assets/images/logo/ig.png'
import lnkdn from '../assets/images/logo/lnkdn.png'
import twitter from '../assets/images/logo/twitter.png'
import arrow from '../assets/images/logo/arrow.png'
import data from '../data/project.json'
import marsfood from '../assets/images/logo/marsfood.svg'
import bitmoji2 from '../assets/images/logo/bitmoji-whisper.png'
import { useState } from 'react'
import Footer from '../layouts/Footer'
import swArrow from '../assets/images/logo/swArrow.svg'
import {Link} from 'react-router-dom'
import { motion } from "motion/react"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function Home() {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(prev => !prev);
  };
  return (
    <div id='body' className='body h-auto w-full'>
        <NavBar />
         {/* =========================== HERO SECTION =========================== */}
        <section id='hero' className='hero w-[90%] lg:w-[90%] lg:h-[100vh] mt-10 mx-auto'>
          <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="800" className='hero-text flex flex-wrap gap-2 w-full lg:w-[80%] lg:h-[60%]'>
            <h1 className='text-[40px] lg:self-end md:text-[60px]  font-semibold font-[oswald] lg:text-[80px]'>Hello, I'm Tarilate</h1><span className='flex lg:self-end flex-wrap gap-2 items-center text-[40px] md:text-[50px]  font-semibold font-[oswald] lg:text-[80px]'><img src={bitmoji1} alt="" className='w-[60px] lg:w-[100px]' /> <p>Namikpoh,</p></span><h1 className='text-[40px] text-[#B0B0B0] md:text-[50px] lg:text-[80px] font-semibold font-[oswald]'>a software engineer based in Lagos, Nigeria.</h1>
          </div>
          {/* =========================== SOCIALS SECTION =========================== */}
          <div data-aos="fade-right" data-aos-delay="200" data-aos-duration="800" className='socials  mt-5 mx-auto flex gap-3 items-center'>
            <div className='w-[50px] h-[50px] flex items-center justify-center rounded-full border-1 border-[#b0b0b0a9]'>
            <a href="https://github.com/IamMishael06">
              <img src={git} alt="" />
            </a> 
            </div>
            <div className='w-[50px] h-[50px] flex items-center justify-center  rounded-full border-1 border-[#b0b0b0a9]'>
              <a href="https://www.linkedin.com/in/-tari-namikpoh/">
               <img src={ig} alt="" />
              </a>
             
            </div>
            <div className='w-[50px] h-[50px] flex items-center justify-center  rounded-full border-1 border-[#b0b0b0a9]'>
              <a href="https://www.instagram.com/mish_codes?igsh=YWliMHhya2Fpb3Vq&utm_source=qr">
              <img src={lnkdn} alt="" />
              </a>
              
            </div>
            <div className='w-[50px] h-[50px] flex items-center justify-center  rounded-full border-1 border-[#b0b0b0a9]'>
              <a href="https://x.com/lil_xmich?s=21">
               <img src={twitter} alt="" />
              </a>
             
            </div>
          </div>
         
        </section>
         {/* =========================== FEATURED PROJECTS SECTION =========================== */}
        <section className='project mt-10 w-[90%] lg:h-[120vh] lg:[90%] mx-auto'>
          <div className='flex justify-between font-[raleway] lg:text-[24px] font-medium items-center'>
            <h2>Featured Project</h2>
            <a href="#selected-work"><h2 className='flex gap-2 items-center '>Explore <span><img src={arrow} alt="" className='relative z-10' /></span></h2></a>
           
          </div>
          <div className={`mt-10 w-[95%] lg:w-[90%] overflow-hidden lg:h-[80%]  h-[600px] relative  mx-auto`}>
            <div  onClick={handleToggle} className={`project-box h-[80%] relative  mx-auto ${isToggled ? `before:top-0` : `before:top-[-100%]`} `}>
              <img src={marsfood} className='w-full h-full object-cover rounded-3xl ' alt="" />
            </div>
            <div className='flex  w-full items-center mt-5 justify-between'>
              <h1 className='font-bold font-[raleway] text-[20px] md:text-[24px] lg:text-[26px]'>{data.projects[1].project_name}</h1>
              <p className='hidden lg:block font-[raleway] text-[20px] font-medium w-[50%] text-center'>MarsFood is an e-commerce web app that let's users easily order food online and makee secure payment in just a few clicks.</p>
              <p className='font-bold text-[#b0b0b0a9] font-[raleway] text-[20px] md:text-[24px] lg:text-[26px]'>2024</p>
            </div>
          </div>
        </section>
        {/* =========================== SNEAK PEEK PROJECTS SECTION =========================== */}
        <section className='sneak-peek mt-30 lg:mt-10 w-[90%] mx-auto flex flex-col lg:flex-row lg:h-[60vh] lg:items-center lg:justify-between'>
          <img src={bitmoji2} alt="" className='w-[40%] lg:w-[20%] ' />
          <div data-aos="fade-down" data-aos-delay="300" data-aos-duration="1200" className='w-full lg:w-[70%] font-[raleway] font-medium mt-5 text-[18px] lg:text-[34px]'>
            <h1>As a machine learning engineer, I help companies turn data into meaningful buisness ideas and solutions that drive growth.</h1>
            <p className='mt-5'>I collaborate directly with clients or support teams on impactful projects worldwide.</p>
          </div>
        </section>
        {/* =========================== SELECTED WORKS SECTION =========================== */}
        <section id='selected-work' className='selected-work w-[90%] lg:w-[90%] mx-auto mt-10 h-auto py-5 bg-[#d1d1d1f9] relative z-10 rounded-xl'>
          <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="80" >
              <h1 className='font-[raleway] font-normal text-[20px] p-5'>Selected works<span className='text-[#B0B0B0] text-[25px]'>*</span></h1>
           {/* =========================== INDIVIDUAL WORKS =========================== */}
            <div className='flex flex-col  mx-auto w-[90%] gap-5 items-center justify-between'>
              {data.projects.slice(3).map((project, index) => (
                <div key={index} className='project w-full lg:flex lg:justify-normal lg:items-center  lg:relative  lg:mt-10 lg:w-full  md:w-[100%] h-auto border-b-[1px] border-[#B0B0B0] pb-5'>
                  <a href={project.link}>
                     <span className='font-[raleway] font-bold text-[#B0B0B0] text-[19px]  lg:order-1 lg:hidden'>0{index+1}*</span>
                  <div className='pop-in-div w-full md:w-[60%] h-[150px] md:h-[180px] bg-[#B0B0B0] rounded-xl mt-2 lg:absolute bottom-0 lg:order-1'>
                    <img src={project.img} alt="j" className={`${project.project_name == "MarsHouse" ? `invisible` : `visible`} pop-in-img rounded-xl object-cover w-full h-full`} />
                  </div>
                  <div className='lg:flex lg:justify-between w-full'>
                    <h2 className='font-bold text-[20px] md:text-[26px] lg:text-[32px] flex  mt-3 font-[raleway] '>{project.project_name} <span className='font-[raleway] font-bold text-[#B0B0B0] text-[18px] hidden lg:block  lg:order-1'>0{index+1}*</span></h2>
                    <p className='text-[16px] md:text-[18px] lg:text-[24px] font-medium font-[raleway] lg:w-[50%] lg:font-normal lg:order-3'>{project.details}</p>
                  </div>
                 
                  </a>
                 
                </div>
              ))}
             <span className='pb-5 self-start flex items-center gap-2 cursor-pointer transition-[0.3s] hover:text-[#036AE3]'> <Link to={'/projects'} className='flex'><p className='font-[raleway] text-[20px] font-medium flex'>See More<span className='font-[raleway] font-bold text-[#B0B0B0] text-[14px]'>05*</span></p><img src={swArrow} alt="" /></Link></span>
            </div>
          </div>
          
        </section>
        <Footer name="body"  />
    </div>
  )
}

export default Home