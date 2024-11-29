import { StaticImageData } from 'next/image';
import React from 'react';
import Image  from 'next/image';

interface Testimonials {

    image: StaticImageData
    name: string 
    occupation: string
    description: string
}

const Testimonials = (props: Testimonials) => {
  return (
    <div className='flex flex-col space-y-4'>
      <div className='flex space-x-3 items-center'>
        <Image src={props.image} alt='TestimonyImage' className=' w-[15%] lg:w-[10%]'/>
        <div className='flex flex-col'>
            <p className='text-black font-bold'>{props.name}</p>
            <p className='text-white text-sm'>{props.occupation}</p>
        </div>
      </div>
      <p className='text-white text-xs lg:text-[16px] lg:leading-relaxed lg:tracking-wide'>{props.description}</p>
    </div>
  )
}

export default Testimonials
