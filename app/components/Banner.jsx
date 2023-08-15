import React from 'react';
import Image from 'next/image';
import banner from 'public/banner.png';
const Banner = () => {
    return (
        <div className='lg:flex justify-between w-full bg-[#deae12] py-20 border-b-2 border-solid border-black'>
            <div className='px-10'>
                <h1 className='lg:text-9xl text-6xl mt-20 mb-10 font-serif'>Stay curious.</h1>
                <h3 className='text-1xl'>Discover stories, thinking, and expertise from writers on any topic.</h3>
                <div className='flex justify-center font-bold mt-10 py-2 bg-black hover:bg-[#808080] text-white w-40 h-10 rounded-full'>
                    <a href='#Posts'>Start Reading</a>
                </div>
            </div>
            <div className='flex justify-end'>
                <Image 
                src={banner}
                width={500} 
                height={500}
                alt=''
                />
            </div>
        </div>
    )
}

export default Banner