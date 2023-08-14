import React from 'react'
import {FaThumbsUp, FaComment,FaBookmark, FaShare} from 'react-icons/fa';

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
            <div className='ml-4 py-2'>{post.author} • <span className='text-[#4dd2ff] hover:text-[#3696b6]'>Follow</span> </div>
        </div>

        <div className='flex justify-between my-4 border-t-[0.25px] border-b-[0.25px] border-[#e6e6e6]'>
            <div className='flex my-2 gap-10 py-1'>
                <div><FaThumbsUp className='inline-block mr-3 text-[#808080] hover:text-black'/>2440</div>
                <div><FaComment className='inline-block mr-3 text-[#808080] hover:text-black'/> 50</div>
            </div>
            <div className='flex my-2 gap-10 py-1'>
                <div><FaBookmark className='inline-block mr-3 text-[#808080] hover:text-black'/></div>
                <div><FaShare className='inline-block mr-3 text-[#808080] hover:text-black'/></div>
            </div>
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
        
        <div className='flex justify-between my-4'>
            <div className='flex  gap-10 py-1'>
                <div><FaThumbsUp className='inline-block mr-3 text-[#808080] hover:text-black'/>2440</div>
                <div><FaComment className='inline-block mr-3 text-[#808080] hover:text-black'/> 50</div>
            </div>
            <div className='flex my-2 gap-10 py-1'>
                <div><FaBookmark className='inline-block mr-3 text-[#808080] hover:text-black'/></div>
                <div><FaShare className='inline-block mr-3 text-[#808080] hover:text-black'/></div>
            </div>
        </div>
    </div>
  )
}

export default PostInfo