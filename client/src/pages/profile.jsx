import React, { Component } from "react";
import Profile from "../components/Profile.js";
import { Container } from "@material-ui/core";

export default class profiles extends Component {
  render() {
    return (
      <Container>
        <Profile profile={this.props} setUser={this.props.setUser} />
      </Container>
    );
  }
}
