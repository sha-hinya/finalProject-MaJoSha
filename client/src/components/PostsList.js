import React from "react";
import { Link } from "react-router-dom";

const PostsList = props => {
  return props.posts.map(post => {
    return (
      <p key={post._id}>
        {new Date(post.created_at).toDateString()}
        
          <Link to={`/posts/${post._id}`}> {post.title} </Link>
        
      </p>
    );
  });
};

export default PostsList;
