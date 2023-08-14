import React from "react";
import blogPosts from "/public/data/blogData.json";

const Post = ({ params }) => {
    console.log("array", params.id);

    const foundPost = blogPosts.find((post) => post.id == params.id);
    console.log("clicked post : ", foundPost);

    return (
        <div>
            <div className="card w-auto bg-base-100">
                <div className="card-body">
                    <h2 className="card-title link-success">{foundPost.title}</h2>
                    <p>{foundPost.content}</p>
                    <span>{foundPost.date}</span>
                </div>
            </div>
        </div>
    );
};

export default Post;
