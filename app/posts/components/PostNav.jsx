import React from 'react'
import Image from 'next/image'
import smallLogo from 'public/smallLogo.png';
import { FaPen, FaUser} from 'react-icons/fa';
import Link from 'next/link';
const PostNav = () => {
  return (
    <div className='flex justify-between px-20 py-2 bg-[#f9f9f9]'>
        <div className='flex'>
            <Link href='/'> <Image 
            className='py-1 '
            src={smallLogo}
            width={50}
            height={30}
            alt=''
            />
            </Link>
            <div className=''>
                <input type='text' placeholder={`Search`} className='bg-[#e6e6e6] ml-5 mt-3 px-4 py-1 rounded-full' ></input>
            </div>
        </div>
        <div className='flex justify-between gap-5 h-8 py-3'>
            <div className='cursor-pointer text-[#808080] hover:text-black'><FaPen className='inline h-8 mr-2 py-1' />Write</div>
            <div className='cursor-pointer h-8 bg-[#4dd2ff] text-white rounded-full  w-30 px-5 py-1 hover:bg-[#0099cc]'>Sign Up</div>
            <div className='cursor-pointer h-8 bg-[#f2f2f2] text-black rounded-full  w-30 px-4 py-1 hover:bg-[#e6e6e6]'>Sign In</div>
            <FaUser className='cursor-pointer inline h-8 py-1 text-[#808080] hover:text-black' />
        </div>
    </div>
  )
}

export default PostNav