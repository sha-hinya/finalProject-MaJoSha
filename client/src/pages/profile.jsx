import React, { Component } from "react";
import Profile from "../components/Profile.js";
import { Container } from "@material-ui/core";

// const Profile = props => {
//   const logout = () => {
//     axios.delete("/api/auth/logout").then(() => {
//       props.setUser(null);
//     });
//   };

export default class profile extends Component {
  render() {
    return (
      <Container>
        Hello Profile!
        {/* <Profile
          {...this.props}
          selectedProperty={this.props.selectedProperty}
        /> */}
      </Container>
    );
  }
}
