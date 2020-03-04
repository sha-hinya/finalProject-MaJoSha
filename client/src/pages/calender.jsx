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
            //console.log(response.data);
            this.setState({
              calenders: [...this.state.calenders, ...response.data]
            });
            //console.log("Kalender: ", this.state);
          });
        }
      );
    });
  };

  render() {
    //console.log("< Calenders/> RENDER", this.state.calenders);

    const sorted = [...this.state.calenders].sort((b, a) => {
      const sortFieldA = a.announcedAt ? "announcedAt" : "dueDate";
      const sortFieldB = b.announcedAt ? "announcedAt" : "dueDate";
      return new Date(b[sortFieldB]) - new Date(a[sortFieldA]);
    });

    //console.log(sorted);

    return (
      <Container>
        <CalendersList calenders={sorted} />
      </Container>
    );
  }
}
