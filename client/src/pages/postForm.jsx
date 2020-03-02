import React, { Component } from "react";
import axios from "axios";
import { Container, Paper } from "@material-ui/core";
import CropFreeIcon from "@material-ui/icons/CropFree";

export default class PostForm extends Component {
  state = {
    title: "",
    content: ""
  };
  componentDidMount() {
    this.props.backButton.on();
    this.props.setPageTitle("New Message");
  }

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

        content: this.state.content
      })
      .then(() => {
        console.log("Response received, calling getData in <Posts/>");

        this.setState({
          title: "",
          content: "",
          type: "text"
        });
      });
  };

  render() {
    return (
      <Container className="post-new">
        <form className="create-post" onSubmit={this.handleSubmit}>
          <Paper elevation={1} variant="outlined">
            <CropFreeIcon />
          </Paper>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <p> </p>
          <label htmlFor="content">Content</label>
          <input
            id="content"
            name="content"
            value={this.state.content}
            onChange={this.handleChange}
          />
          <p> </p>

          <button>Create new Post</button>
        </form>
      </Container>
    );
  }
}
