import React from 'react'
import { assets, serviceData, myservicesInfo } from '../assets/assets'
import { motion } from "motion/react"

const Services = () => {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id='services' className='w-full px-[12%] py-10 scroll-mt-20 dark:text-white/80'>
            <motion.h4
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='text-center mb-2 text-lg font-Ovo'>{myservicesInfo.title}</motion.h4>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className=' text-center text-5xl font-Ovo'>{myservicesInfo.subTitle}</motion.h2>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className='text-center max-w-2xl mx-auto font-Ovo mt-5 mb-12'>
                {myservicesInfo.description}</motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className='grid grid-cols-auto gap-6 my-10'>
                {serviceData.map((service, index) => (
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        key={index} className='border-[0.5px] border-gray-400 p-6 rounded-xl cursor-pointer 
                    hover:bg-lightHover hover:-translate-y-1 transition-transform duration-500 hover:shadow-customDark dark:hover:bg-gray-600/30 dark:hover:shadow-white'>
                        <img src={service.icon} alt={service.title} className='w-10 mt-3' />
                        <h3 className='font-Ovo my-4 text-lg text-gray-700 dark:text-white'>{service.title}</h3>
                        <p className='text-gray-600 text-sm leading-5 dark:text-white/80'>{service.description}</p>
                        <a href={service.link} className='flex items-center gap-2 text-sm mt-5'>
                            {myservicesInfo.readmoreTitle} <img src={assets.right_arrow} alt='' className='w-4' /> </a>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}

export default Services