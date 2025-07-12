import NavBar from "../layouts/NavBar";
import bitmoji from "../assets/images/logo/bitmoji-call.png";
import git from "../assets/images/logo/git.png";
import ig from "../assets/images/logo/ig.png";
import lnkdn from "../assets/images/logo/lnkdn.png";
import twitter from "../assets/images/logo/twitter.png";
import arrow from "../assets/images/logo/arrow-footer.svg";
import upArrow from '../assets/images/logo/upArrow.svg'
import { BiCopyright } from "react-icons/bi";
import { useState } from "react";
import emailjs from 'emailjs-com'


function Contact() {
  const [service, setService] = useState("");
  const [formData, setFormData] = useState({});

    const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData(values => ({...values, [name]: value, service: service}));
  }
    const handleSubmit = (event) => {
    event.preventDefault();
    if (service){
       const templateParams = {
      title : "JOB OPPORTUNITY",
      name : formData.name,
      email : formData.email,
      message : formData.message,
      service : formData.service
    }
    emailjs.send(import.meta.env.VITE_SERVICE_ID,
                 import.meta.env.VITE_TEMPLATE_ID, templateParams, import.meta.env.VITE_USER_ID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      }, (error) => {
        console.log('FAILED...', error);
      });
    setFormData({});
    setService("");
    alert("Your message has been sent successfully!");
    }else{
      alert("Please input a service")
    }
   
  }
  return (
    <>
      <main id="body" className="body w-full">
        <NavBar />
        <section className="hero w-[90%] mx-auto mt-10 flex flex-col lg:flex-row">
          <section className="hero w-full lg:w-[40%] mx-auto">
            <span className="flex w-full flex-wrap font-[oswald] items-center font-semibold text-[35px] lg:text-[64px] sm:text-[45px] md:text-[55px] gap-2">
              <p className="flex items-center">Have a cool </p>
              <img src={bitmoji} alt="" className="w-[20%]" />
              <p className="">Project in mind?</p>
            </span>
            <div className="mt-5 flex flex-col hidden lg:block">
              <a
                href="mailto:tarinamikpoh@gmail.com"
                className="font-[oswald] text-[18px] underline">
                tarinamikpoh@gmail.com
              </a>
              <br />
              <a
                href="tel:+2348067230232"
                className="font-[oswald] text-[18px]">
                +234 806 723 0232
              </a>
            </div>
          </section>
          <form action="" className="w-full mt-10 lg:w-[60%]" onSubmit={handleSubmit}>
            {/* =========================== BASIC INFORMATION =========================== */}
            <div className="basic-info w-full pt-5">
              <label
                htmlFor="name"
                className="font-[raleway] text-[18px] sm:text-[20px] md:text-[22px] font-semibold lg:text-[24px]">
                Name<span className="text-[#B0B0B0]">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="border-b-[1px] mb-10 hover:border-[#036AE3] transition-[0.3s] border-[#B0B0B0] text-[18px]  font-[raleway] mt-2 w-full outline-none placeholder:text-[14px]"
                placeholder="Sam Joe"
                required
                value={formData.name || ""}
                onChange={handleChange}
              />

              <label
                htmlFor="email"
                className="font-[raleway] text-[18px] sm:text-[20px] md:text-[22px] font-semibold lg:text-[24px]">
                Email<span className="text-[#B0B0B0]">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="border-b-[1px] mb-10 hover:border-[#036AE3] transition-[0.3s] border-[#B0B0B0] text-[18px]  font-[raleway] mt-2 w-full outline-none placeholder:text-[14px]"
                placeholder="SamJoe@gmail.com"
                required
                value={formData.email || ""}
                onChange={handleChange}
              />

              <label
                htmlFor="comp-name"
                className="font-[raleway] text-[18px] sm:text-[20px] md:text-[22px] font-semibold lg:text-[24px]">
                Company Name
              </label>
              <input
                type="text"
                id="comp-name"
                name="company"
                className="border-b-[1px] mb-10 hover:border-[#036AE3] transition-[0.3s] border-[#B0B0B0] text-[18px]  font-[raleway] mt-2 w-full outline-none placeholder:text-[14px]"
                placeholder="Apple"
                value={formData.company || ""}
                onChange={handleChange}
              />
            </div>
            {/* =========================== SERVICES =========================== */}
            <div className="services-contact w-full mt-5">
              <label
                htmlFor="service"
                className="font-[raleway] text-[18px] sm:text-[20px] md:text-[22px] font-semibold lg:text-[24px]">
                Service<span className="text-[#B0B0B0]">*</span>
              </label>
              <div className="flex flex-wrap w-full gap-1 md:gap-5 content-start">
                <div
                  id="service"
                  onClick={() => setService("web")}
                  className={` ${
                    service == "web"
                      ? "text-[#036AE3] border-[#036AE3]"
                      : "border-[#B0B0B0]"
                  } w-[70%] cursor-pointer sm:w-[65%] md:w-[60%] lg:w-[40%] hover:border-[#036AE3] hover:text-[#036AE3] transition-[0.3s] focus:border-[#036AE3] focus:text-[#036AE3]  py-5 px-3 text-center border-1 mt-3 rounded-full`}>
                  <p className="font-[raleway] cursor-pointer text-[18px] font-medium">
                    FullStack Development
                  </p>
                </div>
                <div
                  id="service"
                  onClick={() => setService("ml")}
                  className={` ${
                    service == "ml"
                      ? "text-[#036AE3] border-[#036AE3]"
                      : "border-[#B0B0B0]"
                  } w-[70%] cursor-pointer sm:w-[65%] md:w-[60%] lg:w-[40%] hover:border-[#036AE3] hover:text-[#036AE3] transition-[0.3s] focus:border-[#036AE3] focus:text-[#036AE3]  py-5 px-3 text-center border-1  mt-3 rounded-full`}>
                  <p className="font-[raleway] cursor-pointer text-[18px] font-medium">
                    Data Science & ML
                  </p>
                </div>
                <div
                  id="service"
                  onClick={() => setService("mobile")}
                  className={` ${
                    service == "mobile"
                      ? "text-[#036AE3] border-[#036AE3]"
                      : "border-[#B0B0B0]"
                  } w-[70%] cursor-pointer sm:w-[65%] md:w-[60%] lg:w-[40%] hover:border-[#036AE3] hover:text-[#036AE3] transition-[0.3s] focus:border-[#036AE3] focus:text-[#036AE3]  py-5 px-3 text-center border-1  mt-3 rounded-full`}>
                  <p className="font-[raleway] cursor-pointer  text-[18px] font-medium">
                    Mobile Development
                  </p>
                </div>
              </div>
            </div>
            {/* =========================== MESSAGE =========================== */}
            <div className="message w-full mt-10">
              <label
                htmlFor="message"
                className="font-[raleway] text-[18px] sm:text-[20px] md:text-[22px] font-semibold lg:text-[24px]">
                Message<span className="text-[#B0B0B0]">*</span>
              </label>
              <br />
              <textarea
                name="message"
                id="message"
                value={formData.message || ""}
                onChange={handleChange}
                rows={5}
                className="w-full mt-5 outline-none border-b-[1px] border-[#B0B0B0] font-[raleway] placeholder:text-[#B0B0B0] placeholder:font-semibold placeholder:text-[14px]"
                placeholder="Hello Tari, I need you to..."></textarea>
            </div>
            <button className="flex mt-10 w-[50%] sm:w-[40%] lg:w-[30%] items-center gap-[5px] justify-center rounded-full p-4 border-[1px] focus:border-[#036AE3] focus:text-[#036AE3] hover:text-[#036AE3] transition-[0.3s] hover:border-[#036AE3] font-[raleway] font-bold text-[18px] border-[#B0B0B0] ">
              Let's Talk{" "}
              <span>
                <img src={arrow} className="w-[50%]" alt="" />
              </span>
            </button>
          </form>
        </section>
        
        {/* =========================== FOOTER DIV SECTION =========================== */}
         <hr className='border-t-2 border-[#b0b0b0a9] mt-[10rem] w-full md:w-[90%]  mx-auto' />
        <hr className='border-t-2 border-[#b0b0b0a9] mt-2 lg:mt-1 w-full md:w-[90%]  mx-auto' />
        <div className="w-[95%] lg:w-[90%] lg:mt-5 mx-auto flex flex-col lg:flex-row justify-between lg:items-center">
          <a href={`#body`} className="mx-auto lg:mx-0 mt-5 lg:mt-0">
            <span className="flex items-center gap-2 cursor-pointer">
              <p className="font-semibold font-[raleway] lg:text-[24px]">
                Back to Top
              </p>
              <img src={upArrow} alt="" />
            </span>
          </a>
          <div className="socials  mt-8 lg:mt-0 mx-auto w-[80%] sm:w-[50%] md:w-[50%] lg:w-[20%]  flex gap-3 justify-between items-center">
            <div className="w-[50px] h-[50px] flex items-center justify-center rounded-full hover:border-[#036AE3] transition-[0.4s] border-1 border-[#b0b0b0a9]">
              <a href="https://github.com/IamMishael06">
                <img src={git} alt="" className="" />
              </a>
            </div>
            <div className="w-[50px] h-[50px] flex items-center justify-center hover:border-[#036AE3]   rounded-full border-1 border-[#b0b0b0a9]">
              <a href="https://www.linkedin.com/in/-tari-namikpoh/">
                <img src={ig} alt="" />
              </a>
            </div>
            <div className="w-[50px] h-[50px] flex items-center justify-center hover:border-[#036AE3]  rounded-full border-1 border-[#b0b0b0a9]">
              <a href="https://www.instagram.com/mish_codes?igsh=YWliMHhya2Fpb3Vq&utm_source=qr">
                <img src={lnkdn} alt="" />
              </a>
            </div>
            <div className="w-[50px] h-[50px] flex items-center justify-center hover:border-[#036AE3]  rounded-full border-1 border-[#b0b0b0a9]">
              <a href="https://x.com/lil_xmich?s=21">
                <img src={twitter} alt="" />
              </a>
            </div>
          </div>
          <span className="flex items-center text-center justify-center lg:mt-0 mt-10 text-[18px] font-[raleway] ">
            <BiCopyright /> 2024{" "}
            <a href="https://www.behance.net/trustbello" className="underline">
              {" "}
              Trust
            </a>
            . All rights reserved.
          </span>
        </div>
      </main>
    </>
  );
}

export default Contact;
