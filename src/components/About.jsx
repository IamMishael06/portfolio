import NavBar from "../layouts/NavBar"
import pfp from '../assets/images/pfp.png'
import swArrow from '../assets/images/logo/swArrow.svg'
import Marque from "../layouts/Marque"
import career from '../data/project.json'
import Footer from "../layouts/Footer"
import { Link } from "react-router-dom"
import { motion } from "motion/react"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function About() {
  return (
    <>
    <main id="body" className="body w-full">
        <NavBar/>   
        {/* =========================== HERO SECTION =========================== */}
        <section className="hero w-[90%] lg:w-[90%] mt-10 mx-auto flex lg:flex-row flex-col lg:justify-between">
            <div className="w-full lg:w-[55%]">
                <h1 data-aos="fade-up" data-aos-delay="100" data-aos-duration="900" className="font-[oswald]  font-semibold text-[35px] sm:text-[40px] md:text-[50px] lg:text-[64px] text-[#B0B0B0] ">Bringing Ideas to life with functional software</h1>
                <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="800" className="font-[oswald] text-[16px] leading-8 lg:leading-10 md:text-[20px] lg:text-[24px]  mt-5  font-regular">If you've made it this far, you must be really intrigued and curious. Well you are at the right place to satisfy your curiosity. I am a software engineer. I started my journey as a full-stack developer in 2022. I worked as a freelancer for startups and business, Most Notably <span className="font-bold text-[#036AE3]">Loniad Technologies</span>.</p>
                <p data-aos="fade-up" data-aos-delay="600" data-aos-duration="800" className="font-[oswald] text-[16px] leading-8 lg:leading-10 md:text-[20px] lg:text-[24px]  mt-5  font-regular">My dream has always been to explore the field of Machine learning and Artifical intelligence. The fact that these models are created through statistical, mathematical and computational method to predict data, and create smart AI models💡 is truly intriguing . In 2024, I transitioned to the field of ML/AI and so far, I've been loving it.</p>
                <p data-aos="fade-up" data-aos-delay="600" data-aos-duration="800" className="font-[oswald] text-[16px] leading-8 lg:leading-10 md:text-[20px] lg:text-[24px]  mt-5  font-regular">I am currently a student at the  University of Lagos pursing my Bachelors degree in computer science. Aside coding🧑🏾‍💻, I do enjoy some time for video games, <span className="bg-[#F88158] px-[2px] inline-block transform text-white rotate-[-5deg] ">basketball</span> and football. :)</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="800" className="w-full lg:w-[40%] h-[70vh] lg:h-[100vh]  mt-10 lg:mt-0">
                <img src={pfp} className="w-full h-full object-cover  lg:object-center aspect-[3/2]" alt="" />
            </div>
        </section>
        {/* =========================== SERVICES SECTION =========================== */}
        <section  className="services w-[90%] mx-auto mt-[10rem]  rounded-2xl py-5">
          <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" data-aos-once="true">
            <h1 className="font-[raleway] font-normal text-[20px] lg:text-[24px] w-[90%] mx-auto">I can help with<span className="text-[#B0B0B0] text-[25px]">*</span></h1>
          <div className="services-boxes w-[90%] mx-auto mt-5 flex flex-col items-center  border-y-[1px] border-[#B0B0B0] py-5">
            <motion.div initial={{opacity: 0}}  whileInView={{opacity :1}} className="service-box w-full flex flex-col lg:flex-row lg:items-center  lg:justify-between  border-b-[1px] py-5 border-[#B0B0B0]">
              <h1 className='font-[raleway] lg:w-[40%] text-[25px] sm:text-[28px] lg:text-[35px] font-extrabold flex'>Frontend Web/Mobile Development<span className='font-[raleway] font-bold text-[#B0B0B0] text-[14px]'>01*</span></h1>
              <p className="font-[raleway] lg:w-[50%] text-[18px] sm:text-[20px] md:text-[24px] mt-2">I build dynamically, user-friendly websites that deliver a seamless experience, Mobile or Web.</p>
            </motion.div>
            <div className="service-box w-full flex flex-col lg:flex-row lg:items-center  lg:justify-between border-y-[1px] mt-2 py-5 border-[#B0B0B0]">
              <h1 className='font-[raleway] lg:w-[40%] text-[25px] sm:text-[28px] lg:text-[35px] font-extrabold flex'>Backend Development<span className='font-[raleway] font-bold text-[#B0B0B0] text-[14px]'>02*</span></h1>
              <p className="font-[raleway] lg:w-[50%] text-[18px] sm:text-[20px] md:text-[24px] mt-2">Server side, Relational Databases, I'm your man. I build APIs and manage databases with ease.</p>
            </div>
            <div className="service-box w-full flex flex-col lg:flex-row lg:items-center  lg:justify-between border-t-[1px] mt-2 py-5 border-[#B0B0B0]">
              <h1 className='font-[raleway] lg:w-[40%] text-[25px] sm:text-[28px] lg:text-[35px] font-extrabold flex'>Data Research and ML<span className='font-[raleway] font-bold text-[#B0B0B0] text-[14px]'>03*</span></h1>
              <p className="font-[raleway] lg:w-[50%] text-[18px] sm:text-[20px] md:text-[24px] mt-2">I build software to improve businesses and automate tasks. Using machine learning models to work on structured and unstructured data.</p>
            </div>
          </div>
           <Link to="/contact"><span className=' self-start mt-5 flex w-[90%] mx-auto items-center gap-2 cursor-pointer transition-[0.3s] hover:text-[#036AE3]'><p className='font-[raleway] text-[18px] font-medium flex'>Let's make the next big thing<span className='font-[raleway] font-bold text-[#B0B0B0] text-[14px]'>05*</span></p><img src={swArrow} alt="" /></span></Link>
          </div>
          
        </section>
         {/* =========================== CAREER SECTION =========================== */}
        <section className="career w-[90%] mx-auto mt-40 mb-40 flex flex-col lg:flex-row  justify-between">
          <h1 className="font-[raleway] text-[40px] sm:text-[44px] md:text-[44px] lg:text-[48px] font-bold">Career</h1>
          <div className="career-box w-[full] lg:w-[60%] mt-5 lg:mt-0 border-b-[1px] border-[#B0B0B0] py-5">
             {career.career.map((career, index)=>(
                <div key={index} className="career-boxes mt-2 py-5 lg:mt-1 w-full mx-auto flex flex-col lg:flex-row items-center lg:justify-between border-y-[1px] border-[#B0B0B0] gap-5">
                  <div className="w-full lg:w-[40%] ">
                    <h1 className="font-[raleway] text-[28px] lg:text-[35px] md:text-[35px] font-extrabold">{career.company_name}</h1>
                    <p className="font-[raleway] font-bold text-[25px] md:text-[30px] text-[#B0B0B0]">{career.position}</p>
                    <p className="font-[raleway] text-[20px] lg:text-[28px] text-[#B0B0B0] font-bold">{career.duration}</p>
                  </div>
                  <div className="details w-full lg:w-[40%]">
                    <p className="font-[raleway] font-normal text-[18px] lg:text-[24px] text-[#B0B0B0]">{career.details}</p>
                  </div>
                </div>
             ))}
          </div>
        </section>
        {/* =========================== FOOTER SECTION =========================== */}
          <Footer name="body"  />
        
        
    </main>
    </>
  )
}

export default About