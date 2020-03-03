import React, { Component } from "react";
import PostList from "../components/PostList.jsx";

export default class posts extends Component {
  render() {
    return (
      <div>
      Hello Messages!
        <PostList {...this.props} />
      </div>
    );
  }
}
