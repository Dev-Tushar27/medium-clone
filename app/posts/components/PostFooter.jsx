import Image from 'next/image';
import React from 'react'

const PageFooter = ({post}) => {
  return (
    <div className='w-full bg-[#f9f9f9]'>
        <div className='py-10 lg:mt-20 lg:mx-[24rem] lg:w-[50rem] sm:mt-10 sm:px-10'>
            <Image
                className='rounded-full'
                src={post.authorImg}
                width={90}
                height={90}
                alt=''
            />
            <div className='mt-4 flex justify-between'>
              <div className='text-2xl py-1'>Written by {post.author}</div>
            </div>
        </div>
    </div>
  )
}

export default PageFooter;
