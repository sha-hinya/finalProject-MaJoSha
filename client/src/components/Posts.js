import React, { Component } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';

// components
import PostForm from './PostForm';
import { CardContent } from '@material-ui/core';

// icons
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CachedIcon from '@material-ui/icons/Cached';
import SyncSharpIcon from '@material-ui/icons/SyncSharp';

const useStyles = makeStyles({
  postsContainer: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: 275,
    backgroundColor: 'darkgray',
    margin: '1rem 0',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export const PostListItem = (props) => {
  const classes = useStyles();
  const post = props.data;
  console.log(post);

  const getStatusIcon = () => {
    console.log('getStatus', post.status);

    switch (post.status) {
      case 'open':
        return <CheckCircleOutlineIcon />;
      case 'accepted':
        return 'accepted';
      default:
        return 'nix';
    }
  };

  return (
    <Link to={`/posts/${post._id}`}>
      <Card className={classes.postsContainer} key={post._id}>
        <CardContent>
          {new Date(post.created_at).toDateString()}
          {post.title}
          {getStatusIcon()}
          <image src={post.image} />
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

  classes = () => {
    return useStyles();
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
        <Card className='new-post'>
          <CardContent>
            <Link to='/posts/new'> new post </Link>
          </CardContent>
        </Card>

        {posts.map((post) => {
          return <PostListItem key={post._id} data={post} />;
        })}
      </div>
    );
  }
}
