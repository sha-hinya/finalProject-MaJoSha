import React, { Component } from "react";
import axios from "axios";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { IconButton } from "@material-ui/core";
import { withRouter } from "react-router";

// icons
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";

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

  handleDelete = () => {
    const id = this.props.match.params.fileId;

    axios.delete(`/api/files/delete/${id}`).then(res => {
      console.log("file deleted");
      console.log(this.props, "hisssstorry");
    });
    this.props.history.push("/");
  };

  render() {
    const file = this.state.file;
    if (!file) {
      return <div>Loading</div>;
    }

    return (
      <div>
        <Card className="fileDetailCardOne">
          <CardContent className="filesDetailCardContent">
            <h2>{file.title}</h2>
            <h4>{file.category}</h4>
            <h5>
              {"last update: "}
              {new Date(file.updated_at).toLocaleDateString("de-De")}
            </h5>
            <p>
              {
                "Since many of the waste consist of man-made materials, they decompose in landfills for hundreds of years, poisoning everything around. However there is only one method that helps to avoid destroying nature and not harmful to human health - recycling. To manage the smooth process of recycling we need to make our own contribution - please separate waste manually at the household."
              }
            </p>
          </CardContent>
          <div className="file-detail-action-icons">
            <IconButton onClick={this.handleDelete} aria-label="delete">
              <DeleteOutlineIcon fontSize="large" />
            </IconButton>
            <IconButton aria-label="delete">
              <EditIcon fontSize="large" />
            </IconButton>{" "}
          </div>
        </Card>

        <Card className="fileDetailCardTwo">
          <img id="img" src={file.url} alt={file.title} />
        </Card>
      </div>

      // <div className="fileCardsContainer">
      //   <Card className="fileCardsDetail">
      //     <CardContent>
      //       <div>
      //<h2>{file.title}</h2>
      //         <h4>{file.category}</h4>
      //         <h5>
      //           {"last update: "}
      //           {new Date(file.updated_at).toLocaleDateString("de-De")}
      //         </h5>
      //         <p>
      //           {
      //             "Since many of the waste consist of man-made materials, they decompose in landfills for hundreds of years, poisoning everything around. However there is only one method that helps to avoid destroying nature and not harmful to human health - recycling. To manage the smooth process of recycling we need to make our own contribution - please separate waste manually at the household."
      //           }
      //         </p>
      //       </div>
      //       <div className="file-detail-action-icons">
      //         <IconButton onClick={this.handleDelete} aria-label="delete">
      //           <DeleteOutlineIcon fontSize="large" />
      //         </IconButton>
      //         <IconButton aria-label="delete">
      //           <EditIcon fontSize="large" />
      //         </IconButton>
      //       </div>
      //     </CardContent>
      //   </Card>
      //   <div className=".fileCardsDetailImage">
      //     <img src={file.url} alt={file.title} />
      //   </div>
      //   <Card></Card>
      // </div>
    );
  }
}

export default withRouter(FileDetail);
