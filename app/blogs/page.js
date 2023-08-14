import React from 'react';
// import blogPosts from '/public/data/blogData.json';
import getBlogPosts from '../api/getBlogPosts';
import Link from 'next/link';

const Blogs = async () => {
    // no need to use the useEffect() hook because this is a server component.
    const blogPosts = await getBlogPosts();
    console.log("all the blog post are : ", blogPosts);

    return (
        <div className='mx-12'>
            <div className='grid grid-cols-3 gap-2'>
                {blogPosts.map(post => {
                    return (
                        <div key={post.id} className="card w-auto bg-base-100 shadow-xl">
                            <div className="card-body">
                                <Link href={`../post/${post.id}`}><h2 className="card-title hover:link link-success">{post.title}</h2></Link>
                                <p>{post.content}...</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Blogs;