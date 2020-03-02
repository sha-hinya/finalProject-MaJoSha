import React, { Component } from "react";
import axios from "axios";
import CalendersList from "../components/CalendersList";
import { Container } from "@material-ui/core";

export default class Calenders extends Component {
  state = {
    calenders: []
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    //console.log("getData()");
    axios.get("/api/announcements").then(response => {
      this.setState(
        {
          calenders: response.data
        },
        () => {
          axios.get("/api/posts").then(response => {
           // console.log(response.data);
            this.setState({
              calenders: [...this.state.calenders, ...response.data]
            });
          });
        }
      );
    });
  };

  // getData = () => {
  //   //console.log("getData()");
  //   axios.get("/api/posts").then(response => {
  //     this.setState({
  //       calenders: response.data
  //     });
  //   });
  // };

  getNewestCalenders = () => {
    axios.get("/api/files?sortBy=created_at").then(response => {
      this.setState({
        calenders: response.data
      });
    });
  };

  render() {
    console.log("< Calenders/> RENDER", this.state.calenders);
    return (
      <Container>
        <CalendersList calenders={this.state.calenders} />
      </Container>
    );
  }
}
