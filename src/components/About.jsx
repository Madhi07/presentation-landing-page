import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-white rounded-tl-3xl rounded-tr-3xl text-black'>
        <h1 className='font-["Outfit, sans-serif"] text-3xl leading-[3vw]'>
        Welcome! to xyz company, a leader in xyz industry/sector. Our mission is educate things. We pride ourselves on empowering talents, which has led to major achievements. With a strong focus on innovation and customer satisfaction, we're excited about our future growth and impact.
        </h1>
        <div className="w-full flex gap-5 border-t-[1px] pt-10 mt-10 border-[#eee]">
            <div className='w-1/2'>
                <h1 className='text-5xl'>Our Approach</h1>
                <button className='flex capitalize gap-10 items-center px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white'>Know More
                    <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
                </button>
            </div>
            <div className='w-1/2 h-[70vh] rounded-3xl bg-[#eee]'></div>
        </div>
    </div>
  )
}

export default About;