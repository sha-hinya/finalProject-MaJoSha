import React, { Component } from "react";
import PostList from "../components/PostList.jsx";
import { Container } from "@material-ui/core";

export default class posts extends Component {
  componentDidMount() {
    this.props.backButton.off();
    this.props.setPageTitle("Messages");
  }
  render() {
    // console.log("RENDER POSTS ", this.props);
    return (
      <Container>
        <PostList
          {...this.props}
          selectedProperty={this.props.selectedProperty}
        />
      </Container>
    );
  }
}
