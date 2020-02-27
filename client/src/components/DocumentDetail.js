import React, { Component } from "react";
import axios from "axios";

class DocumentDetail extends Component {
  state = {
    document: null
  };

  componentDidMount() {
    const id = this.props.match.params.documentId;

    axios.get(`/api/documents/${id}`).then(response => {
      this.setState({
        document: response.data
      });
    });
  }

  render() {
    const document = this.state.document;

    // console.log("Document DETAIL ", this.state.document);

    return (
      <div>
        <h2>
          {document.category} {document.title}
        </h2>
        <p>{document.url}</p>
        <p>created on {new Date(document.created_at).toDateString()}</p>
        <img class="postingImage" src={document.url} alt={document.title} />
      </div>
    );
  }
}

export default DocumentDetail;
