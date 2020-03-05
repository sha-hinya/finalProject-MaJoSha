import React, { Component } from "react";
import axios from "axios";
import CalendersList from "../components/CalendersList";
import { Container } from "@material-ui/core";

export default class Calenders extends Component {
  state = {
    calenders: []
  };

  componentDidMount() {
    this.props.setPageTitle("Calendar");
    this.getData();
  }

  getData = () => {
    axios
      .get(`/api/announcements?property=${this.props.selectedProperty}`)
      .then(response => {
        this.setState(
          {
            calenders: response.data
          },
          () => {
            axios
              .get(`/api/posts?property=${this.props.selectedProperty}`)
              .then(response => {
                this.setState({
                  calenders: [...this.state.calenders, ...response.data]
                });
              });
          }
        );
      });
  };

  render() {
    const sorted = [...this.state.calenders].sort((b, a) => {
      const sortFieldA = a.announcedAt ? "announcedAt" : "dueDate";
      const sortFieldB = b.announcedAt ? "announcedAt" : "dueDate";
      return new Date(b[sortFieldB]) - new Date(a[sortFieldA]);
    });

    return (
      <Container>
        <CalendersList calenders={sorted} />
      </Container>
    );
  }
}
