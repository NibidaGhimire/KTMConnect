/* eslint-disable react/no-unknown-property */
import React from 'react'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import {SectionWrapper} from '../hoc'





const About = () => {
  return (
    <>
      <motion.div 
        variants={textVariant()}
      >
        <h2 className={styles.sectionHeadText}>About Us</h2>

      </motion.div>

      <motion.p
        variants={fadeIn("","",0.1,1)}
        className='mt-4 text-sec text-[17px]  leading-[30px]'
      >
      A real-time solution designed to streamline transportation. Our platform provides live bus tracking, enabling passengers to locate buses instantly, view accurate arrival times, and plan journeys efficiently. Additionally, it offers detailed bus routes and identifies the closest bus stops, enhancing commuter convenience and ensuring a seamless travel experience for all.      </motion.p>

    </>
  )
}



export default SectionWrapper(About,"about")