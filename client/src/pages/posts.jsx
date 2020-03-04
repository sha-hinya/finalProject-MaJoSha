import React, { Component } from "react";
import PostList from "../components/PostList.jsx";
import { Container } from "@material-ui/core";

export default class posts extends Component {
  componentDidMount() {
    this.props.setPageTitle("Messages");
  }
  render() {
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
