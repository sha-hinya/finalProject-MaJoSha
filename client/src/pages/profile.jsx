import React, { Component } from "react";
import Profile from "../components/Profile.js";
import { Container } from "@material-ui/core";

export default class profiles extends Component {
  // componentDidMount() {
  //   this.props.setPageTitle("Profile");
  // }
  render() {
   // console.log("RENDER PROFILE ", this.props);
    return (
      <Container>
        <Profile  profile={this.props} setUser={this.setUser}
                   
         />
       
      </Container>
    );
  }
}
