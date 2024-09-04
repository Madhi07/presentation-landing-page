import React from 'react';

function Footer() {
  const links = ["Services", "Our Work", "About Us", "Insights", "Contact"];
  const socialMedia = ["Facebook", "Instagram", "Twitter"];

  return (
    <div className='flex gap-5 w-full h-screen bg-zinc-900 p-20'>
      <div className='w-1/2 h-full flex flex-col justify-between'>
        <div className='heading'>
          <h1 className='text-[8vw] font-semibold uppercase leading-snug -mb-10'>Eye-</h1>
          <h1 className='text-[8vw] font-semibold uppercase leading-snug -mb-10'>Opening</h1>
        </div>
        <h3 className='text-2xl'>Presentz</h3>
      </div>
      <div className='w-1/2 flex flex-col justify-between'>
        <div>
          <h1 className='text-[6.5vw] font-semibold uppercase leading-snug -mb-10'>Presentation</h1>
          <div className='dets mt-20'>
            {links.map((item, index) => (
              <a
                key={index}
                href="#"
                className='text-xl font-light py-1 flex items-center gap-3'
              >
                <span className='h-2 w-2 bg-white rounded-full inline-block'></span>
                {item}
              </a>
            ))}
          </div>
        </div>
        <div className='social-media mt-10 flex gap-5'>
          {socialMedia.map((item, index) => (
            <a
              key={index}
              href="#"
              className='text-xl font-light flex items-center gap-2'
            >
              <span className='h-2 w-2 bg-white rounded-full inline-block'></span>
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
