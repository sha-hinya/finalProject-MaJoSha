import React, { Component } from "react";
// import axios from "axios";
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
// import { IconButton } from "@material-ui/core";
// import { withRouter } from "react-router";

// icons

class Profile extends Component {
  state = {
    user: null
  };

  componentDidMount() {
    // this.props.setPageTitle("Profile");
    // const id = this.props.match.params.userId;
    // axios.get(`/api/user/`).then(response => {
    //   this.setState({
    //     user: response.data
    //   });
    // });
  }

  render() {
    //console.log("response.data", this.state);
    console.log("Profile Data", this.props);
    return (
      <div>
        Hello Profile! 
        {/* {this.firstName}
        <h2>{this.lastName}</h2> */}
         {/* {this.profile.user.firstName}  */}
      </div>    );
  }
}

export default Profile;
