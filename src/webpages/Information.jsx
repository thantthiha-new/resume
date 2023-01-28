import React from 'react'
import IU from '../assets/IU.jpg';
import ColorJisoo from '../assets/ColorJisoo.jpg';
import JiSoo from '../assets/Jisoo1.jpg';
import JiSoo2 from '../assets/Jisoo2.jpg';
import  Lebron from '../assets/Lebron.jpg';
import Sketch from '../assets/Sketch.jpg';
import Nana from '../assets/Nana.jpg';
import {motion} from 'framer-motion';

function Information() {
  return (
    <motion.div 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 1 , transition: {duration: 0.1} }}   className='w-full h-auto bg-white py-10 px-4 mb-16'>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img  className='w-[500px] mx-auto my-4 shadow-lg' src={IU} alt='/' />
        <div className='flex flex-col justify-center px-4'>
            <p className='text-secondary font-serif text-4xl'>Extra information about me</p>
            <p className='md:text-xl sm:text-3xl text-xl font-bold py-2 text-gray-800'>I enjoy a plethora of hobbies</p>
            <p className='font-thin p-1'>
                First of all, I love to draw and design, though there is a lot of room for improvement;
                I enjoy the relief and tranquility it gives me when I spend time on it.
            </p>
            <p className='font-thin p-1'>
                Secondly, I enjoy finding new shows and games to entertain myself.
                Therefore, I have watched a tonne of movies, shows, mangas, manhwas and games.

                For movies, I have watched Hindi Movies like Three Idiots to Thai Movies like Bad Genius and Taiwan movies like Apple of my Eye and Our Times.
                As you can probably tell, I watch and enjoy different genres and language ain't holding me back from watching a good movie.

                As for shows, I watch Korean Variety shows like Running Man to K-dramas like Itaewon Class, While You Were Sleeping, etc. I also have consumed a lot of Anime in my free time.
                You can ask me about almost all the popular animes around there'd be one or two at least that we have in common if you do watch Anime.
            </p>
            <p className='font-thin p-1'>
                I enjoy singing as well.
                I'd like to think I have a pretty good voice.
                Maybe, you can invite me to 'Sing K' .
            </p>
            
        </div>
    </div>
    <section class="overflow-hidden text-gray-700  ">
  <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-32 ">
    <div class="flex flex-wrap -m-1 md:-m-2">
      <div class="flex flex-wrap w-1/3">
        <div class="w-full p-1 md:p-2">
        <img  className='w-[500px] mx-auto my-4 shadow-lg' src={JiSoo} alt='/' />
        </div>
      </div>
      <div class="flex flex-wrap w-1/3">
        <div class="w-full p-1 md:p-2">
        <img  className='w-[500px] mx-auto my-4 shadow-lg' src={ColorJisoo} alt='/' />
        </div>
      </div>
      <div class="flex flex-wrap w-1/3">
        <div class="w-full p-1 md:p-2">
        <img  className='w-[500px] mx-auto my-4 shadow-lg' src={Lebron} alt='/' />
        </div>
      </div>
      <div class="flex flex-wrap w-1/3">
        <div class="w-full p-1 md:p-2">
        <img  className='w-[500px] mx-auto my-4 shadow-lg' src={JiSoo2} alt='/' />
        </div>
      </div>
      <div class="flex flex-wrap w-1/3">
        <div class="w-full p-1 md:p-2">
        <img  className='w-[500px] mx-auto my-4 shadow-lg' src={Sketch} alt='/' />
        </div>
      </div>
      <div class="flex flex-wrap w-1/3">
        <div class="w-full p-1 md:p-2">
        <img  className='w-[500px] mx-auto my-4 shadow-lg' src={Nana} alt='/' />
        </div>
      </div>
    </div>
  </div>
</section>

</motion.div>
  )
}

export default Information