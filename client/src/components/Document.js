import React, { Component } from "react";
import axios from "axios";
import { Document } from "mongoose";
import { DocumentsList } from "./DocumentsList";

export default class Documents extends Component {
  state = {
    documents: []
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    console.log("getData()");
    axios.get("/api/documets").then(response => {
      this.setState({
        documents: response.data
      });
    });
  };

  getNewestDocuments = () => {
    axios.get("/api/documents?sortBy=created_at").then(response => {
      this.setState({
        documents: response.data
      });
    });
  };

  render() {
    console.log("< Documents/> RENDER");
    return (
      <div>
        <DocumentsList documents={this.state.documents} />
      </div>
    );
  }
}

export default Document;
