import React, { Component } from "react";
import axios from "axios";
// import { Card } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";

// const useStyles = makeStyles({
//   root: {
//     minWidth: 275
//   },
//   title: {
//     fontSize: 14
//   },
//   pos: {
//     marginBottom: 12
//   }
// });


class FileDetail extends Component {
  state = {
    file: null
  };

  componentDidMount() {
    const id = this.props.match.params.fileId;

    axios.get(`/api/files/${id}`).then(response => {
      // console.log(response, "banana");
      this.setState({
        file: response.data
      });
    });
  }

  render() {
    const file = this.state.file;
    

    // console.log("File DETAIL ", this.state.file);

    if (!file) {
      return <div>Loading</div>;
    }

    return (
      <div>
        <Card className="fileCardsDetail">
          <CardContent>
            <div>
              <div >
                <h2>{file.title}</h2>
                <p>{file.property}</p>
                {/* <div></div> */}
                <p>created on {new Date(file.created_at).toDateString()}</p>
                <p> created on {new Date(file.created_at).toDateString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="fileCardsDetail">
          <CardContent>
            <div>
              <div >
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
