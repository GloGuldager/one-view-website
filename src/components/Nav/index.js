import React from "react";
import "./Navbar.css";

function Nav() {
  return (
    <div className="header">
      <img className="pull-left" href="/" src="../OneViewLogo.png" height="100px" alt="OneView Reviews Logo"></img>

      {/* // <div className="navbar navbar-expand-lg navbar-dark">
    //   <a className="navbar-brand" href="/">
    //   </a> */}
      <a href="/">Search Reviews</a>
      <a href="/saved">Saved Reviews</a>
      <a href="/login">Login</a>
      {/* <ul className="nav">
        <li className="list-item" id="home">
          <a className="list-button" href="/"><button type="button" className="btn search text-white">Search Reviews</button></a>
        </li>
        <li className="nav-item" id="report">
          <a className="nav-link" href="/saved"><button type="button" className="btn btn-default saved text-white">Saved Reviews</button></a>
        </li> */}
      {/* <li className="nav-item" id="report">
          <a className="nav-link" href="/results"><button type="button" className="btn btn-default saved text-white">Results</button></a>
        </li> */}
      {/* <li className="nav-item" id="report">
          <a className="nav-link" href="/login"><button type="button" className="btn btn-default saved text-white">Create Username</button></a>
        </li>
      </ul> */}
    </div>
  );
}

export default Nav;
