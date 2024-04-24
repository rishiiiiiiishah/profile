import React from 'react';
import amazon from '../assets/amazon.png';
import rishique from '../assets/rishique.png';
import mytunes from '../assets/mytunes.png';
import moon from '../assets/moon.png';
import nova from '../assets/nova.png';
import './Portfolio.css'; // Import CSS file for styling
import tailwind from '../assets/tailwind.png'
import { motion } from 'framer-motion'

import { fadeIn } from '../variants'
const Portfolio = () => {
    const portfolio = [
        {
            id: 1,
            src: amazon,
            codeLink: 'https://github.com/rishiiiiiiishah/webdev',
            demoLink: 'https://rishiiiiiiishah.github.io/webdev/',
            projectName: "Amazon Project"
        },
        {
            id: 2,
            src: rishique,
            demoLink: 'https://scintillating-fudge-0b86a2.netlify.app/',
            codeLink: 'https://github.com/rishiiiiiiishah/e-commerce-website',
            projectName: "Rishique Project"
        },
        {
            id: 3,
            src: mytunes,
            demoLink:'https://rishiiiiiiishah.github.io/mytunes/',
            projectName: "MyTunes Project",
            codeLink:'https://github.com/rishiiiiiiishah/mytunes'
        },
        {
            id: 4,
            src: moon,
            codeLink: 'https://github.com/rishiiiiiiishah/nova-moon-website',
            demoLink: 'https://rishiiiiiiishah.github.io/nova-moon-website/',
            projectName: "Moon Project"
        },
        {
            id: 5,
            src: nova,
            codeLink: 'https://rishiiiiiiishah.github.io/novaa/',
            demoLink: 'https://novaa-six.vercel.app/',
            projectName: "Nova Project"
        },
    ];

    return (
        <section className='section' id='portfolio'>
            <div name='portfolio' className='w-full text-white md:h-screen'>
                <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                    <div className='pb-8'>
                        <motion.p c
                         variants={fadeIn('up',0.5 )}
                         initial='hidden'
                          whileInView={'show'} 
                          viewport={{once: false, amount:0.7}} 
                        className='h2 text-accent'>Projects</motion.p>
                        <motion.p
                          variants={fadeIn('down',0.5 )}
                          initial='hidden'
                           whileInView={'show'} 
                           viewport={{once: false, amount:0.7}} 
                        className='text-lg h3 mt-5 sm:font-normal'>Check out some of my projects right here</motion.p>
                    </div>

                    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                        {portfolio.map(({ id, src, demoLink, codeLink, projectName }) => (
                            <motion.div
                            
                            variants={fadeIn('down',0.5 )}
                          initial='hidden'
                           whileInView={'show'} 
                           viewport={{once: false, amount:0.7}} key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                                <div className="portfolio-image-container">
                                    <img src={src} alt="" className='portfolio-image rounded-md duration-200 hover:scale-105' />
                                    <div className="portfolio-overlay">
                                        <p className="project-name">{projectName}</p>
                                    </div>
                                </div>
                                <div className='flex items-center justify-center'>
                                    <a href={demoLink} target="_blank" rel="noopener noreferrer" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                                        Demo
                                    </a>

                                    
                                    <a href={codeLink} target="_blank" rel="noopener noreferrer" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                                        Code
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;
