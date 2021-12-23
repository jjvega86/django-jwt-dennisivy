import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <span> | </span>
      <Link to="/login">Login</Link>
      <span> | </span>
      <Link to="/private">Private</Link>
    </div>
  );
};

export default Header;
