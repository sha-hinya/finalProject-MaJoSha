// Final Project
//
import React from "react";
import { Route } from "react-router-dom";
import "./App.scss";

// Navbar
import Navbar from './components/Navbar.js';

import LabelBottomNavigation from './components/BottomNavigation.js';

// Pages
import Dashboard from './pages/dashboard';
import LoginPage from './pages/login';

// Posts
import PostDetail from './pages/postDetail.jsx';
import PostForm from './components/PostForm.js';

// Announcements
import AnnouncementDetail from './components/AnnouncementDetail.js';
// import AnDetail from './components/AnnouncementDetail.js';

//Files
import File from "./components/File.js";
import FileDetail from "./components/FileDetail.js";
//import { BottomNavigation } from "@material-ui/core";

class App extends React.Component {
  state = {
    user: this.props.user,
  };

  setUser = (userObj) => {
    this.setState({
      user: userObj,
    });
  };

  render() {
    // if you are logged out, you are automatically redirected to the LoginPage!

    if (!!!this.state.user) {
      return (
        <div className='App'>
          <LoginPage history={this.props.history} setUser={this.setUser} />
        </div>
      );
    }

    return (
      <div className='App'>
        <Navbar setUser={this.setUser} user={this.state.user} />
        <div className='site-content'>
          {/* Announcement: List all Announcements */}
          <Route exact path='/' render={(props) => <Dashboard {...props} />} />

          {/* Announcement: View one Announcement */}
          <Route
            exact
            path='/announcements/:announcementId'
            render={(props) => <AnnouncementDetail {...props} />}
          />

          {/* Post: Create form */}
          <Route
            exact
            path='/posts'
            render={(props) => <PostForm {...props} />}
          ></Route>

          {/* Post: View one post */}
          <Route
            exact
            path='/posts/:postId'
            render={(props) => <PostDetail {...props} />}
          />
          {/* files */}
          <Route
            exact
            path='/files/:fileId'
            render={(props) => <FileDetail {...props} />}
          />
        </div>
        <LabelBottomNavigation className='bottom-nav' />
      </div>
    );
  }
}

export default App;
