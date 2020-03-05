import React, { Component } from "react";
import axios from "axios";
import CalendersList from "../components/CalendersList";
import { Container } from "@material-ui/core";

export default class Calenders extends Component {
  state = {
    calenders: []
  };

  componentDidMount() {
    this.props.backButton.off();
    this.props.setPageTitle("Calendar");
    this.getData();
  }

  getData = () => {
    //console.log("getData()");
    axios
      .get(`/api/announcements?property=${this.props.selectedProperty}`)
      .then(response => {
        response.data.forEach(element => {
          return (element.type = "announcement");
        });
        this.setState(
          {
            calenders: response.data
          },
          () => {
            axios
              .get(`/api/posts?property=${this.props.selectedProperty}`)
              .then(response => {
                response.data.forEach(element => {
                  return (element.type = "posts");
                });
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
        <CalendersList
          selectedProperty={this.props.selectedProperty}
          calenders={sorted}
        />
      </Container>
    );
  }
}
