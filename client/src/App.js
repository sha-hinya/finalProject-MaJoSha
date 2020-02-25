import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.js";
import Posts from "./components/Posts.js";
import PostDetail from "./components/PostDetail.js";
import Signup from "./components/Signup.js";

class App extends React.Component {
  state = {
    user: null
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
        <Navbar user={this.state.user} />
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
        <Route exact path="/" component={Posts} />
        <Route exact path="/posts/:postId" component={PostDetail} />
      </div>
    );
  }
}

export default App;
