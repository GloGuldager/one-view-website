import React from "react";
import "./Navbar.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <a className="navbar-brand" href="/">
        React Google Books Search
      </a>
      <div id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item" id="home">
                        <a className="nav-link" href="/"><button type="button" className="btn btn-default search text-white">Search Books</button></a>
                    </li>
                    <li className="nav-item" id="report">
                        <a className="nav-link" href="/saved"><button type="button" className="btn btn-default saved text-white">Saved Books</button></a>
                    </li>
                </ul>
            </div>
    </nav>
  );
}

export default Nav;
