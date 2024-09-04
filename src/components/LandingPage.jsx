import { motion } from 'framer-motion';
import React from 'react';
import { HiArrowSmallUp } from "react-icons/hi2";

function LandingPage() {
  return (
    <div data-scroll data-section-section data-scroll-speed="-.5" className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='textstructure mt-40 px-20'>
            {["We Create", "Eye Opening", "Presentation"].map((item, index) => (
                <div key={index} className='masker'>
                    <div className='w-fit flex items-end overflow-hidden'>
                        {index === 1 && (
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "9vw" }}
                                transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                                className='mr-5 w-[8vw] rounded-md h-[5.7vw] relative bg-yellow-300'
                            ></motion.div>
                        )}
                        <h1 className='pt-[2vw] uppercase text-[7vw] leading-[0.84] font-["Outfit, sans-serif"] tracking-tight font-medium'>
                            {item}
                        </h1>
                    </div>
                </div>
            ))}
        </div>
        <div className='border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20'>
            {[
                "For the Public and Private Companies",
                "From the first pitch to IPO",
            ].map((item, index) => (
                <p key={index} className='text-md font-light -tracking-normal leading-none'>
                    {item}
                </p>
            ))}
            <div className='start flex items-center gap-5'>
                <div className='px-5 py-2 border-[2px] border-zinc-400 font-light text-md capitalize rounded-full'>
                    Start the project
                </div>
                <div className='w-10 h-10 flex items-center justify-center border-[2px] border-zinc-400 rounded-full'>
                    <span className='rotate-[45deg]'>
                        <HiArrowSmallUp />
                    </span>
                </div>
            </div>
        </div>
    </div>
  );
}

export default LandingPage;
