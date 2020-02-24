import React from "react";
import { Link } from "react-router-dom";

const PostsList = props => {
  return props.posts.map(post => {
    return (
      <p key={post._id}>
        [{post.type}]
        <b>
          <Link to={`/posts/${post._id}`}> {post.title} </Link>
        </b>
        <span role="img" aria-label="upvote emoji">
          ⏫{post.upvote_count}
        </span>
      </p>
    );
  });
};

export default PostsList;
