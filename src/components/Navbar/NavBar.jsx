import React from "react";
import { NavLink } from "react-router-dom";
import { logout } from "../../util/CookieUtils.js";
import "./navbar.css";

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light  mb-4 wrap">
        <NavLink to="/Bookshelf" className="navbar-brand" id="title">
          <u>MyBookshelf</u>
        </NavLink>

        <ul className="navbar-nav mr-auto ">
          <li className="nav-item active">
            <NavLink to="/Search" className="nav-link">
              <svg
                className="bi bi-search"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
                  clipRule="evenodd"
                />
              </svg>
              Search
            </NavLink>
          </li>
        </ul>
        <ul className="navbar-nav ">
          <li className="nav-item  ">
            <NavLink to="/" className="nav-link" onClick={logout}>
              Logout
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
