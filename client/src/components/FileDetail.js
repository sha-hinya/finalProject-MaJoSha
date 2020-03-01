import React, { Component } from "react";
import axios from "axios";
import { Card } from "@material-ui/core";
import SimpleCard from "./filesCard";

class FileDetail extends Component {
  state = {
    file: null
  };

  componentDidMount() {
    const id = this.props.match.params.fileId;

    axios.get(`/api/files/${id}`).then(response => {
      console.log(response, "banana");
      this.setState({
        file: response.data
      });
    });
  }

  render() {
    const file = this.state.file;

    console.log("File DETAIL ", this.state.file);

    if (!file) {
      return <div>Loading</div>;
    }

    return (
      <div>
        {/* <SimpleCard {...this.props} /> */}
        <div className="fileCardsDetail">
          <h2>{file.title}</h2>
          <p>{file.property}</p>
          {/* <div></div> */}
          <p>created on {new Date(file.created_at).toDateString()}</p>
          <p> created on {new Date(file.created_at).toDateString()}</p>
          <img src={file.url} alt={file.title} />
        </div>
      </div>
    );
  }
}

export default FileDetail;
