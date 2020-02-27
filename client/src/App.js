// Test- finalProject

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import './App.css';

// Private Route Component

// Navbar
import Navbar from './components/Navbar.js';
import Signup from './components/Signup.js';
import Login from './components/Login.js';

// Pages

import dashboard from './pages/dashboard';
import LoginPage from './pages/login';

// Posts
import Posts from './components/Posts.js';
import PostDetail from './components/PostDetail.js';

// Announcements
import Announcement from './components/Announcement.js';
import AnnouncementDetail from './components/AnnouncementDetail.js';

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
    console.log('Redirect?:', this.state.user);

    const redirect = this.state.user === null ? true : false;
    
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
        <Route
          path='/signup'
          render={(props) => (
            <Signup
              history={props.history}
              // {...props}
              setUser={this.setUser}
            />
          )}
          // component={Signup}
        />
        {/* posts */}
        <Route exact path='/' render={(props) => <Posts {...props} />} />
        <Route
          exact
          path='/posts/:postId'
          render={(props) => <PostDetail {...props} />}
        />
        {/* postings */}
        <Route exact path='/' render={(props) => <Announcement {...props} />} />
        <Route
          exact
          path='/announcements/:announcementId'
          render={(props) => <AnnouncementDetail {...props} />}
        />
      </div>
    );
  }
}

export default App;
