import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import abouti from '../assets/aboutus.png';
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'

import { fadeIn } from '../variants'
const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div>
          <div >
            <motion.div
           variants= {fadeIn('right',0.3)}
            initial='hidden'
             whileInView={'show'} 
             viewport={{once: false, amount:0.7}} 
            >
            <img src={abouti} className='mb-7' alt='' />
            </motion.div>
          
            <motion.div
             variants= {fadeIn('left',0.3)}
             initial='hidden'
              whileInView={'show'} 
              viewport={{once: false, amount:0.7}} 
            
            className='h2 text-accent'>
            <h2>About Me</h2>
            </motion.div>

            <motion.h3 
            variants= {fadeIn('left',0.3)}
            initial='hidden'
             whileInView={'show'} 
             viewport={{once: false, amount:0.7}} 
            
            className='h3 mb-4 sm:font-normal'>

             Full Stack Web Developer
            </motion.h3>

          
            <motion.p 
            variants= {fadeIn('left',0.3)}
            initial='hidden'
             whileInView={'show'} 
             viewport={{once: false, amount:0.7}} 
            
            className='mb-7'>With a solid foundation in programming languages such as HTML, CSS, JavaScript, and familiarity with frameworks like React and Node.js, I'm actively honing my skills to create seamless and user-friendly web experiences. </motion.p>
            <motion.div
            variants= {fadeIn('left',0.3)}
            initial='hidden'
             whileInView={'show'} 
             viewport={{once: false, amount:0.7}} 
            className='flex space-x-4'>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView ? <CountUp start={0} end={24} duration={7} /> : 0}
                +
                <div className='font-primary text-sm tracking-[2px]'>Months of <br /> Experience</div>
                
              </div>

              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView ? <CountUp start={0} end={8} duration={7} /> : 0}
                +
                <div className='font-primary text-sm tracking-[2px]'>Number of <br /> Projects</div>
              </div>

              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView ? <CountUp start={0} end={1} duration={10} /> : 0}
                <div className='font-primary text-sm tracking-[2px]'>Number of <br />Internships</div>
              </div>



            </motion.div>

            <motion.div 
            variants= {fadeIn('left',0.3)}
            initial='hidden'
             whileInView={'show'} 
             viewport={{once: false, amount:0.7}} 
            className='space-x-4 mt-7'>
            <button className='btn btn-lg'>Contact me</button>
<a href="#" className='text-gradient btn-link'>
  My Portfolio
</a>
</motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;