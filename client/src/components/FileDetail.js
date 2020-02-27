import React, { Component } from "react";
import axios from "axios";

class FileDetail extends Component {
  state = {
    file: null
  };

  componentDidMount() {
    const id = this.props.match.params.fileId;

    axios.get(`/api/files/${id}`).then(response => {
      this.setState({
        file: response.data
      });
    });
  }

  render() {
    const file = this.state.file;

    // console.log("File DETAIL ", this.state.file);

    return (
      <div>
        <h2>
          {file.category} {file.title}
        </h2>
        <p>{file.url}</p>
        <p>created on {new Date(file.created_at).toDateString()}</p>
        <img className="announcementImage" src={file.url} alt={file.title} />
      </div>
    );
  }
}

export default FileDetail;
