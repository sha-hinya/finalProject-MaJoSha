import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button, Card, CardContent } from "@material-ui/core";

class Profile extends Component {
  logout = () => {
    axios.delete("/api/auth/logout").then(() => {
      this.props.history.push("/");
      this.props.setUser(null);
    });
  };
  render() {
    return (
      <>
        <Card className="profileCard">
          <CardContent>
            <img src={this.props.profile.user.image} alt="John Doe" />
            <table>
              <tr>
                <td>
                  <b>Name</b>
                </td>
              </tr>
              <tr>
                <td>
                  {this.props.profile.user.firstName}{" "}
                  {this.props.profile.user.lastName}
                </td>
              </tr>
              <tr>
                <td>
                  <b>E-Mail</b>
                </td>
              </tr>
              <tr>
                <td>{this.props.profile.user.email}</td>
              </tr>
              <tr>
                <td>
                  <b>Phone</b>
                </td>
              </tr>
              <tr>
                <td>{this.props.profile.user.phone}</td>
              </tr>
              <tr>
                <td>
                  <b>Your Properties:</b>
                </td>
              </tr>
              <tr>
                <td>
                  <ul>
                    {this.props.profile.user.property.map(property => {
                      return (
                        <li key={property._id} className="Assigned properties:">
                          {property.property_name}
                        </li>
                      );
                    })}
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  <b>Your Role:</b>
                </td>
              </tr>
              <tr>
                <td>{this.props.profile.user.accessRole}</td>
              </tr>
            </table>

            <Link className="profileIcon" onClick={this.logout}>
              <Button variant="contained" aria-label="logout">
                Logout
              </Button>
            </Link>
          </CardContent>
        </Card>
      </>
    );
  }
}

export default Profile;
