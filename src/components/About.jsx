import React from 'react'
import { assets, infoList, toolsData, aboutInfo } from '../assets/assets'
import { motion } from "motion/react"
import { Tooltip as ReactTooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css';

const About = ({ isDarkMode }) => {
    return (
        <motion.div id='about' className='w-full px-[12%] py-10 scroll-mt-20'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <motion.h4
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='text-center mb-2 text-lg font-Ovo'>{aboutInfo.title}</motion.h4>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className=' text-center text-5xl font-Ovo'>{aboutInfo.subTitle}</motion.h2>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className=' flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className='w-64 sm:w-80 rounded-3xl max-w-none'>
                    <img src={assets.user_image} alt='user' className='w-full rounded-3xl' />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className='flex-1'>
                    <p className='mb-10 max-w-2xl font-Ovo'>{aboutInfo.description}</p>
                    <motion.ul
                        initial={{ opacity: 0, }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                        {infoList.map((info, index) => (
                            <motion.li
                                whileHover={{ scale: 1.05 }}
                                key={index} className='border-[0.5px] border-gray-400 p-6 rounded-xl cursor-pointer 
                            hover:bg-lightHover hover:-translate-y-1 duration-500 
                            hover:shadow-customDark dark:border-white dark:hover:shadow-white dark:hover:bg-gray-600/30'>
                                <img src={isDarkMode ? info.iconDark : info.icon} alt={info.title} className='w-7 mt-3' />
                                <h3 className='font-Ovo my-4 font-semibold text-gray-700 dark:text-white'>{info.title}</h3>
                                <p className='text-gray-600 text-sm dark:text-white/80'>{info.description}</p>
                            </motion.li>
                        ))}
                    </motion.ul>
                    <motion.h4
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.3 }}
                        className='my-6 text-gray-700 font-Ovo dark:text-white/80'>{aboutInfo.toolsuseTitle}</motion.h4>
                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.5 }}
                        className=' flex items-center gap-3 sm:gap-5'>
                        {toolsData.map((tool, index) => (
                            <li
                                key={index}
                                data-tooltip-id={`tool-${index}`}
                                data-tooltip-content={tool.name}
                                className='flex items-center justify-center w-12 sm:w-14 aspect-square border 
      border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 transition-transform duration-500'
                            >
                                <img src={tool.icon} alt={tool.name} className='w-5 sm:w-7' />
                                <ReactTooltip id={`tool-${index}`} place='bottom' effect='solid' />
                            </li>
                        ))}
                    </motion.ul>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default About