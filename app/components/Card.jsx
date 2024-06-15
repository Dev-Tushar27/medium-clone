import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
const Card = (props) => {
  const post = props.post;
  
  return (
    <Link href={`/posts/${props.id}`}>
    <div className='flex justify-start items-center mt-10 mb-10 h-1/4 '>
      <div className='w-2/3'>
        <div>
          <div className='flex items-center gap-2 text-1xl'>
            <img src={post.authorImg} width={20}  className='inline-block rounded-full' alt=''/>{post.author}
          </div>
          <div className='pt-4 pb-2'>
            <h2 className='text-2xl font-bold'>
              {post.title}
            </h2>
          </div>
          <div className='font-light text-sm text-[#808080]'>
            {post.brief}
          </div>

        </div>

        <div className='flex justify-between text-sm text-[#808080] mt-2'>
          <div className='flex justify-between '>{post.postLen} min read • {post.category} </div>
          
        </div>
      </div>
      <div className='w-[25%]'>
        <Image src={post.bannerImg} width={500} height={500} alt=''/>
      </div>
    </div>

    <hr />
    </Link>
  )
}

export default Card