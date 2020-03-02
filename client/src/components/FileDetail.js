import React, { Component } from "react";
import axios from "axios";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

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
    if (!file) {
      return <div>Loading</div>;
    }

    return (
      <div className="fileCardsContainer">
        <Card className="fileCardsDetail">
          <CardContent>
            <div>
              <div>
                <h2> Title:{file.title}</h2>
                <p>{file.property}</p>
                <p>{file.category}</p>
                <p> created on {new Date(file.created_at).toDateString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="fileCardsDetail">
          <CardContent>
            <div>
              <div>
                <img src={file.url} alt={file.title} />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default FileDetail;
