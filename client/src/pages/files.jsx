import React, { Component } from "react";
import axios from "axios";
import FilesList from "../components/FilesList";
import { Container } from "@material-ui/core";

export default class Files extends Component {
  state = {
    files: []
  };

  componentDidMount() {
    this.props.setPageTitle("Documents");
    this.props.backButton.off();
    this.getData();
  }

  getData = () => {
    //console.log("getData()");
    axios.get("/api/files").then(response => {
      this.setState({
        files: response.data
      });
    });
  };

  getNewestFiles = () => {
    axios.get("/api/files?sortBy=created_at").then(response => {
      this.setState({
        files: response.data
      });
    });
  };

  render() {
    //console.log("< Files/> RENDER", this.state.files);
    return (
      <Container>
        <FilesList files={this.state.files} />
      </Container>
    );
  }
}
