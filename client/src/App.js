// Final Project
//
import React from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";

// Navbar
import Navbar from "./components/Navbar.js";
import Signup from "./components/Signup.js";
import Login from "./components/Login.js";

// Posts
import Posts from "./components/Posts.js";
import PostDetail from "./components/PostDetail.js";
import PostForm from "./components/PostForm.js";

// Announcements
import Announcement from "./components/Announcement.js";
import AnnouncementDetail from "./components/AnnouncementDetail.js";

//Files
import File from "./components/File.js";
import FileDetail from "./components/FileDetail.js";

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
    console.log("<App/> render: ", this.state.user);

    return (
      <div className="App">
        <Navbar setUser={this.setUser} user={this.state.user} />
        <Route
          path="/signup"
          render={props => (
            <Signup
              history={props.history}
              // {...props}
              setUser={this.setUser}
            />
          )}
          // component={Signup}
        />
        <Route
          path="/login"
          render={props => (
            <Login history={props.history} setUser={this.setUser} />
          )}
        />

        {/* Announcement: List all Announcements */}
        <Route exact path="/" render={props => <Announcement {...props} />} />

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
        <Link to="/posts"> new post </Link>

        {/* Post: List all posts */}
        <Route exact path="/" render={props => <Posts {...props} />} />

        {/* Post: View one post */}
        <Route
          exact
          path="/posts/:postId"
          render={props => <PostDetail {...props} />}
        />
        {/* files */}
        <Route exact path="/" render={props => <File {...props} />} />
        <Route
          exact
          path="/files/:fileId"
          render={props => <FileDetail {...props} />}
        />
      </div>
    );
  }
}

export default App;
