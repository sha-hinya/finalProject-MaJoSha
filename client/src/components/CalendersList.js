import React, { Component } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import TimeAgo from "react-timeago";

const classes = {
  root: {
    padding: "2px 4px",
    display: "flex",
    textAlign: "left",
    marginBottom: "10px"
  },
  input: {
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    height: 28,
    margin: 4
  }
};

class CalendersList extends Component {
  state = {
    search: ""
  };

  updateSearch = search => {
    console.log("SEARCH", search);
    this.setState({
      search: search
    });
  };

  changeText = event => {
    // this.props.updateSearch(event.target.value);

    this.setState({
      search: event.target.value
    });
  };

  render() {
    let filteredCalenders;

    filteredCalenders = this.props.calenders.filter(ele => {
      return ele.title.includes(this.state.search);
    });

    //const classes = useStyles();

    //console.log(props.calenders);
    return (
      <div>
        <Paper component="form" className={classes.root}>
          {/* <InputBase
          className={classes.input}
          placeholder="Search calender"
          inputProps={{ "aria-label": "search calender" }}
          // value={this.state.search}
          // onChange={this.handleChange}
        /> */}

          {/* <SearchBar updateSearch={this.updateSearch} props={this.props} /> */}
          <div>
            <input value={this.state.searchText} onChange={this.changeText} />
          </div>
          <IconButton
            type="submit"
            className={classes.iconButton}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        </Paper>

        {filteredCalenders.map(calender => {
          return (
            <Link key={calender._id} to={`/files/${calender._id}`}>
              <div className="calenderCards" key={calender._id}>
                <TimeAgo
                  className="calenderCardsDate"
                  date={calender.announcedAt}
                />
                <TimeAgo
                  className="calenderCardsDate"
                  date={calender.dueDate}
                />

                <div className="calenderCardsTitle">
                  <h4>{calender.title} </h4>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    );
  }
}

export default CalendersList;
