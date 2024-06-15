import React from 'react'
import {Image} from 'next/image'
const PostInfo = ({post}) => {
  return (
    <div className='lg:mt-20 lg:mx-[24rem] lg:w-[50rem] sm:mt-10 sm:px-10'>
        <div className='text-4xl font-extrabold text-left'>
            {post.title}
        </div> 
        <div className='block text-[1.25rem] text-[#808080] text-left'>
            {post.brief}
        </div>
        <div className='flex mt-10'>
            <img
                className='rounded-full'
                src={post.authorImg}
                width={40}
                height={40}
                alt=''
            />
            <div className='ml-4 py-2'>{post.author} </div>
        </div>

        <div className='mb-10'>
            <img
                className='w-full mb-10'
                src={post.bannerImg}
                alt=''
            />
            <div>
                {post.body}
            </div>
        </div>
        
        
    </div>
  )
}

export default PostInfo
