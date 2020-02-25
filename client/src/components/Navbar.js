import React from "react";
import { Link } from "react-router-dom";

const Navbar = props => {
  if (props.user) {
    return (
      <nav className="navbar">
        <Link to="/">Home</Link>
      </nav>
    );
  }
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
    </nav>
  );
};

export default Navbar;
