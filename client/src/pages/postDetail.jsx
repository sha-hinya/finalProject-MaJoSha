import React, { Component } from 'react';
import { Container, Paper, IconButton } from '@material-ui/core';

// icons
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';

import axios from 'axios';

export default class postDetail extends Component {
  state = {
    post: null,
  };

  componentDidMount() {
    const id = this.props.match.params.postId;
    console.log('Mount');

    if (!!this.props.location.data) {
      console.log('Data already loaded');
      console.log(this.props.location.data);
      this.setState({
        post: this.props.location.data,
      });
      console.log(this.state);
    } else {
      axios.get(`/api/posts/${id}`).then((response) => {
        this.setState({
          post: response.data,
        });
      });
    }
  }

  handleUpvote = () => {
    const id = this.props.match.params.postId;
    axios.post(`/api/posts/${id}/upvote`).then((response) => {
      this.setState({ post: response.data });
    });
  };
  render() {
    console.log('render');

    if (!this.state.post) {
      return 'loading';
    }
    const post = this.state.post;
    return (
      <Container className='post-detail'>
        <Paper elevation={1} variant='outlined'>
          <img src={post?.image} />
        </Paper>
        <div className='post-detail-action-icons'>
          <IconButton aria-label='delete'>
            <DeleteOutlineIcon fontSize='large' />
          </IconButton>
          <IconButton aria-label='delete'>
            <EditIcon fontSize='large' />
          </IconButton>
        </div>
        <div className='post-detail-title'>{post?.tilte}</div>
      </Container>
    );
  }
}
