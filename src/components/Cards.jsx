import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-zinc-100 flex items-center px-20 gap-5'>
        <div className='cardcontainer w-1/2 h-[50vh]'>
            <div className='card relative rounded-xl w-full h-full bg-yellow-400 text-zinc-50 flex items-center justify-center text-6xl'>Prentz
                <button className='absolute px-5 py-1 rounded-full border-2 left-5 bottom-5 text-lg'>&copy:2024</button>
            </div>
        </div>
        <div className='cardcontainer flex gap-5 w-1/2 h-[50vh]'>
            <div className='card relative rounded-xl w-1/2 h-full bg-zinc-800 text-zinc-50 flex items-center justify-center text-4xl'>Prez
                <button className='absolute px-5 py-1 rounded-full border-2 left-5 bottom-5 text-sm'>&copy:2024</button>
            </div>
            <div className='card relative rounded-xl w-1/2 h-full bg-zinc-800 text-zinc-50 flex items-center justify-center text-4xl'>Prez
                <button className='absolute px-5 py-1 rounded-full border-2 left-5 bottom-5 text-sm'>&copy:2024</button>
            </div>
        </div>
    </div>
  )
}

export default Cards