import React from 'react'
import { Link } from 'react-router-dom'

const SearchRoutes = () => {
  return (
    <div className='m-20 text-center h-screen'>
      <div className='flex flex-row gap-20 flex-wrap justify-center'>
        <div className='w-fit red-blue-gradient p-[1px] rounded-[20px] shadow-card  '>
          <Link
            key="searchsajha"
            to="/searchroutes/sajharoutes"
          >
            <button

              className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] min-w-[280px] flex justify-evenly items-center flex-col text-[24px] font-semibold hover:bg-black-100'>
              Sajha Yatayat
            </button>
          </Link>
        </div>

        <div className='w-fit red-blue-gradient p-[1px] rounded-[20px] shadow-card flex '>
          <Link
            key="searchnepaly"
            to="/searchroutes/nepalyatayatroutes"
          >
            <button
              className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] min-w-[280px] flex justify-evenly items-center flex-col text-[24px] font-semibold hover:bg-black-100'>
              Nepal Yatayat
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SearchRoutes
