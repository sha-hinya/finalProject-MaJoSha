import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center"
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    height: 28,
    margin: 4
  }
}));

const FilesList = props => {
  const classes = useStyles();
  //console.log(props.files);
  return (
    <div>
      <Paper component="form" className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Search all documents"
          inputProps={{ "aria-label": "search all files" }}
          // value={this.state.search}
          // onChange={this.handleChange}
        />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>

      {props.files.map(file => {
    return (
      <Link key={file._id} to={`/files/${file._id}`}>
        <div className="fileCards" key={file._id}>
          <div className="fileCardsTitle">
            <h4>{file.title} </h4>
          </div>
          <div className="fileCardsCategory">
            <p>{file.category}</p>
          </div>
          <div className="fileCardsTitle">
            <p>{new Date(file.created_at).toLocaleDateString("de-De")}</p>
          </div>
        </div>
      </Link>
         
        );
      })}
    </div>
  );

};

export default FilesList;
