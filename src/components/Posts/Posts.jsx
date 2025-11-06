import React from 'react';
import { useLoaderData } from 'react-router';
import Post from '../Post/Post';

const Posts = () => {
    const post = useLoaderData()
    // const {title,body,id}= posts
    return (
        <div>
           <div className='grid grid-cols-3 gap-6 mx-16'>
              {post.map((posts)=><Post key={posts.id} posts={posts}></Post>)}
           </div>
            
            
            
          
        </div>
    );
};

export default Posts;