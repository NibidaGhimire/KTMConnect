import { motion } from 'framer-motion';
import { styles } from '../styles';
import { Link } from 'react-router-dom';
import { herobg } from "../assets/index";

const Hero = () => {
  return (
    <>
      <img src={herobg} className='absolute h-auto'/>
      <div className='relative w-full h-screen mx-auto flex flex-col'>

        <div className={`${styles.paddingX} absolute inset-0 
              top-[120px] max-w-7xl mx-auto 
              flex flex-col items-center gap-28 `}>
          <div className='flex flex-row'>
            <div className='flex flex-col justify-center items-center mt-5'>
              <div className='w-5 h-5 rounded-full bg-[#f75151]' />
              <div className='w-1 sm-h-80 h-32 red-gradient' />
            </div>

            <div>
              <h1 className={`${styles.heroHeadText} text-white`}>KTM<span className='text-[#f75151]'>Connect</span></h1>
              <p className={`${styles.sectionSubText} mt-2 text-white-100`}>
                <br className='sm-block hidden' />Track Buses, Search Routes, Find Stations
              </p>
            </div>

          </div>
          <div className='flex flex-row gap-20'>


            <Link
              key="trackbus"
              to="/track"
            >
              <button
                className='hover:text-black hover:bg-white font-medium cursor-pointer rounded-xl border-[1px] border-white px-4 py-2 text-[24px] '
              >Track Buses</button>
            </Link>


            <Link
              key="searchroutes"
              to="/searchroutes"
            >
            <button
              className='hover:text-black hover:bg-white font-medium cursor-pointer rounded-xl border-[1px] border-white px-4 py-2 text-[24px] '
            >Search Routes</button>
            </Link>
          </div>
          
        </div>





        <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
          <a href="#about">
            <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
              <motion.div
                animate={{
                  y: [0, 24, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
                className="w-3 h-3 rounded-full bg-sec mb-1"
              />
            </div>
          </a>
        </div>
      </div>
    </>
  )
}

export default Hero