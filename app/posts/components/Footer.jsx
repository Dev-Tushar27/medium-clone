import React from 'react'
import {FaEnvelope} from 'react-icons/fa';
const Footer = ({post}) => {
  return (
    <div className='w-full bg-[#f9f9f9]'>
        <div className='py-10 lg:mt-20 lg:mx-[24rem] lg:w-[50rem] sm:mt-10 sm:px-10'>
            <img
                className='rounded-full'
                src={post.authorImg}
                width={90}
                height={90}
                alt=''
            />
            <div className='mt-4 flex justify-between'>
              <div className='text-2xl py-1'>Written by {post.author}</div>
              <div className='flex gap-6'>
                <div className='bg-[#0099cc] hover:bg-[#17647d] text-white px-4 rounded-full py-2 text-1xl font-sans'>Follow</div>
                <div className='bg-[#0099cc] hover:bg-[#17647d] px-3 rounded-full py-3'><FaEnvelope className='text-white' /></div>
              </div>
            </div>

            <div className='mt-4 text-[#808080] '>
              Qui voluptate excepteur duis sit.Occaecat ullamco pariatur labore sit proident veniam est incididunt magna aliqua velit.
            </div>
        </div>
    </div>
  )
}

export default Footer