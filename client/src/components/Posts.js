import React, { Component } from "react";
import axios from "axios";
import PostForm from "./PostForm";
import PostsList from "./PostsList";

export default class Posts extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    // console.log("getData()");
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
    // console.log("<Posts/> RENDER");
    return (
      <div>
        {/* {this.props.user && <PostForm refresh={this.getData} />}*/}
        <PostsList posts={this.state.posts} /> 
       
      </div>
    );
  }
}
