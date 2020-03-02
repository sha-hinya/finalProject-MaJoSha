import React, { Component } from "react";
import { Container, Paper, IconButton, Divider } from "@material-ui/core";

// icons
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";

import axios from "axios";

export default class postDetail extends Component {
  state = {
    post: null
  };

  componentDidMount() {
    const id = this.props.match.params.postId;
    //console.log("Mount", this.props);
    this.props.backButton.on();

    if (!!this.props.location.data) {
      this.setState({
        post: this.props.location.data
      });
    } else {
      axios.get(`/api/posts/${id}`).then(response => {
        this.setState({
          post: response.data
        });
      });
    }
  }

  handleUpvote = () => {
    const id = this.props.match.params.postId;
    axios.post(`/api/posts/${id}/upvote`).then(response => {
      this.setState({ post: response.data });
    });
  };
  render() {
    console.log("render");

    if (!this.state.post) {
      return "loading";
    }
    const post = this.state.post;
    //console.log(post);
    return (
      <Container className="post-detail">
        <Paper elevation={1} variant="outlined">
          <img src={post?.image} alt="postname" />
        </Paper>
        <div className="post-detail-action-icons">
          <IconButton aria-label="delete">
            <DeleteOutlineIcon fontSize="large" />
          </IconButton>
          <IconButton aria-label="delete">
            <EditIcon fontSize="large" />
          </IconButton>
        </div>
        <Divider />
        <div className="post-detail-title ">{post.title}</div>
        <div className="post-detail-content">{post.content}</div>
        <div className="post-detail-author">{post.author}</div>
      </Container>
    );
  }
}
