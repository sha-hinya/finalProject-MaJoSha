import React, { Component } from "react";
import axios from "axios";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { IconButton  } from "@material-ui/core";
import TimeAgo from "react-timeago";

// icons
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";



class AnnouncementDetail extends Component {
  state = {
    announcement: null
  };

  componentDidMount() {
    //console.log("log:" ,this.props);
    const id = this.props.match.params.announcementId;

    axios.get(`/api/announcements/${id}`).then(response => {
      this.setState({
        announcement: response.data
      });
    });
  }

  render() {
    //console.log("log:" ,this.props);
    const announcement = this.state.announcement;
    if (!announcement) {
      return <div>Loading</div>;
    }

    return (
      <div>
        <Card className="fileDetailCardOne">
          <CardContent className="filesDetailCardContent">
            <div>
              <h2>{announcement.title}</h2>
              <h5>
                {"valid from "}
                {new Date(announcement.announcedAt).toLocaleDateString("de-De")}

                {" until "}
                {new Date(announcement.announcedAt).toLocaleDateString("de-De")}
              </h5>
              <p>{announcement.content}</p>
            </div>

            <div className="file-detail-action-icons">
              <IconButton aria-label="delete">
                <DeleteOutlineIcon fontSize="large" />
              </IconButton>
              <IconButton aria-label="delete">
                <EditIcon fontSize="large" />
              </IconButton>
            </div>
          </CardContent>
        </Card>
        <Card className="fileDetailCardTwo">
          <div>
            <img id="img" src={announcement.image} alt={announcement.title} />
          </div>
          <div style={{ fontSize: "10px" }}>
            {"last update: "}
            <TimeAgo date={announcement.updated_at} />
            {/* {new Date(announcement.updated_at).toLocaleDateString("de-De")} */}
          </div>
        </Card>
      </div>
    );
  }
}
export default AnnouncementDetail;
