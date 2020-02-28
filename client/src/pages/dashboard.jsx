import React, { Component } from 'react';

// Components
import PostList from '../components/PostList.jsx';
import Announcement from '../components/Announcement';
import { Container } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';

export default class dashboard extends Component {
  componentDidMount = () => {
    console.log(this.props);
    this.props.backButton.off();
  };
  render() {
    return (
      <Container>
        {/* <p>This is the Dashboard</p> */}
        <h3>
          <LocationOnIcon />
          Lobeckstraße 36-40, 10969 Berlin
        </h3>

        <Announcement />
        <PostList {...this.props} />
      </Container>
    );
  }
}
