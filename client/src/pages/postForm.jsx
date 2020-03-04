import React, { Component } from "react";
import axios from "axios";
import {
  Container,
  Paper,
  IconButton,
  FormControlLabel,
  Switch
} from "@material-ui/core";
import { CropFree, DeleteOutline } from "@material-ui/icons";

export default class PostForm extends Component {
  state = {
    title: null,
    content: "",
    image: "",
    photo: null,
    private: true
  };

  componentDidMount() {
    this.props.backButton.on();
    if (this.props.edit) {
      this.props.setPageTitle("Edit Message");
      const id = this.props.match.params.postId;
      axios.get(`/api/posts/${id}`).then(response => {
        //console.log(("response": response.data));

        this.setState({
          ...response.data,
          photo_url: response.data.image
        });
      });
    } else {
      this.props.setPageTitle("New Message");
    }
  }

  handleFileChange = event => {
    event.preventDefault();
    console.log(event.target.files[0]);
    this.setState({
      photo: URL.createObjectURL(event.target.files[0])
    });
  };

  handleSwitch = event => {
    this.setState({
      [event.target.name]: event.target.checked
    });
  };
  handleDelete = event => {
    this.setState({ photo: null, photo_url: null });
  };

  handleSubmit = event => {
    event.preventDefault();

    let formData = new FormData();
    formData.set("title", this.state.title);
    formData.set("content", this.state.content);
    formData.set("private", this.state.private);
    formData.set("property", this.props.selectedProperty);
    formData.append("image", this.state.photo);
    formData.set("imageUrl", this.state.image);
    const config = {
      headers: { "content-type": "multipart/form-data" }
    };
    this.setState({
      transfering: true
    });

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

  showImageMenu = event => {
    console.log(event);
  };

  render() {
    const renderPhotos = () => {
      if (!!this.state.photo || !!this.state.photo_url) {
        return (
          <Paper elevation={1} variant="outlined" onClick={this.showImageMenu}>
            <img src={this.state.photo} alt={this.state.photo} />
            <IconButton onClick={this.handleDelete}>
              <DeleteOutline />
            </IconButton>
          </Paper>
        );
      }

      return (
        <Paper elevation={1} variant="outlined">
          <input
            accept="image/*"
            style={{ display: "none" }}
            onChange={this.handleFileChange}
            id="icon-button-file"
            type="file"
          />
          <label htmlFor="icon-button-file">
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <CropFree />
            </IconButton>
          </label>
        </Paper>
      );
    };

    return (
      <Container className="post-new">
        <form className="create-post" onSubmit={this.handleSubmit}>
          {renderPhotos()}
          <FormControlLabel
            control={
              <Switch
                checked={this.state.private}
                onChange={this.handleSwitch}
                name="private"
                value="private"
              />
            }
            label="private"
          />
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

          <button>Create new Post</button>
        </form>
      </Container>
    );
  }
}
