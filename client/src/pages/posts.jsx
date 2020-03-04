import React, { Component } from "react";
import PostList from "../components/PostList.jsx";
import { Container } from "@material-ui/core";

export default class posts extends Component {
  
  render() {
   // console.log("RENDER POSTS ", this.props);
    return (
      <Container>
        Read or add your message here
        {/* {this.props.selectedProperty.property_name} */}
       
        <PostList
          {...this.props}
          selectedProperty={this.props.selectedProperty}
        />
        {this.props.selectedProperty}
      </Container>
    );
  }
}
