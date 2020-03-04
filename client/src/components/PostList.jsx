import React, { Component } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";

// components
//import PostForm from './PostForm';
import { CardContent } from "@material-ui/core";

// icons
//import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import SyncSharpIcon from "@material-ui/icons/SyncSharp";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import DoneIcon from "@material-ui/icons/Done";
//import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import RadioButtonUncheckedOutlinedIcon from "@material-ui/icons/RadioButtonUncheckedOutlined";

export const PostListItem = props => {
  const post = props.data;

  const getStatusIcon = () => {
    switch (post.status) {
      case "open":
        return <RadioButtonUncheckedOutlinedIcon fontSize="small" />;
      case "accepted":
        return "accepted";
      case "in progress":
        return <SyncSharpIcon fontSize="small" />;
      case "done":
        return <DoneIcon fontSize="small" />;
      default:
        return "nix";
    }
  };

  const getPassedHoursFromTimestamp = timestamp => {
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
    } else if (hours > 1) {
      return `${hours}h`;
    } else {
      return `${minutes}m`;
    }
  };

  return (
    <Link to={{ pathname: `/posts/${post._id}`, data: post }}>
      <Card key={post._id}>
        <img src={post.image} alt="ticket" />
        <div className="bg-overlay" />
        <CardContent>
          <div className="post-title">{post.title}</div>
          <div className="post-status">
            <div className="post-status-icon"> {getStatusIcon()}</div>
            <div className="post-status-time">
              {getPassedHoursFromTimestamp(post.created_at)}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default class Posts extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    this.getData();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.selectedProperty !== this.props.selectedProperty) {
      this.getData();
    }
  }

  getData = () => {
    // console.log("getData()");

    axios
      .get(`/api/posts?property=${this.props.selectedProperty}`)
      .then(response => {
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
    const posts = this.state.posts;
    console.log("property: ",this.posts);
     
    return (
      <div className="posts-wrapper">
     
        <Link to="/new-post">
          <Card id="new-post">
            <CardContent>
              <AddCircleIcon style={{ fontSize: "5rem" }} />
            </CardContent>
          </Card>
        </Link>

        {posts.map(post => {
          return <PostListItem key={post._id} data={post} />;
        })}
      </div>
    );
  }
}
