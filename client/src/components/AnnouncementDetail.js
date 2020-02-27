import React, { Component } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";

export default class AnnouncementDetail extends Component {
  state = {
    announcement: null
  };

  componentDidMount() {
    const id = this.props.match.params.announcementId;

    axios.get(`/api/announcements/${id}`).then(response => {
      this.setState({
        announcement: response.data
      });
    });
  }

  render() {
    const announcement = this.state.announcement;

    console.log("Announcement DETAIL ", this.state.announcement);

    if (!announcement) {
      return <div>Loading</div>;
    }
    return (
      <div>
        <h2>
          {announcement.type} {announcement.title}
        </h2>
        {announcement.type === "link" ? (
          <a href={announcement.content}>{announcement.content}</a>
        ) : (
          <p>{announcement.content}</p>
        )}
        <p>
          announcemented on {new Date(announcement.created_at).toDateString()}
        </p>
        <img class="postingImage" src={announcement.image} alt={announcement.title}/>
      </div>
    );
  }
}
