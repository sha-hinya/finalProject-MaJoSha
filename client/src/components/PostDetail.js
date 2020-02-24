import React, { Component } from "react";
import axios from "axios";

export default class PostDetail extends Component {
  state = {
    post: null
  };

  componentDidMount() {
    const id = this.props.match.params.postId;

    axios.get(`/api/posts/${id}`).then(response => {
      this.setState({
        post: response.data
      });
    });
  }

  handleUpvote = () => {
    const id = this.props.match.params.postId;

    axios.post(`/api/posts/${id}/upvote`).then(response => {
      this.setState({ post: response.data });
    });
  };

  render() {
    const post = this.state.post;

    if (!post) {
      return <div>Loading</div>;
    }
    return (
      <div>
        <h2>
          [{post.type}] {post.title}
        </h2>
        {post.type === "link" ? (
          <a href={post.content}>{post.content}</a>
        ) : (
          <p>{post.content}</p>
        )}
        <p>posted on {new Date(post.created_at).toDateString()}</p>
        <p>Upvoted {post.upvote_count} times</p>
        <button onClick={this.handleUpvote}>upvote</button>
      </div>
    );
  }
}
