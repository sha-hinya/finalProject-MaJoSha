import React, { Component } from "react";
import axios from "axios";
import AnnouncementsList from "./AnnouncementsList";

export default class Announcements extends Component {
  state = {
    announcements: []
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    console.log("getData()");
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
    console.log("<Announcements/> RENDER");
    return (
      <div>
        <AnnouncementsList announcements={this.state.announcements} />
      </div>
    );
  }
}
