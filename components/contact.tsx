import React from 'react'
import Title from './title'
import Link from 'next/link'
type Props = {}

const Contact = (props: Props) => {
  return (
    <div className='w-full overflow-hidden md:p-16 p-6 h-72 flex md:flex-row flex-col justify-evenly'>
         <div data-aos="fade-right" className='flex flex-col gap-4'>
            <Title title='Am I Free?' />
            <p className='text-white text-xl font-mono'>Yes, I am available to Work.</p>
         </div>
         <div className='flex gap-2 flex-col'>
            <div className='flex gap-2 text-white'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
</svg>
<h2 className='font-mono text-base'>ranahamza9099@gmail.com</h2>
            </div>
            <div className='flex gap-2 text-white'>
            <h2 className=' font-extrabold text-base w-6 h-6'>in</h2>
<Link href="https://michalsnik.github.io/aos/" className='font-mono text-base'>https://www.linkedin.com/in/rana-hamza-82301b179/</Link>
            </div>
       

         </div>
    </div>
  )
}

export default Contact