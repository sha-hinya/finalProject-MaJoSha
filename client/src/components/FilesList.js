import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
// import IconButton from "@material-ui/core/IconButton";
// import SearchIcon from "@material-ui/icons/Search";
import Card from "@material-ui/core/Card";

class FilesList extends Component {
  state = { search: "" };

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
    let filteredFiles;
    filteredFiles = this.props.files.filter(ele => {
      return ele.title.includes(this.state.search);
    });

    return (
      <div>
        <Paper className="calenderSerachBarContainer" component="form">
          <InputBase
            className="calenderSerachBar"
            placeholder="Search documents"
            value={this.state.searchText}
            onChange={this.changeText}
          />
        </Paper>

        {filteredFiles.map(file => {
          return (
            <Card key={file._id} className="cards-fileList">
              <Link key={file._id} to={`/files/${file._id}`}>
                <div className="fileCards" key={file._id}>
                  <div className="fileCardsTitle">
                    <h4>{file.title} </h4>
                  </div>
                  <div className="fileCardsCategory">
                    <h4>{file.category}</h4>
                  </div>
                  <div className="fileCardsDate">
                    
                      {new Date(file.announcedAt).toLocaleDateString("de-De")}
                    
                  </div>
                </div>
              </Link>
            </Card>
          );
        })}
      </div>
    );
  }
}

export default FilesList;
