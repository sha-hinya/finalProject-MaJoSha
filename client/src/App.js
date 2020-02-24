import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.js";
import Posts from "./components/Posts.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/" component={Posts} />
    </div>
  );
}

export default App;
