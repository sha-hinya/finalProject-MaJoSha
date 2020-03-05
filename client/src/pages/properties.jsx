import React, { Component } from "react";
import axios from "axios";

import {
  Container,
  Divider,
  //IconButton,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Button
} from "@material-ui/core";

import { Add, LocationOn } from "@material-ui/icons";

export default class properties extends Component {
  state = {
    properties: null,
    selectedProperty: "",
    email: ""
  };
  componentDidMount = () => {
    this.props.setPageTitle("Add new user");
    axios
      .get("/api/properties")
      .then(response => {
        console.log(response.data);
        this.setState({
          properties: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  addEmail = () => {};

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    axios
      .post("/api/user", {
        property: this.state.selectedProperty,
        email: this.state.email
      })
      .then(response => {
        console.log("subit response:", response);
        this.props.history.push("/");
      })
      .catch(err => {
        this.setState({
          message: err.response.data.message
        });
      });
  };

  render() {
    console.log(this.state);
    const renderInvite = () => {
      return (
        <>
          <TextField
            id="email"
            name="email"
            label="E-mail adress"
            value={this.state.email}
            onChange={this.handleChange}
            helperText={this.state.message}
            style={{ width: "100%", textAlign: "left  " }}
          />
          <p> </p>
          <Button type="submit" variant="contained" color="primary">
            <Add />
            Invite
          </Button>
        </>
      );
    };

    if (!this.state.properties) {
      return "loading";
    } else {
      return (
        <Container>
          <h2>Invite new User</h2>
          <form onSubmit={this.handleSubmit}>
            <FormControl style={{ width: "100%", textAlign: "left" }}>
              <InputLabel id="demo-simple-select-label"> Property</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={this.state.selectedProperty}
                onChange={this.handleChange}
                name="selectedProperty"
              >
                {this.state.properties
                  ? this.state.properties.map((element, index) => {
                      return (
                        <MenuItem value={element._id}>
                          <LocationOn /> {element.property_street},{" "}
                          {element.property_postal}{" "}
                        </MenuItem>
                      );
                    })
                  : ""}
                }
              </Select>
            </FormControl>
            <p></p>
            <Divider />
            <p></p>
            {this.state.selectedProperty ? renderInvite() : ""}
          </form>
        </Container>
      );
    }
  }
}
