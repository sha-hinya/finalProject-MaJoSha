// import React from "react";
// import { Link } from "react-router-dom";

// const AnnouncementsList = props => {
//   console.log(props.announcements);
//   return props.announcements.map(announcement => {
//     return (
//       <div className="postingscontainer" key={announcement._id}>
//         <p>{announcement.title} </p>

//         <Link to={`/announcements/${announcement._id}`}>
//           <p>{announcement.content}</p>
//           <p>
//             announced by {announcement.author} on {announcement.updated_at}{" "}
//           </p>
//         </Link>
//       </div>
//     );
//   });
// };

// export default AnnouncementsList;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
//import tileData from "./tileData";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)"
  },
  title: {
    color: theme.palette.primary.light
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

  return (
    <div className={classes.root}>
    Announcements
      <GridList className={classes.gridList} cols={2.5}>
        {props.announcements.map(announcement => (
          <GridListTile key={announcement.image}>
            <img src={announcement.image} alt={announcement.title} />
            <GridListTileBar
              title={announcement.title}
              classes={{
                root: classes.titleBar,
                title: classes.title
              }}
              actionIcon={
                <IconButton aria-label={`star ${announcement.title}`}>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

// function Posts(props) {
//   return (
//     <div style={{ marginTop: 20, padding: 30 }}>
//       <Grid container spacing={40} justify="center">
//         {posts.map(post => (
//           <Grid item key={post.title}>
//             <Card>
//               <CardActionArea>
//                 <CardMedia
//                   component="img"
//                   alt="Contemplative Reptile"
//                   height="140"
//                   image={post.image}
//                   title="Contemplative Reptile"
//                 />
//                 <CardContent>
//                   <Typography gutterBottom variant="h5" component="h2">
//                     {post.title}
//                   </Typography>
//                   <Typography component="p">{post.excerpt}</Typography>
//                 </CardContent>
//               </CardActionArea>
//               <CardActions>
//                 <Button size="small" color="primary">
//                   Share
//                 </Button>
//                 <Button size="small" color="primary">
//                   Learn More
//                 </Button>
//               </CardActions>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </div>
//   );
// }

// export default Posts;
