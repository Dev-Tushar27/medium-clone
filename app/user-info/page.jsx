"use client"
import { Button } from '@/components/ui/button';
import { useAuth } from 'app/context/auth'
import Image from 'next/image';
import React, {useState, useEffect} from 'react'
import {db} from '../../firebaseConfig'
import { collection, where, getDocs, query, deleteDoc, doc } from "firebase/firestore"; 
import Card from '../components/Card'
import { MdDelete } from "react-icons/md";
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
const page = () => {
    const {user, logOutUser} = useAuth();
    const router = useRouter();
    if(user == null){
        return(
            <div>
                <Link href={'/signup'}>Sign in first</Link>
            </div>
        )
    }

    const [posts, setPosts] = useState([]);
    const getPosts = async ()=>{
        const colRef = collection(db, 'articles');
        const q = query(colRef, where('email', '==', user.email))
        const snapshots =  await getDocs(q);
        const docs = snapshots.docs.map(doc =>{
            return{
                id: doc.id,    
                data: doc.data()
            };
        })
        setPosts(docs);
    }
    useEffect(()=>{
        getPosts();
    },[posts]);

    const deletePost = async(id,e)=>{
        e.stopPropagation();
        try {
            const docRef = doc(db, 'articles', id);
            await deleteDoc(docRef);
            toast.success("Post deleted successfully");
        } catch (error) {
            toast.error("Something went wrong");
            console.log(error);
        }
    }

    const handleLogOutUser = ()=>{
        logOutUser();
        router.push('/');
    }
    return (
    <div className='flex justify-center h-full w-full'>
        <div className='w-2/3 flex-col justy-center py-4 gap-8'>
            <div className='flex justify-center my-6'>
                <Image className="rounded-full" src={user.photoURL} width={200} height={500} alt="profile"/>
            </div>
            <div className='text-center'>
                <h1 className='text-3xl font-bold'>
                    {user.displayName}
                </h1>
            </div>
            <div className='flex flex-col gap-2 mt-6'>
                <div className='flex justify-start'>
                    <h2 className='text-1xl font-semibold'> USER INFO</h2>
                </div>
                <div className='grid grid-cols-1 '>
                    <div className='grid grid-cols-3 border-2 border-slate-800 rounded-t-[10px] px-3'>
                        <h5 className='col-span-1'>Email: </h5>
                        <div className='col-span-2 border-l-2 border-l-slate-800 px-1'>
                            {user.email}
                        </div>
                    </div>
                    <div className='grid grid-cols-3 border-2 border-slate-800 px-3'>
                        <h5 className='col-span-1'>UserName: </h5>
                        <div className='col-span-2 border-l-2 border-l-slate-800 px-1'>
                            {user.displayName}
                        </div>
                    </div>
                </div>
                <div className='px-6'>
                    <h5 className='col-span-1 mb-4 font-bold'>Posts: </h5>
                    <div className='grid grid-cols-3'>
                        {
                            posts.map((post) =>{
                                return(
                                    <>
                                    <div className='col-span-2'>
                                    <Card 
                                        key={post.id} 
                                        id={String(post.id)}
                                        post={post.data}
                                    />
                                    </div>
                                    <div className='col-span-1 h-full'>
                                        <div onClick={(e)=>deletePost(post.id,e)} className='flex justify-end items-center hover:opacity-60 cursor-pointer'>   
                                            <MdDelete size={40} />
                                        </div>
                                    </div>
                                    </>
                                )
                            })
                        }
                                
                    </div>
                </div>
                <div className='flex justify-center' onClick={()=>handleLogOutUser()}>
                    <Button className="text-white bg-red-500 rounded-[10px] font-semibold hover:bg-white hover:border-red-500 hover:border-2 hover:text-black">Log out</Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page
