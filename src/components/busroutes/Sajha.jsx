import React, { useState } from 'react'
import { SajhaRoutes } from '../../constants'


const SajhaR = ({ index, main, sub }) => {

  const [toggle, setToggle] = useState(false);

  return (
    <div
      onClick={() => setToggle(!toggle)}
      className=' red-blue-gradient p-[1px] rounded-[20px] shadow-card my-4 mx-2'>
      <button
        className=' bg-tertiary rounded-[20px] py-4 px-8 h-fit w-fit flex justify-evenly items-center flex-col text-[20px] font-medium hover:bg-black-100'>
        {main}
      </button>

      <div
        className={`${!toggle ? "hidden" : "flex"} p-4 bg-black-100 absolute mx-0 my-2 min-w-[140px] z-10 rounded-xl`} >
        <div className='flex flex-col  items-start gap-5 cursor-pointer'>
          {sub.map((title, index) => (
            <div key={index}
            >
              {title}
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}





const Sajha = () => {
  return (
    <div className='m-20 text-center h-screen'>
      <div className='flex flex-row gap-4 flex-wrap justify-center'>
        {SajhaRoutes.map((route, index) => (
          <SajhaR key={route.title} index={index} {...route} />
        ))}

      </div>
    </div>
  )
}

export default Sajha