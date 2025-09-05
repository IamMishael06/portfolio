import xBar from '../assets/images/logo/menu-bar.png'
import stroke from '../assets/images/logo/Vector.png'
import openBar from  '../assets/images/logo/menu-bar-open.png'
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import resume from '../assets/docs/Resume.pdf'

export default function NavBar() {
 

  const [hideNav, setHideNav] = useState(true)
  const [time, setTime] = useState("");
  const location = useLocation();
  const [focus, setFocus] = useState("home");

  useEffect(() => {
    if (location.pathname === "/about") setFocus("about");
    else if (location.pathname === "/projects") setFocus("vault");
    else if (location.pathname === "/contact") setFocus("chat");
    else setFocus("home");
  }, [location.pathname]);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12 || 12; // Convert 0 to 12
      setTime(`${hours}:${minutes} ${ampm}`);
    };

    updateTime(); // Initial call
    const interval = setInterval(updateTime, 60000); // Update every 60 seconds

    return () => clearInterval(interval); // Cleanup
  }, []);
  return (
    
    <>
    <nav className={`w-full h-[100vh] transition-[2s] md:top-0  bg-white fixed z-50 md:flex md:items-center md:relative md:justify-between md:mt-5 md:w-[90%] mx-auto md:h-[80px] border-t-2 border-b-2 pt-2 border-[#b0b0b0a9]` }
       style={{ top: hideNav ? '-150%' : '0' }}
    >
      <div className='w-[90%] md:w-[15%] h-[10%] md:h-full mx-auto md:mx-0 mt-5 md:mt-0 flex items-center justify-between'>
        <h1 className='logo font-oswald font-bold text-[24px] text-[black] hover:text-[#036AE3] transition-[0.3s] cursor-pointer'><Link to={"/"}>Tarilate</Link></h1>
        <img src={xBar} alt="" onClick={()=> setHideNav(true)} className='md:hidden' />
      </div>

      <section className='items mt-[20%] md:flex md:items-center md:justify-between gap-5 md:mt-0 md:h-full w-[90%] md:w-[80%]  lg:w-[80%] h-[50%]  mx-auto md:mx-0'>
        <ul className='items-box flex md:flex-row flex-col md:w-[60%] lg:w-[70%] h-full justify-evenly items-end md:items-center'>
          <Link to={"/about"}> <span className='flex gap-2 h-[18px]'><li className={` ${focus == "about" ? "text-[#036AE3]" : "text-[black]" }`}>About ME</li><img src={stroke} className='h-full block md:hidden' alt="" /></span></Link>
           <img src={stroke} className='h-[20px] hidden md:block' alt="" />
           <Link to={"/projects"}><span className='flex gap-2 h-[18px]'><li  className={` ${focus == "vault" ? "text-[#036AE3]" : "text-[black]" }`}>Creative Vault</li><img src={stroke} className='h-full block md:hidden' alt="" /></span></Link>
           <img src={stroke} className='h-[20px] hidden md:block' alt="" />
           <Link to={"/contact"}><span className='flex gap-2 h-[18px]'><li  className={` ${focus == "chat" ? "text-[#036AE3]" : "text-[black]" }`}>Lets Talk</li><img src={stroke} className='h-full block md:hidden' alt="" /></span></Link>
          <span className='flex gap-2 h-[18px] md:hidden'> <a href={resume} download="Tarilate's Resume.pdf"><li>Resume</li></a></span>
        </ul>
        <ul className='ml-5 md:w-[35%] lg:w-[25%]  gap-5 md:flex items-center hidden'>
        <span className='flex gap-1 h-[18px] hover:text-[#036AE3] transition-[0.3s]'> <a href={resume} download="Tarilate's Resume.pdf"><li>Resume</li></a></span>
        <img src={stroke} className='h-full ml-2' alt="" />
        <span><p className='text-[#B0B0B0] font-[oswald] mb-1 md:text-[12px] lg:text-[15px]'>Lagos, Nigeria</p><p className=' font-bold md:text-[18px]  font-[oswald]'>{time}</p></span>
        </ul>
      </section>
      
    </nav>
    <nav className='mobile-nav w-[95%] mx-auto block md:hidden mt-5 border-t-2 border-b-2 border-[#b0b0b0a9] h-[120px]'>
      <div className='flex justify-between items-center pt-2'>
      <h1 className='logo font-oswald font-bold text-[24px] text-[black]'>Tarilate</h1>
      <img src={openBar} alt="" onClick={()=>setHideNav(false)} />
      </div>
      <ul className='mt-2'>
      <span><li className='text-[#B0B0B0] mb-1 text-[15px] font-[oswald] font-bold'>Lagos, Nigeria</li><li className=' font-bold font-[oswald] '>{time}</li></span>
      </ul>

    </nav>
    <hr className='border-t-2 border-[#b0b0b0a9] mt-2 md:w-[90%] lg:w-[90%] w-[95%]  mx-auto' />
    
    </>
  )
}
