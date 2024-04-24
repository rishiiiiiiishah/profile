import React from 'react';
import htmlll from '../assets/htmlll.jpg';
import css from '../assets/css.jpg';
import javascriptImg from '../assets/javascript.jpg'; // Renamed from 'javascript'
import reactImg from '../assets/react.js-img.png'; // Corrected extension
import github from '../assets/github.png';
import node from '../assets/node.jpg';
import mongo from '../assets/mongo.png';
import express from '../assets/express.jpg';
import tailwind from '../assets/tailwind.png'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'

import { fadeIn } from '../variants'
const Experience = () => {
    const techs = [
        {
            id: 1,
            src: htmlll,
            title: 'HTML'
        },
        {
            id: 2,
            src: tailwind,
            title: ' TAILWIND CSS'
        },
        {
            id: 3,
            src: javascriptImg, // Updated variable name
            title: 'JAVASCRIPT'
        },
        {
            id: 4,
            src: reactImg, // Updated variable name and corrected extension
            title: 'REACT JS'
        },
        {
            id: 5,
            src: express,
            title: 'EXPRESS JS'
        },
        {
            id: 6,
            src: mongo,
            title: 'MONGO DB'
        },
        {
            id: 7,
            src: github,
            title: 'GITHUB'
        },
        {
            id: 8,
            src: node,
            title: 'NODE JS'
        }
    ];

    const idToShadowColorMap = {
        1: 'shadow-orange-500',
        2: 'shadow-blue-500',
        3: 'shadow-yellow-500',
        4: 'shadow-blue-500',
        5: 'shadow-yellow-500',
        6: 'shadow-blue-500',
        7: 'shadow-purple-500',
        8: 'shadow-green-500'
    };

    return (
        <section className='sectionp' id='experience'>

        
        <div name='experience' className='mt-50 w-full sm:mt-28'
        
       
        >
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                <div className='rishi'>
                    <motion.p
                     variants={fadeIn('right',0.5 )}
                     initial='hidden'
                      whileInView={'show'} 
                      viewport={{once: false, amount:0.7}} 
                      className='h2 text-accent'>Experience</motion.p>
                  
                  <motion.p 
    variants={fadeIn('down', 0.5)}
    initial='hidden'
    whileInView={'show'} 
    viewport={{ once: false, amount: 0.7 }} 
    className='text-lg h3 mt-5 sm:font-normal'>
    Technologies I've worked with
</motion.p>

                </div>

                <motion.div
                 variants={fadeIn('up',0.5 )}
                 initial='hidden'
                  whileInView={'show'} 
                  viewport={{once: false, amount:0.7}} 
                className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                    {
                        techs.map(({ id, src, title }) => (
                            <div key={id}
                                className={`shadow-md ${idToShadowColorMap[id]} rounded-lg`}
                            >
                                <img src={src} alt={title} className='w-20 mx-auto duration-200 hover:scale-105' />
                                <p className='mt-4'>{title}</p>
                            </div>
                        ))
                    }
                </motion.div>
            </div>
        </div>
         </section>
    );
}

export default Experience;
