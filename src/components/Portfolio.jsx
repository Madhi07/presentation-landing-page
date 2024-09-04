import { motion } from 'framer-motion';
import React, { useState } from 'react';

function Portfolio() {
  const [hoverStates, setHoverStates] = useState([false, false]);

  const handleMouseEnter = (index) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = true;
    setHoverStates(newHoverStates);
  };

  const handleMouseLeave = (index) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = false;
    setHoverStates(newHoverStates);
  };

  return (
    <div className='w-full py-10'>
      <div className='w-full px-10 border-b-[1px] border-zinc-700 pb-10'>
        <h1 className='text-7xl tracking-wide'>Portfolio</h1>
      </div>
      <div className='px-20'>
        <div className="outercard w-full flex gap-10 mt-10">
          <div
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={() => handleMouseLeave(0)}
            className='cardcontainer relative w-1/2 h-[75vh]'
          >
            <div className='card w-full h-full rounded-xl overflow-hidden'>
              <img className='w-full h-full bg-cover' src="././images/project-1.png" alt="Project 1" />
            </div>
            <motion.h1
              className="absolute inset-0 flex justify-center items-center text-[#eee] z-[9] overflow-hidden leading-none tracking-tight text-8xl"
              initial={{ opacity: 0 }} // Hide initially
              animate={hoverStates[0] ? { opacity: 1 } : { opacity: 0 }} // Show on hover
              transition={{ duration: 0.5 }} // Smooth transition
            >
              {"Prez".split('').map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={hoverStates[0] ? { y: "0%" } : { y: "100%" }}
                  transition={{
                    ease: [0.22, 1, 0.36, 1],
                    delay: index * 0.1
                  }}
                  className='inline-block'
                >
                  {item}
                </motion.span>
              ))}
            </motion.h1>
          </div>

          <div
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={() => handleMouseLeave(1)}
            className='cardcontainer relative w-1/2 h-[75vh]'
          >
            <div className='card w-full h-full rounded-xl overflow-hidden'>
              <img className='w-full h-full bg-cover' src="././images/project-2.png" alt="Project 2" />
            </div>
            <motion.h1
              className="absolute inset-0 flex justify-center items-center text-[#eee] z-[9] overflow-hidden leading-none tracking-tight text-8xl"
              initial={{ opacity: 0 }} // Hide initially
              animate={hoverStates[1] ? { opacity: 1 } : { opacity: 0 }} // Show on hover
              transition={{ duration: 0.5 }} // Smooth transition
            >
              {"Prez".split('').map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={hoverStates[1] ? { y: "0%" } : { y: "100%" }}
                  transition={{
                    ease: [0.22, 1, 0.36, 1],
                    delay: index * 0.1
                  }}
                  className='inline-block'
                >
                  {item}
                </motion.span>
              ))}
            </motion.h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
