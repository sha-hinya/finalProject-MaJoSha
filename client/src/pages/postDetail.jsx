import React, { Component } from "react";
import {
  Container,
  Paper,
  IconButton,
  Divider,
  Card,
  CardContent,
  CardActionArea
} from "@material-ui/core";

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
    this.props.setPageTitle("Ticket");

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

  deletePost = () => {
    console.log(`/api/posts/${this.state.post._id}`);
    axios
      .delete(`/api/posts/${this.state.post._id}`)
      .then(res => this.props.history.push("/"))
      .catch(err => console.log(err));
  };

  editPost = () => {
    this.props.history.push(`/posts/${this.state.post._id}/edit`);
  };

  handleUpvote = () => {
    const id = this.props.match.params.postId;
    axios.post(`/api/posts/${id}/upvote`).then(response => {
      this.setState({ post: response.data });
    });
  };
  render() {
    console.log("props.user", this.props.user);

    if (!this.state.post) {
      return "loAding";
    }
    const post = this.state.post;
    //console.log(post);
    return (
      <Container className="post-detail">
        <Paper elevation={1} variant="outlined" className="post-image-wrapper">
          <img src={post?.image} alt="ticket" />
        </Paper>
        {this.props.user._id === this.state.post.author._id ||
        this.props.user.accessRole === "moderator" ||
        this.props.user.accessRole === "admin" ? (
          <CardActionArea>
            {/* <div className="post-detail-action-icons"> */}
            <IconButton aria-label="delete" onClick={this.deletePost}>
              <DeleteOutlineIcon fontSize="default" />
            </IconButton>
            <IconButton aria-label="edit" onClick={this.editPost}>
              <EditIcon fontSize="default" />
            </IconButton>
          </CardActionArea>
        ) : (
          ""
        )}

        {/*  <Divider /> */}
        <Card>
          <CardContent>
            <div className="post-detail-title ">{post.title}</div>
            <div className="post-detail-author">
              Author: {`${post.author.lastName}, ${post.author.firstName}`},
            </div>{" "}
            <div className="post-detail-status">
              {`Status : [${post.status}]`}
            </div>
            <Divider />
            <p
              style={{
                textAlign: "left",
                color: "lightgray",
                fontStyle: "italic",
                fontSize: "0.8rem"
              }}
            >
              Message:
            </p>
            <div className="post-detail-content">{post.content}</div>
          </CardContent>
        </Card>
      </Container>
    );
  }
}
