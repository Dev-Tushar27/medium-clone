import React from 'react'
import Link from 'next/link';
import {FaBookmark} from 'react-icons/fa'
const Card = (props) => {
  const post = props.post
  return (
    <Link href={`/posts/${props.id}`}>
    <div className='flex justify-between mt-10 sm:w-full sm:px-4 lg:w-1/2 lg:mt-20 lg:ml-28 mb-10  max-w-1/2 h-1/4'>
      <div>
        <div className='text-1xl'>
          <img src={post.authorImg} width={20}  className='inline-block mx-2 rounded-full' alt=''/>{post.author}
        </div>
        <div className='pt-4 pb-2'>
          <h2 className='text-2xl font-bold'>
            {post.title}
          </h2>
        </div>
        <div className='font-light text-sm text-[#808080]'>
          {post.brief}
        </div>

        <div className='flex justify-between text-sm text-[#808080] mt-2'>{post.postLen} min read • {post.category} 
          <FaBookmark className='inline'/>
        </div>
      </div>
      <div className='px-2 h-full'>
        <img src={post.bannerImg} width={800}className='py-10' alt=''/>
      </div>
    </div>
    </Link>
  )
}

export default Card