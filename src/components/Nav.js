import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <b>Reqres</b>
      <Link to="/" className="btn btn-secondary">
        Home
      </Link>
      <Link to="/list" className="btn btn-secondary">
        View List Of Users/Resources
      </Link>
      <Link to="/crud" className="btn btn-secondary">
        Create/Update/Delete
      </Link>
      <Link to="/register" className="btn btn-secondary">
        Register
      </Link>
      <Link to="/login" className="btn btn-secondary">
        Login
      </Link>
    </div>
  );
};

export default Nav;
