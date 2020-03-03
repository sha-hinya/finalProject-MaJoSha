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
    textAlign: "left",
    marginBottom: "10px"
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

const CalendersList = props => {
  const classes = useStyles();
  //console.log(props.calenders);
  return (
    <div>
      <Paper component="form" className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Search calender"
          inputProps={{ "aria-label": "search calender" }}
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

      {props.calenders.map(calender => {
        return (
          <Link key={calender._id} to={`/files/${calender._id}`}>
            <div className="calenderCards" key={calender._id}>
              <div className="calenderCardsTitle">
                <p>{new Date(calender.created_at).toDateString("de-De")}</p>
              </div>
              <div className="calenderCardsTitle">
                <h4>{calender.title} </h4>
              </div>
              {/* <div className="calenderCardsCategory">
            <p>{calender.category}</p>
          </div> */}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default CalendersList;
