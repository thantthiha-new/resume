import React from 'react'
import Typed from 'react-typed';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
function Home() {
  return (
    <motion.div 
    className="text-secondary"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 1 , transition: {duration: 0.1} }} 
    >
        <div className='max-w-[1600px] w-full min-h-screen  mx-auto text-center flex flex-col justify-center'>
            <p className='text-primary font-thin p-2 text-5xl'>Thant Thiha</p>
            <h1 className='font-serif md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Software Developer & Designer</h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-5xl sm:text-4xl text-xl font-mono font-bold py-4 text-primary'>
                    I am proficient in</p>
                <Typed className='md:text-5xl sm:text-4xl text-xl font-mono font-bold md:pl-4 pl-2'
                strings={['HTML','Tailwind','mySQL','JavaScript','Illustrator']}
                typeSpeed={100}
                backSpeed={100} 
                loop
                />
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-500'>Welcome To My Website!</p>
           <Link to='/profile'><button className='buttons'>Who am I ?</button></Link>
        </div>
        
    </motion.div>
    
  )
}

export default Home