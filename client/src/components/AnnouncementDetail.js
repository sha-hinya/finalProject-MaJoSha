// import React, { Component } from "react";
// import axios from "axios";
// // import { Link } from "react-router-dom";

// export default class AnnouncementDetail extends Component {
//   state = {
//     announcement: null
//   };

//   componentDidMount() {
//     const id = this.props.match.params.announcementId;

//     axios.get(`/api/announcements/${id}`).then(response => {
//       this.setState({
//         announcement: response.data
//       });
//     });
//   }

//   render() {
//     const announcement = this.state.announcement;

//     console.log("Announcement DETAIL ", this.state.announcement);

//     if (!announcement) {
//       return <div>Loading</div>;
//     }
//     return (
//       <div>
//         <h2>
//           {announcement.type} {announcement.title}
//         </h2>
//         {announcement.type === "link" ? (
//           <a href={announcement.content}>{announcement.content}</a>
//         ) : (
//           <p>{announcement.content}</p>
//         )}
//         <p>
//           announcemented on {new Date(announcement.created_at).toDateString()}
//         </p>
//         <img
//           className="announcementImage"
//           src={announcement.image}
//           alt={announcement.title}
//         />
//       </div>
//     );
//   }
// }
import React, { Component } from "react";
import axios from "axios";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

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
      <div className="announcementCardsContainer">
        <Card className="announcementCardsDetail">
          <CardContent>
            <div>
              <div>
                <h2>{announcement.title}</h2>
                <p>{announcement.content}</p>
                <p>
                  updated on {new Date(announcement.updated_at).toDateString()}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="announcementCardsDetail">
          <CardContent>
            <div>
              <div>
                <img src={announcement.image} alt={announcement.title} />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default AnnouncementDetail;
