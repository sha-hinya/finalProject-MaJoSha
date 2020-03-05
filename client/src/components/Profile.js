import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button, Container } from "@material-ui/core";

class Profile extends Component {
  logout = () => {
    axios.delete("/api/auth/logout").then(() => {
      this.props.setUser(null);
    });
  };
  render() {
    return (
      <Container>
        <div className="profileCard">
          <h1>
            Hello {this.props.profile.user.firstName} {" !"}
          </h1>
          <img src={this.props.profile.user.image} alt="John Doe" />
          <h2>
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
        </div>

        <h4>
          {"Access role: "}
          {this.props.profile.user.accessRole}{" "}
        </h4>

        <Link className="profileIcon" onClick={this.logout}>
          <Button variant="contained" aria-label="logout">
            Logout
          </Button>
        </Link>
      </Container>
    );
  }
}

export default Profile;
