// import React from "react";
import { Link } from "react-router-dom";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import Card from "@material-ui/core/Card";
import { CardContent } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    overflow: "hidden"
  },
  gridList: {
    flexWrap: "nowrap",
    alignItems: "left",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)"
  },
  title: {
    backgroundColor: "yellow"
  },
  card: {
    backgroundColor: "#335CFF",
    color: "#FCF7FF",
    alignItems: "left"
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
  }
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */

export default function AnnouncementsList(props) {
  const classes = useStyles();

  // <Link to={`/announcements/${announcement._id}`}>  </Link>
  return (
    <div className={classes.root}>
      {/* <p>Announcement List</p> */}
      <GridList className={classes.gridList} cols={0.5}>
        {props.announcements.map(announcement => (
          <Link to={`/announcement/${announcement._id}`}>
            <Card key={announcement._id}>
              {/* <img src={announcement.image} /> */}

              <CardContent className={classes.card}>
                <div className="announcement-title">{announcement.title}</div>
                <div className="announcement-content">
                  {announcement.content}
                </div>
                <div className="post-status">
                  {/* <div className='post-status-icon'> {getStatusIcon()}</div> */}
                  <div className="announcement-status-time">
                    {new Date(announcement.created_at).toDateString()}
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </GridList>
    </div>
  );
}

// <GridListTile key={announcement.image}>
//         <Link to={`/announcements/${announcement._id}`}>
//           <img src={announcement.image} alt={announcement.title} />
//           <GridListTileBar
//             title={announcement.title}
//             classes={{
//               root: classes.titleBar,
//               title: classes.title
//             }}
//             actionIcon={
//               <IconButton aria-label={`star ${announcement.title}`}>
//                 <StarBorderIcon className={classes.title} />
//               </IconButton>
//             }
//           />{" "}
//         </Link>
//       </GridListTile>
