import React, { Component } from "react";
import axios from "axios";

export default class PostForm extends Component {
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
      <form className="create-post" onSubmit={this.handleSubmit}>
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
