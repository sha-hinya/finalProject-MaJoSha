import React, { Component } from "react";
import PostList from "../components/PostList.jsx";
import { Container } from "@material-ui/core";

export default class posts extends Component {
  render() {
    return (
      <Container>
        Hello Messages!
        <PostList
          {...this.props}
          selectedProperty={this.props.selectedProperty}
        />
      </Container>
    );
  }
}
