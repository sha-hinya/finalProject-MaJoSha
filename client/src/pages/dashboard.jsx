import React, { Component } from "react";

// Components
import PostList from "../components/PostList.jsx";
import Announcement from "../components/Announcement";
import { Container, FormControl, InputLabel, Select } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";

export default class dashboard extends Component {
  state = {
    property: null
  };

  componentDidMount = () => {
    //console.log(this.props);
    this.props.backButton.off();
    this.props.setPageTitle("House Log");
    this.setState({
      user: this.props.user
    });
    // axios.get();
  };
  render() {
    // const renderPropertySelector = () => {
    //   if (this.state.user && this.state.user.property) {
    //     return this.state?.property.map((property, index) => {
    //       return (
    //         <option value={property._id} key={index}>
    //           {property._id}
    //         </option>
    //       );
    //     });
    //   }

    return (
      <Container>
        <div className="dashboardHeader">
          <p>
            {" "}
            <LocationOnIcon />
            {/* {renderPropertySelector} */}
          </p>
        </div>

        <Announcement />
        <p>Messages</p>
        <PostList {...this.props} />
      </Container>
    );
  }
}
