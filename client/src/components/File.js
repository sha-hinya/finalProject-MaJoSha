import React, { Component } from "react";
import axios from "axios";
import FilesList from "./FilesList";

export default class Files extends Component {
  state = {
    files: []
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    console.log("getData()");
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
    console.log("< Files/> RENDER");
    return (
      <div>
        <FilesList files={this.state.files} />
      </div>
    );
  }
}
