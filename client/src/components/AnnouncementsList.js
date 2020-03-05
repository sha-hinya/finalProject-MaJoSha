// import React from "react";
import { Link } from "react-router-dom";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import Card from "@material-ui/core/Card";
import { CardContent, Container } from "@material-ui/core";
import TimeAgo from "react-timeago";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    overflow: "hidden",
    backgroundColor: "#335CFF",
    padding: "0px"
  },
  gridList: {
    flexWrap: "nowrap",
    textAlign: "left",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
    margin: "0px",
    
  },
  title: {
    backgroundColor: "white"
  },
  card: {
    backgroundColor: "#335CFF",
    color: "#f7f7f7",
    textAlgin: "left",
    height: "160px",
    minWidth: "90px"
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
  }
}));

export default function AnnouncementsList(props) {
  const classes = useStyles();

  return (
    <Container className="announcementContainer">
      <GridList className={classes.gridList} cols={0.5}>
        {props.announcements.map(announcement => (
          <Link key={announcement._id} to={`/announcement/${announcement._id}`}>
            <Card>
              <CardContent className={classes.card}>
                <div className="announcement-title">{announcement.title}</div>
                <div className="announcement-content">
                  {/* {announcement.content} */}
                </div>
                <div className="post-status">
                  {/* <div className='post-status-icon'> {getStatusIcon()}</div> */}
                  <p></p>
                  <div className="announcement-time">
                    <TimeAgo date={announcement.created_at} />
                    {/* {new Date(announcement.created_at).toDateString()} */}
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </GridList>
    </Container>
  );
}
