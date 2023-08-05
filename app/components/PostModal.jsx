import React from 'react'
import { setDoc, doc, collection, serverTimestamp, addDoc} from 'firebase/firestore';
import {db,} from '../../firebase.js';
import { useState } from 'react';
const PostModal = () => {
    const [body, setBody] = useState('');
    const [brief, setBrief] = useState('');
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [bannerImg, setBanner] = useState('');
    const [readTime, setTime] = useState('');
    const addPost = async (e)=>{
        e.preventDefault();
        await  addDoc(collection(db,'articles'),{
            bannerImg: bannerImg,
            body: body,
            category: category,
            brief: brief,
            postedOn: serverTimestamp(),
            postLen: Number(readTime),
            title: title,
            author: '',
            authorImg: 'props.authorImg',
        }) 
    }   
  return (
    <div className='w-full h-[50rem] flex flex-col items-center  gap-[1rem] py-[1rem] font-medium font-serif'>
        <div className='my-[2rem] font-bold text-4xl'>Add a post</div>
        <div  className='w-[90rem] border-2 border-black'>
            <input  className=' px-5 w-full' type='text' placeholder='Title' value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
        </div>
        <div  className='w-[90rem] border-2 border-black'>
            <input  className=' px-5 w-full' type='text' placeholder='Brief' value={brief} onChange={(e)=>{setBrief(e.target.value)}}/>
        </div>
        <div  className='w-[90rem] border-2 border-black'>
            <input  className=' px-5 w-full' type='text' placeholder='BannerImg URL' value={bannerImg} onChange={(e)=>{setBanner(e.target.value)}}/>
        </div>
        <div  className='w-[90rem] border-2 border-black'>
            <textarea  className='px-5 w-full' type='text' rows={10} placeholder='Body' value={body} onChange={(e)=>{setBody(e.target.value)}}/>
        </div>
        <div  className='w-[90rem] border-2 border-black'>
            <input  className=' px-5 w-full' type='text' placeholder='Category' value={category} onChange={(e)=>{setCategory(e.target.value)}}/>
        </div>
        <div  className='w-[90rem] border-2 border-black'>
            <input  className=' px-5 w-full' type='text' placeholder='Read Time' value={readTime} onChange={(e)=>{setTime(e.target.value)}}/>
        </div>
        <div className='flex justify-center'>
            <button className='px-4 py-1 bg-black text-white rounded-full' onClick={addPost}>Submit</button>
        </div>
    </div>
  )
}

export default PostModal