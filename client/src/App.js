// Final Project
//
import React from "react";
import { Route, Link } from "react-router-dom";
import "./App.scss";

// Navbar
import Navbar from "./components/Navbar.js";

import LabelBottomNavigation from "./components/BottomNavigation.js";

// Pages
import Dashboard from "./pages/dashboard";
import LoginPage from "./pages/login";

// Posts
import PostDetail from "./components/PostDetail.js";
import PostForm from "./components/PostForm.js";

// Announcements
import AnnouncementDetail from "./components/AnnouncementDetail.js";
// import AnDetail from './components/AnnouncementDetail.js';

//Files
import File from "./components/File.js";
import FileDetail from "./components/FileDetail.js";
import { BottomNavigation } from "@material-ui/core";

class App extends React.Component {
  state = {
    user: this.props.user
  };

  setUser = userObj => {
    this.setState({
      user: userObj
    });
  };

  render() {
    console.log("Redirect?:", this.state.user);

    //const redirect = this.state.user === null ? true : false;

    // if you are logged out, you are automatically redirected to the LoginPage!

    if (!!!this.state.user) {
      return (
        <div className="App">
          <LoginPage history={this.props.history} setUser={this.setUser} />
        </div>
      );
    }

    return (
      <div className="App">
        <Navbar setUser={this.setUser} user={this.state.user} />

        {/* Announcement: List all Announcements */}
        <Route exact path="/" render={props => <Dashboard {...props} />} />

        {/* Announcement: View one Announcement */}
        <Route
          exact
          path="/announcements/:announcementId"
          render={props => <AnnouncementDetail {...props} />}
        />

        {/* Post: Create form */}
        <Route
          exact
          path="/posts"
          render={props => <PostForm {...props} />}
        ></Route>

        {/* Post: List all posts */}

        {/* Post: View one post */}
        <Route
          exact
          path="/posts/:postId"
          render={props => <PostDetail {...props} />}
        />
        {/* files */}
        <Route exact path="/files" render={props => <File {...props} />} />
        <Route
          exact
          path="/files/:fileId"
          render={props => <FileDetail {...props} />}
        />
        <LabelBottomNavigation />
      </div>
    );
  }
}

export default App;
