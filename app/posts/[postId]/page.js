"use client"
import PostNav from '../components/PostNav';
import PostInfo from '../components/PostInfo';
import Footer from '../components/Footer.jsx';
import { collection, getDocs} from 'firebase/firestore';
import { db } from '@/firebase';
import { useState, useEffect } from 'react';
const pages = ({params: {postId}}) => {
  const [post, setPost] = useState({});
  const findPost = async()=>{
    const colRef = collection(db,'articles');
    const snapshots = await getDocs(colRef);
    const doc = snapshots.docs.forEach(ele =>{
      if(ele.id === postId){
        setPost(ele.data());
      }
    })
  };
  
  useEffect(()=>{
    findPost();
  },[])

  console.log(post);
  return (
    <div>
      <PostNav />
      <PostInfo post={post}/>
      <Footer post={post}/>
    </div>
  )
}

export default pages