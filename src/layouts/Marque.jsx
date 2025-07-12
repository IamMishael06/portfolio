
import ai from '../assets/images/stacks/ai.png'
import css from '../assets/images/stacks/css.png'
import django_rest from '../assets/images/stacks/django-rest.png'
import django from '../assets/images/stacks/django.png'
import express_js from '../assets/images/stacks/express-js.png'
import html from '../assets/images/stacks/html.png'
import js from '../assets/images/stacks/js.png'
import node_js from '../assets/images/stacks/node-js.png'
import python from '../assets/images/stacks/pyhton.png'
import react from '../assets/images/stacks/react.png'
import react_native from '../assets/images/stacks/react-native.png'

function Marque(props) {
  return (
    <>
     <div className={`marque my-20 lg:h-[40vh] max-lg:h-[40vh] lg:w-[80%] lg:block  ${props.visibility == "hidden" ? "hidden" : "block"} mx-auto h-[40vh] w-[90%]  overflow-x-scroll relative`}>
              <div className='first-marquee relative w-[2200px] flex overflow-x-scroll h-[50%] items-center gap-10 content-start'>
                <span className='tag text-[white] text-[20px] font-[raleway] font-medium bg-[#036AE3] rounded-full px-5 py-2  flex items-center'>Web</span>
                <img src={html} alt="" className='w-[2%]' />
                <img src={css} alt="" className='w-[2%]' />
                <img src={js} alt="" className='w-[2%]' />
                <img src={react} alt="" className='w-[2%]' />
                <img src={node_js} alt="" className='w-[2%]' />
                 <img src={express_js} alt="" className='w-[2%]' />
                <img src={django} alt="" className='w-[2%]' />
                <img src={django_rest} alt="" className='w-[2%]' />
                <span className='tag text-[white] text-[20px] font-[raleway] font-medium bg-[#036AE3] rounded-full px-5 py-2  flex items-center'>Mobile</span>
                <img src={react_native} alt="" className='w-[2%]' />
                <span className='tag text-[white] text-[20px] font-[raleway] font-medium bg-[#036AE3] rounded-full px-5 py-2  flex items-center'>Software</span>
                <img src={python} alt="" className='w-[2%]' />
                <span className='tag text-[white] text-[20px] font-[raleway] font-medium bg-[#036AE3] rounded-full px-5 py-2  flex flex-nowrap items-center whitespace-nowrap'>Machine Learning</span>
                <img src={ai} alt="" className='w-[2%]' />
                <span className='tag text-[white] text-[20px] font-[raleway] font-medium bg-[#036AE3] rounded-full px-5 py-2  flex items-center'>Web</span>
              </div>
               <div className='second-marquee w-[2200px] relative flex overflow-x-scroll h-[50%] items-center gap-10 content-start'>
                <span className='tag text-white text-[20px] font-[raleway] font-medium bg-[#036AE3] rounded-full px-5 py-2 flex items-center whitespace-nowrap'>Web</span>
                <img src={ai} alt="" className='w-[2%]' />
                <span className='tag text-white text-[20px] font-[raleway] font-medium bg-[#036AE3] rounded-full px-5 py-2 flex items-center whitespace-nowrap'>Machine Learning</span>
                <img src={python} alt="" className='w-[2%]' />
                <span className='tag text-white text-[20px] font-[raleway] font-medium bg-[#036AE3] rounded-full px-5 py-2 flex items-center whitespace-nowrap'>Software</span>
                <img src={react_native} alt="" className='w-[2%]' />
                <span className='tag text-white text-[20px] font-[raleway] font-medium bg-[#036AE3] rounded-full px-5 py-2 flex items-center whitespace-nowrap'>Mobile</span>
                <img src={django_rest} alt="" className='w-[2%]' />
                <img src={django} alt="" className='w-[2%]' />
                <img src={express_js} alt="" className='w-[2%]' />
                <img src={node_js} alt="" className='w-[2%]' />
                <img src={react} alt="" className='w-[2%]' />
                <img src={js} alt="" className='w-[2%]' />
                <img src={css} alt="" className='w-[2%]' />
                <img src={html} alt="" className='w-[2%]' />
                <span className='tag text-white text-[20px] font-[raleway] font-medium bg-[#036AE3] rounded-full px-5 py-2 flex items-center whitespace-nowrap'>Web</span>
              </div>
            </div>
    
    
    </>
  )
}

export default Marque