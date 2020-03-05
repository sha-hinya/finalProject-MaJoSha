import React, { Component } from "react";
import Profile from "../components/Profile.js";
import { Container } from "@material-ui/core";

export default class profiles extends Component {
  componentDidMount = () => {
    this.props.setPageTitle("Profile");
    this.props.backButton.on();
  };
  render() {
    return (
      <Container>
        <Profile
          profile={this.props}
          history={this.props.history}
          setUser={this.props.setUser}
        />
      </Container>
    );
  }
}
