import React, { Component } from "react";
// import axios from "axios";
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
// import { IconButton } from "@material-ui/core";
// import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";

// icons

const logout = () => {
  axios.delete("/api/auth/logout").then(() => {
    this.props.setUser(null);
  });
};

class Profile extends Component {
  state = {
    user: null
  };

  // componentDidMount() {
  // this.props.setPageTitle("Profile");
  // const id = this.props.match.params.userId;
  // axios.get(`/api/user/`).then(response => {
  //   this.setState({
  //     user: response.data
  //   });
  // });
  // }

  render() {
    //console.log("response.data", this.state);
    console.log("Profile Data", this.props);
    return (
      <div>
        Hello Profile!
        <div className="profileCard">
          <img src={this.props.profile.user.image} alt="John Doe" />
          <h1>
            {this.props.profile.user.firstName}{" "}
            {this.props.profile.user.lastName}
          </h1>
          <p class="title">CEO & Founder, Example</p>
          <p>Harvard University</p>
        
        </div>
        {/* {this.props.firstName}
        <h2>{this.props.user.lastName}</h2>  */}
        <h2>{this.props.profile.user.firstName} </h2>
        <Link className="profileIcon" onClick={logout}>
          {/* <Link className="profileIcon" to="/profile" > */}
          Logout
        </Link>
      </div>
    );
  }
}

export default Profile;
