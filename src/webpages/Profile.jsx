import React from 'react';
import Styx2 from '../assets/Styx2.jpg';
import {motion} from 'framer-motion';
import {SiAdobeillustrator, SiTailwindcss, SiHtml5, SiJavascript, SiReact, SiMysql, SiAngular, SiPython} from 'react-icons/si';
function Profile() {
  return (
    <motion.div 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 1 , transition: {duration: 0.1} }}   className='w-full bg-white py-16 px-4'>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 '>
        <img className='w-[500px] mx-auto my-4 shadow-lg rounded-full' src={Styx2} alt='/' />
        <div className='flex flex-col justify-center px-4'>
            <p className='text-pink-900 font-serif text-4xl'>About Me</p>
            <p className='md:text-xl sm:text-3xl text-xl font-bold py-2 text-gray-800'>Diploma in Business and Information Technology</p>
            <p className='font-thin'>
                I have experience in Business and IT as my Diploma suggests.
                I have some experience with Data Analytics, Web Development, Marketing and some minor Design aspects.
                I am eager and willing to put in the time and effort to learn if you are willing to give me a chance.
            </p>
        </div>
    </div>
    <div class="max-w-[1240px] mx-auto my-10 grid ">
    <p className='flex justify-center text-xl text-pink-900 font-sans font-bold'>Here are some technologies I am proficient with:</p>
    </div>
  <div class="max-w-[1240px] mx-auto my-10 grid grid-cols-8 gap-4 ">
  <div className='flex flex-col flex-nowrap bg-white-100 rounded-xl shadow-lg p-2 hover:animate-pulse'><SoftwareIcon icon={<SiTailwindcss size="50" />} /><p className='mx-auto font-thin md:text-xl'>Tailwind</p></div>
  <div className='flex flex-col flex-nowrap bg-white-100 rounded-xl shadow-lg p-2 hover:animate-pulse'><SoftwareIcon icon={<SiHtml5 size="50" />} /><p className='mx-auto font-thin md:text-xl'>HTML</p></div>
  <div className='flex flex-col flex-nowrap bg-white-100 rounded-xl shadow-lg p-2 hover:animate-pulse'><SoftwareIcon icon={<SiJavascript size="50" />} /><p className='mx-auto font-thin md:text-xl'>JavaScript</p></div>
  <div className='flex flex-col flex-nowrap bg-white-100 rounded-xl shadow-lg p-2 hover:animate-pulse'><SoftwareIcon icon={<SiReact size="50" />} /><p className='mx-auto font-thin md:text-xl'>React</p></div>
  <div className='flex flex-col flex-nowrap bg-white-100 rounded-xl shadow-lg p-2 hover:animate-pulse'><SoftwareIcon icon={<SiMysql size="50" />} /><p className='mx-auto font-thin md:text-xl'>MySQL</p></div>
  <div className='flex flex-col flex-nowrap bg-white-100 rounded-xl shadow-lg p-2 hover:animate-pulse'><SoftwareIcon icon={<SiAngular size="50" />} /><p className='mx-auto font-thin md:text-xl'>Angular</p></div>
  <div className='flex flex-col flex-nowrap bg-white-100 rounded-xl shadow-lg p-2 hover:animate-pulse'><SoftwareIcon icon={<SiPython size="50" />} /><p className='mx-auto font-thin md:text-xl'>Python</p></div>
  <div className='flex flex-col flex-nowrap bg-white-100 rounded-xl shadow-lg p-2 hover:animate-pulse'><SoftwareIcon icon={<SiAdobeillustrator size="50" />} /><p className='mx-auto font-thin md:text-xl'>Illustrator</p></div>
</div>
</motion.div>
  )
}
const SoftwareIcon = ({icon}) => (
  <div className='software-icon'>
    {icon}
  </div>
);
export default Profile