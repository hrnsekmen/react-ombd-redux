import React from "react";
import { Link } from "react-router-dom";
import SearchFormTop from "../home/SearchFormTop";

function Navbar() {
  return (
    <nav class="p-3 navbar navbar-expand-lg navbar-light bg-white ">
      <div></div>
      <Link
        className=" ml-5 p-3 navbar-brand text-white text-lg brand-text "
        style={{ fontWeight: "bold", letterSpacing: "0.1rem" }}
        to="/"
      >
        <span style={{ color: "black" }}>Movie</span>
        <span style={{ color: "#F5C518" }}>UP</span>
      </Link>
      <button class="navbar-toggler" type="button">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="ml-4  mr-4 nav-item active">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li class="nav-item dropdown"></li>
        </ul>
        <SearchFormTop />
      </div>
    </nav>
  );
}

export default Navbar;
