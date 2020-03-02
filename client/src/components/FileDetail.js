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
                <h2>{file.title}</h2>
                {/* <p>{file.property}</p> */}
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
