import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
//import { Avatar } from '@material-ui/core';
import IconButton from "@material-ui/core/IconButton";
import PersonIcon from "@material-ui/icons/AccountBox";

// icons
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const Navbar = props => {
  const logout = () => {
    axios.delete("/api/auth/logout").then(() => {
      props.setUser(null);
    });
  };

  const goBackHistory = () => {
    window.history.back();
  };

  const showBackButton = () => {
    if (props.showBackNavButton) {
      return (
        <IconButton className="back-btn" onClick={goBackHistory}>
          <ArrowBackIosIcon />
        </IconButton>
      );
    }
  };

  return (
    <nav className="navbar" id="navbar">
      {showBackButton(props.showBackNavButton)}
      <div className="nav-title">{props.pageTitle}</div>
      {/* <Link className="profileIcon" onClick={logout} to="/"> */}
      <Link className="profileIcon" to="/profile">
        <PersonIcon />
      </Link>
    </nav>
  );
};

export default Navbar;
