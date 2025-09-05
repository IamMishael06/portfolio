import React from "react";
import NavBar from "../layouts/NavBar";
import bitmojidea from "../assets/images/logo/bitmoji-idea.png";
import { BiMenu } from "react-icons/bi";
import { BsBoxes } from "react-icons/bs";
import projects from '../data/project.json'
import Footer from "../layouts/Footer";
import { useState } from "react";

function Projects() {
  const [filterDisplay, setFilterDisplay] = useState("all");
  const [filterType, setFilterType] = useState("grid");
  return (
    <>
      <main id="body" className="body w-full">
        <NavBar />
        {/* =========================== HERO SECTION =========================== */}
        <section className="mt-10 w-[90%] mx-auto">
          <span data-aos="fade-right" className="flex w-full flex-wrap font-[oswald] items-center font-semibold text-[35px] lg:text-[64px] sm:text-[45px] md:text-[55px] gap-2">
            <p className="flex items-center">Creative Highlights </p>
            <img src={bitmojidea} alt="" className="w-[20%] sm:w-[15%] lg:w-[10%]" />
            <p className="text-[#B0B0B0]">(2022-Present)</p>
          </span>
          <p className="mt-5 font-[oswald] text-[20px] md:text-[24px]  ">
            ... A peak into my works 
          </p>
        </section>
        {/* =========================== PROJECTS SECTION =========================== */}
        <section className="w-[90%] mx-auto mt-20 ">
            {/* =========================== FILTER TAB SECTION =========================== */}
          <nav className="filter-tab flex flex-col lg:flex-row items-center justify-between w-full ">
            <div className="tab flex flex-wrap gap-2 items-center">
              <button  data-aos="fade-right" data-aos-once="true" data-aos-duration="1000" data-aos-delay="800"  onClick={()=>setFilterDisplay("all")} className={` ${filterDisplay == "all" ? "border-[#036AE3] text-[#036AE3]" : "border-[#B0B0B0]" } py-2 hover:border-[#036AE3] hover:text-[#036AE3] transition-[0.2s] px-3 rounded-full border-1 font-[raleway] flex text-[18px]`}>
                All<span className="w-[3%] text-[10px]">{projects.projects.length}</span>
              </button>
              <button  data-aos="fade-right" data-aos-once="true" data-aos-duration="1400" data-aos-delay="600" onClick={()=>setFilterDisplay("Web development")} className={` ${filterDisplay == "Web development" ? "border-[#036AE3] text-[#036AE3]" : "border-[#B0B0B0]" } py-2 flex hover:border-[#036AE3] hover:text-[#036AE3] transition-[0.2s] px-3 rounded-full border-1 font-[raleway] text-[18px]`}>
                Web Development <span className="w-[3%] text-[10px]">{ projects.projects.filter(project => project.type === "Web development").length}</span>
              </button>
              <button  data-aos="fade-right" data-aos-once="true" data-aos-duration="1600" data-aos-delay="400"  onClick={()=>setFilterDisplay("ML")} className={` ${filterDisplay == "ML" ? "border-[#036AE3] text-[#036AE3]" : "border-[#B0B0B0]" } py-2 flex whitespace-nowrap hover:border-[#036AE3] hover:text-[#036AE3] transition-[0.2s] px-3 rounded-full border-1 font-[raleway] text-[18px]`}>
                Machine Learning<span className="w-[3%] text-[10px]">{ projects.projects.filter(project => project.type === "ML").length}</span>
              </button>
              <button  data-aos="fade-right" data-aos-once="true" data-aos-duration="1800" data-aos-delay="100" onClick={()=>setFilterDisplay("mobile")} className={` ${filterDisplay == "mobile" ? "border-[#036AE3] text-[#036AE3]" : "border-[#B0B0B0]" } py-2 flex whitespace-nowrap hover:border-[#036AE3] hover:text-[#036AE3] transition-[0.2s] px-3 rounded-full border-1 font-[raleway] text-[18px]`}>
                Mobile Development<span className="w-[3%] text-[10px]">{ projects.projects.filter(project => project.type === "mobile").length}</span>
              </button>
            </div>
            <div className="w-[6%] hidden lg:flex justify-between lg:block project-form-btn">
                <button onClick={()=>setFilterType("list")} className={` ${filterType == "list" ? "border-[#036AE3] text-[#036AE3]" : "border-[#B0B0B0]" } rounded-full px-2 hover:border-[#036AE3] transition-[0.2s] hover:text-[#036AE3] py-2 border-1 `}><BiMenu/></button>
                <button onClick={()=>setFilterType("grid")} className={` ${filterType == "grid" ? "border-[#036AE3] text-[#036AE3]" : "border-[#B0B0B0]" } rounded-full px-2 hover:border-[#036AE3] transition-[0.2s] hover:text-[#036AE3] py-2 border-1 `}><BsBoxes/></button>
            </div>
          </nav>
           {/* =========================== PROJECTS SECTION =========================== */}
           <div className={`mt-10  w-full h-auto gap-5 ${filterType == "grid" ? "grid " : "block mt-20"} project-boxes`}>
            {/* Map through your projects data here */}
            {projects.projects.map((project, index)=>(
                <div key={index} className={`w-full h-[500px]  ${filterType == "list" ? "lg:h-auto border-t-1 border-[#B0B0B0] relative my-5  group" : "lg:h-[100vh]"}  ${filterDisplay == project.type || filterDisplay == "all" ? "block" : "hidden"}`}>
                  <a href={project.link}>
                     <img src={project.img} alt="" className={` projct-img ${filterType == "list" ? "w-[0px] h-[0px] transition-[width]  duration-[0.4s] translate-x-[-50%] translate-y-[-50%] absolute top-[50%] left-[30%] origin-center group-hover:w-[200px] group-hover:h-[200px] group-hover:translate-x-[-50%] group-hover:translate-y-[-50%] z-40" : "h-[70%] w-full"} rounded-2xl transition-[0.3s] object-cover `} />
                    <div className="project-details flex flex-wrap justify-between items-center gap-y-1 pb-5 mt-5">
                        <h3 className="font-[raleway] font-bold w-[50%] lg:w-[40%] sm:w-auto flex   text-[14px] sm:text-[25px] lg:text-[30px]">{project.project_name}<span className={`text-[16px] text-[#B0B0B0] ${filterType == "list" ? "block" : "hidden"} `}>0{index+1}*</span></h3>
                        <p className="font-[raleway] w-[40%] flex lg:block lg:w-[40%] justify-end lg:justify-start   sm:w-auto text-[12px] sm:text-[20px] lg:text-[25px]">{project.type}</p>
                        <p className="text-[#B0B0B0] font-[raleway] lg:flex lg:justify-end w-[50%] lg:w-[20%] sm:w-auto text-[20px]  font-bold lg:text-[20px]">{project.year}</p>
                    </div>
                  </a>
                   
                </div>
            ))}
           </div>
        </section>
        <Footer name="body"  />
      </main>
    </>
  );
}

export default Projects;
