import React, { Component } from 'react';

// Components
import Posts from '../components/Posts.js';
import Announcement from '../components/Announcement';
import { Container } from '@material-ui/core';

export default class dashboard extends Component {
  render() {
    return (
      <Container>
        <h1>this is the dashboard</h1>
        <Announcement />
        <Posts {...this.props} />
      </Container>
    );
  }
}
