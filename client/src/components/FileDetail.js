import React, { Component } from "react";
import axios from "axios";

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
        <h2 style={{ border: "1px solid black" }}>{file.title}</h2>
        <p>{file.property}</p>
        <img src={file.url} alt={file.title} />
        <p>created on {new Date(file.created_at).toDateString()}</p>
        <p> created on {new Date(file.created_at).toDateString()}</p>
      </div>
    );
  }
}

export default FileDetail;
