import React, { Component } from "react";
// import axios from "axios";
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
// import { IconButton } from "@material-ui/core";
// import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "@material-ui/core";

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
        <div className="profileCard">
          <h1>
            Hello {this.props.profile.user.firstName} {" !"}
          </h1>
          <img src={this.props.profile.user.image} alt="John Doe" />
          <h2>
            {" "}
            {this.props.profile.user.title} {this.props.profile.user.firstName}{" "}
            {this.props.profile.user.lastName}
          </h2>
          <p className="E-Mail">{this.props.profile.user.email}</p>
          <p className="Phone">{this.props.profile.user.phone}</p>

          <h3>Your properties:</h3>
          {this.props.profile.user.property.map(property => {
            return (
              <div>
                <p key={property._id} className="Assigned properties:">
                  {property.property_name}
                </p>
              </div>
            );
          })}

          {/* <p className="Property">{this.props.profile.user.property}</p> */}
        </div>
        {/* {this.props.firstName}
        <h2>{this.props.user.lastName}</h2>  */}
        <h4>
          {"Access role: "}
          {this.props.profile.user.accessRole}{" "}
        </h4>

        <Link className="profileIcon" onClick={logout}>
          {/* <Link className="profileIcon" to="/profile" > */}
          <Button variant="contained" aria-label="logout">
            Logout
          </Button>
        </Link>
      </div>
    );
  }
}

export default Profile;
