import React from 'react'
import logo from 'public/logo.png';
import Image from 'next/image';
import { setDoc, doc } from 'firebase/firestore';
import { FaPen } from 'react-icons/fa';
import {db, auth, provider, signIn} from '../../firebase.js';
import { signInWithPopup } from 'firebase/auth';
import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import PostModal from './PostModal.jsx';
import { withDefaults } from 'vue';


const customStyles ={
    content:{
        margin:'2%',
        transform:'transalte(-50%,-50%)',
        backgroundColor: "#fff",
        padding: 0,
        border: 'none',
        overflow: 'scroll',
        width: '90%'
    },
    overlay:{
        backgroundColor:'rgba(10,11,13,0.75)',
    }
}
const Navbar = () => {

    const styles = {
        link:'cursor-pointer',
        getStarted: 'cursor-pointer bg-[#000] hover:bg-[#808080] text-white  px-4 py-1 h-9 rounded-full'
    }
    const [currUser, setCurrUser] = useState();
    const [open, setOpen] =  useState(false)
    const addUser = async (user)=>{
        await setDoc(doc(db,'users',user.email),{
            email: user.email,
            name: user.displayName,
            imgUrl: user.photoURL,
            followerCount: 0
        })
    }
    useEffect(()=>{
        addUser
    },[currUser]);
    
    const handleClick = async()=>{
        const userData = await signInWithPopup(auth, provider);
        const user = userData.user
        console.log(user);
        setCurrUser(user);
        addUser(user);
    }
    console.log(currUser);
    return (
        <div className='px-10 font-sans flex justify-between w-full align-center bg-[#deae12] border-b-2 border-solid border-black'>
            <div className='cursor-pointer'>
                <Image src={logo} className='w-44 py-4' alt='' />
            </div>
                {currUser ?(
                    <div className='flex justify-between font-semibold gap-10 py-6'>
                        <div className={styles.link}>Our Store</div>
                        <div className={styles.link}>Membership</div>
                        <div className={styles.link} onClick={handleClick}>Sign In</div>
                        <div className={styles.getStarted}>Get Started</div>
                    </div>
                ):(
                    <div className='flex justify-between font-semibold gap-10 py-6'>
                        <div className={styles.link}>Our Store</div>
                        <div className={styles.link}>Membership</div>
                        <div onClick={()=>{setOpen(!open)}} className='cursor-pointer bg-[#000] text-white px-4 py-1 h-9 rounded-full hover:bg-[#808080]'>
                            <FaPen className='inline h-8 mr-2 py-1' />Write
                        </div>
                        <div className={styles.getStarted}>Get Started</div>
                
                    </div>
                    )
                }
            <Modal
                isOpen={open}
                onRequestClose={()=> setOpen(!open)}
                style={customStyles}
            >
                <PostModal />
            </Modal>
        </div>
    )
}

export default Navbar