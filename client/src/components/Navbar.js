import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
//import { Avatar } from '@material-ui/core';
import PersonIcon from "@material-ui/icons/AccountBox";
import { Divider, IconButton } from "@material-ui/core";
import { Add } from "@material-ui/icons";

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
  const renderAdminSymbols = () => {
    return (
      <IconButton component={Link} to="/properties">
        <Add />
      </IconButton>
    );
  };
  return (
    <nav className="navbar" id="navbar">
      {showBackButton(props.showBackNavButton)}
      <div className="nav-title">{props.pageTitle}</div>
      {props.user.accessRole === "admin" ? renderAdminSymbols() : ""}
      <Divider orientation="vertical" flexItem="true" variant="fullWidth" />
      <Link className="profileIcon" onClick={logout} to="/">
        {/* <Link className="profileIcon" to="/profile" > */}
        <PersonIcon />
      </Link>
    </nav>
  );
};

export default Navbar;
