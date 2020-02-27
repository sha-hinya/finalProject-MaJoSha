// Test- finalProject

import React from "react";
import { Route } from "react-router-dom";
import "./App.css";

// Navbar
import Navbar from "./components/Navbar.js";
import Signup from "./components/Signup.js";
import Login from "./components/Login.js";

// Posts
import Posts from "./components/Posts.js";
import PostDetail from "./components/PostDetail.js";

// Announcements
import Announcement from "./components/Announcement.js";
import AnnouncementDetail from "./components/AnnouncementDetail.js";

//Documents
import Document from "./components/Document.js";
import DocumentDetail from "./components/DocumentDetail.js";

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

        {/* posts */}
        <Route exact path="/" render={props => <Posts {...props} />} />
        <Route
          exact
          path="/posts/:postId"
          render={props => <PostDetail {...props} />}
        />

        {/* postings */}
        <Route exact path="/" render={props => <Announcement {...props} />} />

        <Route
          exact
          path="/announcements/:announcementId"
          render={props => <AnnouncementDetail {...props} />}
        />
        {/* documents */}
        <Route exact path="/" render={props => <Document {...props} />} />
        <Route
          exact
          path="/documents/:documentId"
          render={props => <DocumentDetail {...props} />}
        />
      </div>
    );
  }
}

export default App;
