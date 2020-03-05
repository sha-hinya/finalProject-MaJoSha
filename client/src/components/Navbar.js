import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
//import { Avatar } from '@material-ui/core';
import PersonIcon from "@material-ui/icons/AccountBox";
import { Divider, IconButton, Icon } from "@material-ui/core";
import { Add } from "@material-ui/icons";

// icons
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const Navbar = props => {
  const logout = () => {
    axios
      .delete("/api/auth/logout")
      .then(() => {
        props.setUser(null);
      })
      .catch(err => {
        console.log(err.message);
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
      <>
        <IconButton component={Link} to="/properties">
          <Add />
        </IconButton>
        <Divider
          orientation="vertical"
          flexItem="true"
          variant="fullWidth"
          style={{ backgroundColor: "black" }}
        />
      </>
    );
  };
  return (
    <nav className="navbar" id="navbar">
      <div className="nav-left">{showBackButton(props.showBackNavButton)}</div>
      <div className="nav-title">{props.pageTitle}</div>

      <div className="nav-right">
        {props.user.accessRole === "admin" ? renderAdminSymbols() : ""}

        <IconButton component={Link} to="/profile">
          {/* <Link className="profileIcon" to="/profile" > */}
          <PersonIcon />
        </IconButton>
      </div>
    </nav>
  );
};

export default Navbar;
