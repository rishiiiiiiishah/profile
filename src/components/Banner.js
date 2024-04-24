import React from 'react';
import Image from '../assets/rishi.png';
import { FaGithub, FaEnvelope, FaFileAlt } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Link } from 'react-scroll';
import { FaLinkedin } from "react-icons/fa";

const Banner = () => {
  const handleResumeDownload = () => {
    // Replace 'your-resume-url' with the actual URL of your resume file
    window.location.href = 'https://drive.google.com/file/d/1DfdfIJ4pLJ4wq4QTFC4cicjjM5O7tz8M/view?usp=drivesdk';
  };

  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
      <div className="container mx-auto">
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:mb-64'>

          <div className='flex-1 text-center font-secondary lg:text-left'>

            <motion.h1 variants={fadeIn('up',0.3)}
             initial='hidden'
              whileInView={'show'} 
              viewport={{once: false, amount:0.7}} 
              className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>
              RISHI <span>SHAH</span>
            </motion.h1>
            <motion.div variants={fadeIn('up', 0.3)}
             initial='hidden'
             whileInView={'show'} 
             viewport={{once: false, amount: 0.7}}  
             className='mb-6 text-2xl lg:text-[52px] font-secondary font-semibold uppercase leading-[1]'>
              <span className='text-lg lg:text-xl text-white mr-2'>I am a</span>
              <TypeAnimation
                sequence={[
                  'Frontend Developer',
                  2000,
                  'Backend Developer',
                  2000,
                  'UI/UX Designer',
                  2000,
                ]}
                speed={70}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>

            <motion.p 
            variants={fadeIn('up',0.5)}
            initial='hidden'
             whileInView={'show'} 
             viewport={{once: false, amount:0.7}} 
            className='mb-8 max-w-lg mx-auto lg:mx-0'>Enthusiastic Computer Engineering student at D J. Sanghvi College of Engineering, with a passion for technology, I'm on a journey to become a Full Stack Web Developer.</motion.p>
            <motion.div
            variants={fadeIn('up',0.6)}
            initial='hidden'
             whileInView={'show'} 
             viewport={{once: false, amount:0.7}} 
            className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              {/* Link to the contact section */}
              <Link to='contact'  smooth={true} duration={500} className='btn btn-lg flex items-center cursor-pointer'>Contact Me</Link>

              {/* Direct download link for the resume */}
              <a href="#" className='text-gradient btn-link' onClick={handleResumeDownload}>My Resume</a>
            </motion.div>
            <motion.div
            variants={fadeIn('up',0.7)}
            initial='hidden'
             whileInView={'show'} 
             viewport={{once: false, amount:0.7}} 
            className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
               <a href="mailto:rishiiiishah@gmail.com">
                <FaEnvelope />
              </a>
              <a href="https://github.com/rishiiiiiiishah">
                <FaGithub />
              </a>
              <a href="https://drive.google.com/file/d/1DfdfIJ4pLJ4wq4QTFC4cicjjM5O7tz8M/view?usp=drivesdk" onClick={handleResumeDownload}>
                <FaFileAlt />
              </a>


              <a href="https://drive.google.com/file/d/1DfdfIJ4pLJ4wq4QTFC4cicjjM5O7tz8M/view?usp=drivesdk" onClick={handleResumeDownload}>
              <FaLinkedin />

              </a>
            </motion.div>
          </div>

          <motion.div
          variants={fadeIn('down',0.5 )}
          initial='hidden'
           whileInView={'show'} 
           viewport={{once: false, amount:0.7}} 
          
          className="flex justify-center lg:justify-end">
            <img className="w-[250px] lg:w-[400px]" src={Image} alt="" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Banner;
