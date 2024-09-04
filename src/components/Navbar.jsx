import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollPos > currentScrollPos || currentScrollPos < 10;

      setVisible(visible);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <motion.div
      className={`fixed z-[999] w-full px-20 py-8 font-["Outfit, sans-serif"] flex justify-between items-center transition-colors duration-300 ${visible ? 'bg-zinc-900' : ''}`}
      initial={{ y: 0 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
    >
      <div className='logo text-yellow-300 font-bold text-4xl italic'>
        Presentz
      </div>
      <div className='links flex gap-10'>
        {["Services", "Our Work", "About Us", "Insights", "Contact"].map((item, index) => (
          <a
            key={index}
            className={`text-lg capitalize font-semibold ${index === 4 && "ml-32"}`}
          >
            {item}
          </a>
        ))}
      </div>
    </motion.div>
  );
}

export default Navbar;
