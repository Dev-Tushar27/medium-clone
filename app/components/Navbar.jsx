"use client"
import React from 'react'
import Image from 'next/image';
import { FaPen, FaRegUser } from 'react-icons/fa';
import { IoMdExit } from "react-icons/io";
import { useState } from 'react';
import Modal from 'react-modal';
import PostModal from './PostModal.jsx';
import { useRouter } from 'next/navigation';
import { useAuth } from 'app/context/auth/index.jsx';

const Navbar = () => {
    const {user, logOutUser} = useAuth();
    
    const styles = {
        link:'cursor-pointer',
        getStarted: 'cursor-pointer bg-[#000] hover:bg-[#808080] text-white  px-4 py-1 h-9 rounded-full'
    }
    const [isOpen, setModalOpen] =  useState(false);
    const [openMenu, setOpenMenu] =  useState(false);
    const openModal = ()=>setModalOpen(true);
    const closeModal = ()=>setModalOpen(false);
    const router = useRouter();
    return (
        <div className='px-10 font-sans flex justify-between w-full items-center bg-white border-b-2 border-solid border-black'>
            <div className='cursor-pointer hover:opacity-70 transition-all'>
                <h1 className='text-3xl font-extrabold'>Blogs</h1>
            </div>
                {user ?(
                    <div className='flex justify-between items-center font-semibold gap-10 py-6'>
                        <div onClick={openModal} className='cursor-pointer bg-[#000] text-white px-4 py-1 h-9 rounded-full hover:bg-[#808080]'>
                            <FaPen className='inline h-8 mr-2 py-1' />Write
                        </div>

                        <div onClick={()=>{setOpenMenu(!openMenu)}}>
                            <Image className="rounded-full" src={user.photoURL} width={50} height={100} alt='avatar' />
                        </div>
                        {openMenu && (
                            <div className='absolute bg-slate-100 flex flex-col top-[10%] rounded-[10px] right-4 items-start w-[13rem] border-slate-300 border-2'>
                                <div className="cursor-pointer hover:bg-white w-full px-4 py-2" >
                                    <div className='flex gap-4' onClick={()=>{
                                    logOutUser();
                                    router.refresh();
                                }}>
                                        <IoMdExit className='inline h-8 mr-2 py-1' />LogOut
                                    </div>
                                </div>

                        
                                <div className="cursor-pointer hover:bg-white w-full px-4 py-2" onClick={()=>router.push('/user-info')}>
                                    <div className='flex gap-4'>
                                        <FaRegUser className='inline h-8 mr-2 py-1' /><h3>Account Info</h3>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ):(
                    
                    <div className='flex justify-between font-semibold gap-10 py-6'>
                        <div className={styles.getStarted} onClick={()=>{router.push('/signup')}}>Sign In</div>
                    </div>
                    )
                }
            {user? (
                <PostModal isOpen={isOpen} onRequestClose={closeModal} email={user.email} author={user.displayName} authorImg={user.photoURL}/>
            ):(
                <Modal
                isOpen={isOpen}     
                onRequestClose={closeModal}
            >
                Sign In first
            </Modal>
            )}
        </div>
    )
}

export default Navbar