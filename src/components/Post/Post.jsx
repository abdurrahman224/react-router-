import React from 'react';

const Post = ({posts}) => {
    const {id ,title,body}=posts
    return (
        <div className=' border-1 border-fuchsia-500 rounded-lg p-4 mb-4 text-center'> 
        <h2>Id : {id}</h2>
            <p>title : {title}</p>
            <p>body : {body}</p>
        </div>
    );
};

export default Post;