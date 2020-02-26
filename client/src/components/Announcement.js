import React, { Component } from "react";
import axios from "axios";


export default class Announcements extends Component {
  state = {
    announcements: []
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    // console.log("getData()");
    axios.get("/api/announcements").then(response => {
      this.setState({
        announcements: response.data
      });
    });
  };

  getNewestAnnouncements = () => {
    axios.get("/api/announcements?sortBy=created_at").then(response => {
      this.setState({
        announcements: response.data
      });
    });
  };

  render() {
    // console.log("<Announcements/> RENDER");
    return (
      <div>
        <button onClick={this.getNewestAnnouncements}>sort by new</button>
      </div>
    );
  }
}
