import React, { useState } from 'react'
import footerImg from '../assets/footer-bg-color.png'
import { assets, contactFormInfo, contactInfo } from '../assets/assets'
import { motion } from "motion/react"

const Contact = ({ isDarkMode }) => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "f0cdcb20-e70b-4da6-a95f-02342f74b711");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id='contact' className='w-full px-[12%] py-10 scroll-mt-20 
        bg-no-repeat bg-center bg-[length:90%_auto]'
            style={isDarkMode ? { background: 'none' } : { backgroundImage: `url(${footerImg})` }}>
            <motion.h4
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='text-center mb-2 text-lg font-Ovo'>{contactInfo.title}</motion.h4>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className=' text-center text-5xl font-Ovo'>{contactInfo.subTitle}</motion.h2>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className='text-center max-w-2xl mx-auto font-Ovo mt-5 mb-12'>
                {contactInfo.description}
            </motion.p>

            <motion.form
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className='max-w-3xl mx-auto flex flex-col gap-6' onSubmit={onSubmit}>
                <motion.input
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1.1 }}
                    type='text' placeholder={contactFormInfo.namePlaceholder} className='w-full border border-gray-300 rounded-md 
                px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600/30 dark:border-white/90' name='name' />
                <motion.input
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1.1 }}
                    type='email' placeholder={contactFormInfo.emailPlaceholder} className='w-full border border-gray-300 rounded-md 
                px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600/30 dark:border-white/90' name='email' />
                <motion.textarea
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1.1 }}
                    rows='5' placeholder={contactFormInfo.messagePlaceholder} className='w-full border border-gray-300 rounded-md 
                px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600/30 dark:border-white/90' name='message'></motion.textarea>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    type='submit' className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 
                text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border dark:border-white/50
                dark:hover:bg-gray-600/10' >
                    {contactFormInfo.submitButtonTitle} <img src={assets.right_arrow_white} alt='' className='w-4' /> </motion.button>
                <p className='mt-4'>{result}</p>
            </motion.form>
        </motion.div>
    )
}

export default Contact