import React, { useEffect } from 'react'
import Card from './Card'
import { useState } from 'react'
import { collection, getDocs} from 'firebase/firestore';
import { db } from '../../firebaseConfig.js';
const PostsList = () => {
    const [posts, setPosts] = useState([]);
    const getPosts = async ()=>{
        const colRef = collection(db, 'articles');
        const snapshots =  await getDocs(colRef);
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
    },[posts])
    return (
        <div className=''>
        {
            posts.map((post) =>{
                return(
                    <div key={post.id}>
                    <Card 
                        id={String(post.id)}
                        post={post.data}
                    />
                    </div>
                )
            })
        }
        </div>
        
    )
}

export default PostsList