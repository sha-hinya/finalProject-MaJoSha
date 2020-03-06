import React, { Component } from "react";
import axios from "axios";
import {
  Container,
  Paper,
  IconButton,
  FormControlLabel,
  TextField,
  Button,
  Switch,
  FormGroup,
  FormControl,
  Select,
  CircularProgress,
  InputLabel,
  Card,
  CardActionArea
} from "@material-ui/core";
import { CropFree, DeleteOutline } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";
// import Axios from "axios";
// import { useHistory } from "react-router-dom";
// import { yellow } from "@material-ui/core/colors";

const StyledButton = withStyles({
  root: {
    backgroundColor: "#345DFF",
    borderRadius: 3,
    border: 0,
    color: "#f7f7f7",
    height: 48,
    padding: "0 30px"
    // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  label: {
    textTransform: "capitalize"
  }
})(Button);

export default class PostForm extends Component {
  state = {
    title: null,
    content: "",
    image: "",
    photo: null,
    private: true,
    transfering: false,
    status: "open",
    message: ""
  };

  componentDidMount() {
    this.props.backButton.on();
    if (this.props.edit) {
      this.props.setPageTitle("Edit Ticket");
      const id = this.props.match.params.postId;
      axios.get(`/api/posts/${id}`).then(response => {
        this.setState({
          ...response.data,
          photo_url: response.data.image
        });
      });
    } else {
      this.props.setPageTitle("New Ticket");
    }
  }

  handleFileChange = event => {
    event.preventDefault();
    //console.log(event.target.files[0]);
    this.setState({
      photo: event.target.files[0],
      photo_url: URL.createObjectURL(event.target.files[0])
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

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
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
    formData.set("status", this.state.status);
    const config = {
      headers: { "content-type": "multipart/form-data" }
    };
    this.setState({
      transfering: true
    });

    if (this.props.edit) {
      const id = this.props.match.params.postId;
      axios
        .put(`/api/posts/${id}`, formData, config)
        .then(result => {
          this.props.history.push(`/posts/${result.data._id}`);
        })
        .catch(err => {
          console.log(err);
          this.setState({
            transfering: false,
            message: err
          });
        });
    } else {
      axios
        .post("/api/posts", formData, config)
        .then(result => {
          this.props.history.push(`/posts/${result.data._id}`);
        })
        .catch(err => {
          console.log(err);
          this.setState({
            transfering: false,
            message: err
          });
        });
    }
  };

  render() {
    console.log("Transfering: ", this.state.transfering);

    const renderPhotos = () => {
      if (!!this.state.photo || !!this.state.photo_url) {
        return (
          <Card>
            <Paper
              variant="outlined"
              elevation={1}
              className="post-image-wrapper"
            >
              <img src={this.state.photo_url} alt={this.state.photo_url} />
            </Paper>
            <CardActionArea>
              <IconButton onClick={this.handleDelete}>
                <DeleteOutline />
              </IconButton>
            </CardActionArea>
          </Card>
        );
      }

      return (
        <Card>
          <label htmlFor="icon-button-file">
            <Paper
              elevation={1}
              variant="outlined"
              className="post-image-wrapper"
            >
              <input
                accept="image/*"
                style={{ display: "none" }}
                onChange={this.handleFileChange}
                id="icon-button-file"
                type="file"
              />

              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <CropFree color="inherit" style={{ color: "white" }} />
              </IconButton>
            </Paper>
          </label>
        </Card>
      );
    };

    const renderAdminStatusControll = () => {
      return (
        <FormControl className="locationDropown" style={{ width: "100%" }}>
          <InputLabel htmlFor="status-select">Status</InputLabel>
          <Select
            native
            value={this.state.status}
            onChange={this.handleChange}
            inputProps={{
              name: "status",
              id: "status-select"
            }}
          >
            <option value="open">Open</option>
            <option value="in progress">In Progress</option>
            <option value="done">Done</option>
          </Select>
        </FormControl>
      );
    };

    if (this.state.transfering) {
      return (
        <Container className="loading">
          <CircularProgress />
        </Container>
      );
    }

    return (
      <Container className="post-new">
        <form className="create-post" onSubmit={this.handleSubmit}>
          {renderPhotos()}

          <TextField
            id="filled-uncontrolled"
            placeholder="Title"
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
            variant="standard"
          />
          {this.props.user.accessRole === "admin" ||
          this.props.user.accessRole === "modertor"
            ? renderAdminStatusControll()
            : ""}

          <TextField
            id="outlined-multiline-static"
            label="Message"
            name="content"
            multiline
            rows="4"
            onChange={this.handleChange}
            value={this.state.content}
            defaultValue="Type your message here!"
            variant="outlined"
          />

          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={this.state.private}
                  onChange={this.handleSwitch}
                  name="private"
                  value="private"
                />
              }
              label="Private Message? "
            />
            <div className="help-text">
              (Only visible for the property management)
            </div>
          </FormGroup>
          <StyledButton variant="contained" color="primary" type="submit">
            Send
          </StyledButton>
        </form>
      </Container>
    );
  }
}
