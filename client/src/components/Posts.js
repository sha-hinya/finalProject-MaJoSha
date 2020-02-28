import React, { Component } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';

// components
//import PostForm from './PostForm';
import { CardContent } from '@material-ui/core';

// icons
//import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import SyncSharpIcon from '@material-ui/icons/SyncSharp';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DoneIcon from '@material-ui/icons/Done';
//import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import RadioButtonUncheckedOutlinedIcon from '@material-ui/icons/RadioButtonUncheckedOutlined';

export const PostListItem = (props) => {
  const post = props.data;
  console.log(post);

  const getStatusIcon = () => {
    switch (post.status) {
      case 'open':
        return <RadioButtonUncheckedOutlinedIcon fontSize='small' />;
      case 'accepted':
        return 'accepted';
      case 'in progress':
        return <SyncSharpIcon fontSize='small' />;
      case 'done':
        return <DoneIcon fontSize='small' />;
      default:
        return 'nix';
    }
  };

  const getPassedHoursFromTimestamp = (timestamp) => {
    const createdDate = new Date(timestamp);
    const now = new Date();
    let diff = Math.abs(now - createdDate) / 1000;
    const days = Math.floor(diff / 86400);
    diff -= days * 86400;
    const hours = Math.floor(diff / 3600);
    diff -= hours * 3600;
    const minutes = Math.floor(diff / 60);
    diff -= minutes * 60;

    if (days > 1) {
      return `${days}d`;
    } else {
      return `${hours}h ${minutes}m`;
    }
  };

  return (
    <Link to={`/posts/${post._id}`}>
      <Card key={post._id}>
        <img src={post.image}  alt="ticket" />
        <div className='bg-overlay' />
        <CardContent>
          <div className='post-title'>{post.title}</div>

          <div className='post-status'>
            <div className='post-status-icon'> {getStatusIcon()}</div>
            <div className='post-status-time'>
              {getPassedHoursFromTimestamp(post.created_at)}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );

  /*   _id: '5e57c8d606d52e930cfd8e2e';
  image: 'https://images.unsplash.com/photo-1576096876569-0cffb1b1268d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60';
  dueDate: null;
  content: "There's again a new graffitti on the wall";
  title: 'graffitti on front wall';
  status: 'open';
  archived: false;
  private: false;
  voteCount: 0;
  created_at: '2020-02-27T13:49:10.775Z';
  updated_at: '2020-02-27T13:49:10.775Z';
  __v: 0; */
};

export default class Posts extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    // console.log("getData()");
    axios.get('/api/posts').then((response) => {
      this.setState({
        posts: response.data,
      });
    });
  };

  getNewestPosts = () => {
    axios.get('/api/posts?sortBy=created_at').then((response) => {
      this.setState({
        posts: response.data,
      });
    });
  };

  render() {
    const posts = this.state.posts;
    return (
      <div className='posts-wrapper'>
        <p>Mitteilungen</p>
        <Link to='/posts/new'>
          <Card id='new-post'>
            <CardContent>
              <AddCircleIcon style={{ fontSize: '5rem' }} />
            </CardContent>
          </Card>
        </Link>

        {posts.map((post) => {
          return <PostListItem key={post._id} data={post} />;
        })}
      </div>
    );
  }
}
