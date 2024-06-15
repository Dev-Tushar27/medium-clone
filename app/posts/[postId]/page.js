"use client"
import { collection, getDocs} from 'firebase/firestore';
import { db } from '../../../firebaseConfig';
import PostInfo from '../components/PostInfo';
import { useState, useEffect } from 'react';
import PostFooter from '../components/PostFooter';
const Post = ({params: {postId}}) => {
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

  return (
    <div>
      <PostInfo post = {post}/>
      <PostFooter post = {post} />
    </div>
  )
}

export default Post