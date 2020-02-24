import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const PostsList = props => {
  return props.posts.map(post => {
    return (
      <p key={post._id}>
        [{post.type}]
        <b>
          <Link to={`/posts/${post._id}`}>{post.title}</Link>
        </b>
        <span role="img"> ⏫ {post.upvote_count}</span>
      </p>
    );
  });
};

class PostForm extends React.Component {
  state = {
    title: "",
    content: "",
    type: "text"
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    console.log("Form submitted");

    axios
      .post("/api/posts", {
        title: this.state.title,
        type: this.state.type,
        content: this.state.content
      })
      .then(() => {
        console.log("Response received, calling getData in <Posts/>");
        this.props.refresh();
        this.setState({
          title: "",
          content: "",
          type: "text"
        });
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
        />

        <label htmlFor="content">Content</label>
        <input
          id="content"
          name="content"
          value={this.state.content}
          onChange={this.handleChange}
        />

        <label htmlFor="type">Type</label>
        <select
          value={this.state.type}
          name="type"
          onChange={this.handleChange}
        >
          <option value="link">Link</option>
          <option value="text">Text</option>
        </select>
        <button>New Post</button>
      </form>
    );
  }
}

export default class Posts extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    console.log("getData()");
    axios.get("/api/posts").then(response => {
      this.setState({
        posts: response.data
      });
    });
  };

  getNewestPosts = () => {
    axios.get("/api/posts?sortBy=created_at").then(response => {
      this.setState({
        posts: response.data
      });
    });
  };

  render() {
    console.log("<Posts/> RENDER");
    return (
      <div>
        <PostForm refresh={this.getData} />
        <PostsList posts={this.state.posts} />
        <button onClick={this.getNewestPosts}>sort by new</button>
      </div>
    );
  }
}
