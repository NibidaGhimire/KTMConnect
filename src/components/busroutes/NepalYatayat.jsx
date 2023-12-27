import React, { useState } from 'react'
import { NepalYatayatRoutes } from '../../constants'


const NepalYR = ({ index, main, sub }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div
      onClick={() => setToggle(!toggle)}
      className=' red-blue-gradient p-[1px] rounded-[20px] shadow-card my-4 mx-2'>
      <button
        className={` ${!toggle?"bg-tertiary":"bg-black-100"} rounded-[20px] py-4 px-8 h-fit w-full flex justify-evenly items-center flex-col text-[20px] font-medium hover:bg-black-100`}>
        {main}
      </button>
      <div
        className={`${!toggle ? "hidden" : "flex"} w-full justify-center flex-wrap p-4 bg-black-100 absolute mx-0 my-2 min-w-[140px] z-10 rounded-xl`} >
        <div className='flex flex-col flex-wrap  items-start gap-5 cursor-pointer'>
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


const NepalYatayat = () => {
  return (
    <div className='m-20 text-center h-screen'>
      <div className='flex flex-col gap-4 flex-wrap justify-center'>
        {NepalYatayatRoutes.map((route, index) => (
          <NepalYR key={route.title} index={index} {...route} />
        ))}

      </div>
    </div>
  )
}

export default NepalYatayat
