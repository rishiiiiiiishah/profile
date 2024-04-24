import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import abouti from '../assets/aboutus.png';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Link } from 'react-scroll'; // Import Link from react-scroll

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div>
          <div>
            <motion.div
              variants={fadeIn('right', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
            >
              <img src={abouti} className='mb-7' alt='' />
            </motion.div>

            <motion.div
              variants={fadeIn('left', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='h2 text-accent'
            >
              <h2>About Me</h2>
            </motion.div>

            <motion.h3
              variants={fadeIn('left', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='text-lg h3 mb-4 sm:font-sm'
            >
              Full Stack Web Developer
            </motion.h3>

            <motion.p
              variants={fadeIn('left', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-5'
            >
              With a solid foundation in programming languages such as HTML,
              CSS, JavaScript, and familiarity with frameworks like React and
              Node.js, I'm actively honing my skills to create seamless and
              user-friendly web experiences.
            </motion.p>
            <motion.div
              variants={fadeIn('left', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex space-x-4'
            >
              <div className='text-[30px] font-tertiary text-gradient mb-5'>
                {inView ? <CountUp start={0} end={24} duration={7} /> : 0}
                +
                <div className='font-primary text-sm tracking-[2px]'>
                  Months of <br /> Experience
                </div>
              </div>

              <div className='text-[30px] font-tertiary text-gradient mb-2'>
                {inView ? <CountUp start={0} end={8} duration={7} /> : 0}
                +
                <div className='font-primary text-sm tracking-[2px]'>
                  Number of <br /> Projects
                </div>
              </div>

              <div className='text-[30px] font-tertiary text-gradient mb-2'>
                {inView ? <CountUp start={0} end={1} duration={10} /> : 0}
                <div className='font-primary text-sm tracking-[2px]'>
                  Number of <br /> Internships
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn('left', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='space-x-4 mt-7'
            >
              {/* Link to the contact section */}
              <Link
  to='contact'
  smooth={true}
  duration={500}
  className='btn btn-lg cursor-pointer'
  style={{ padding: '20px 30px' }} // Adjust padding as needed
>
  Contact Me
</Link>
{/* Link to the experience section */}
<Link
  to='portfolio'
  smooth={true}
  duration={500}
  className='text-gradient btn-link cursor-pointer'
  style={{ padding: '20px 30px' }} // Adjust padding as needed
>
  My Portfolio
</Link>

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
