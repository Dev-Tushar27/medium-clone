import React from 'react'
import { collection, serverTimestamp, addDoc} from 'firebase/firestore';
import {db} from '../../firebaseConfig';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Modal from 'react-modal';
const PostModal = (props) => {
    const [body, setBody] = useState('');
    const [brief, setBrief] = useState('');
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [bannerImg, setBanner] = useState('');
    const [readTime, setTime] = useState('');
    const addPost = async (e)=>{
        e.preventDefault();
        await addDoc(collection(db,'articles'),{
            email: props.email,
            bannerImg: bannerImg,
            body: body,
            category: category,
            brief: brief,
            postedOn: serverTimestamp(),
            postLen: Number(readTime),
            title: title,
            author: props.author,
            authorImg: props.authorImg,
        }) ;
        props.onRequestClose();
    }   
  return (
    <Modal isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}>
        <div className='flex justify-center p-8'>
            <div className='w-2/3 h-2/3 flex flex-col items-center gap-[1rem]'>
                <div className='font-bold text-4xl'>Add a post</div>
                <div  className='w-full'>
                    <div className='flex flex-row justify-start gap-2'>
                        <Image src={props.authorImg} className='w-10 rounded-full' width={50} height={100}alt='author img'/> 
                        <div className='py-2 font-semibold'>{props.author}</div>
                    </div>
                </div>

                <Input  type='text' placeholder='Title' value={title} onChange={(e)=>{setTitle(e.target.value)}}/>

                <Input type='text' placeholder='Brief' value={brief} onChange={(e)=>{setBrief(e.target.value)}}/>
                
                <Input type='text' placeholder='img URL' value={bannerImg} onChange={(e)=>{setBanner(e.target.value)}}/>
                
                <Textarea  type='text' placeholder='Body' value={body} onChange={(e)=>{setBody(e.target.value)}}/>

                <Input type='text' placeholder='Category' value={category} onChange={(e)=>{setCategory(e.target.value)}}/>
                
                <Input type='text' placeholder='Read Time' value={readTime} onChange={(e)=>{setTime(e.target.value)}}/>
                
                <Button className='bg-black text-white hover:bg-white hover:text-black hover:border-2 hover:border-black font-semibold rounded-full' onClick={(e)=>addPost(e)}>Submit</Button>
            </div>
        </div>
    </Modal>
  )
}

export default PostModal