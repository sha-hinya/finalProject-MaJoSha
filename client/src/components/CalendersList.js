import React, { Component } from "react";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import TimeAgo from "react-timeago";

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
    this.setState({
      search: event.target.value
    });
  };

  render() {
    let filteredCalenders;

    filteredCalenders = this.props.calenders.filter(ele => {
      return ele.title.includes(this.state.search);
    });

    return (
      <div>
        <Paper className="calenderSerachBarContainer" component="form">
          <InputBase
            className="calenderSerachBar"
            placeholder="Search calender"
            value={this.state.searchText}
            onChange={this.changeText}
          />
        </Paper>

        {filteredCalenders.map(calender => {
          return (
            <Link key={calender._id} to={`/posts/${calender._id}`}>
              <div className="calenderCards" key={calender._id}>
                <div className="calenderCardsTitle">
                  <h4>{calender.title} </h4>
                </div>

                <h4 className="calenderCardsStatus"> {calender.status}</h4>

                <TimeAgo
                  className="calenderCardsDate"
                  date={calender.announcedAt}
                />
                <TimeAgo
                  className="calenderCardsDate"
                  date={calender.dueDate}
                />
              </div>
            </Link>
          );
        })}
      </div>
    );
  }
}

export default CalendersList;
