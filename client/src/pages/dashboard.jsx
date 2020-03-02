import React, { Component } from "react";

// Components
import PostList from "../components/PostList.jsx";
import Announcement from "../components/Announcement";
import { Container } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";

export default class dashboard extends Component {
  componentDidMount = () => {
    console.log(this.props);
    this.props.backButton.off();
    this.props.setPageTitle("House Log");
  };
  render() {
    return (
      <Container>
        <div className="dashboardHeader">
          <p>
            {" "}
            <LocationOnIcon />
            Lobeckstraße 36-40, 10969 Berlin
          </p>
        </div>

        <Announcement />
        <PostList {...this.props} />
      </Container>
    );
  }
}
