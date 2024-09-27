import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-danger bg-danger">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">
            <i className="text-warning">Food Hunt Paradise</i>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <li className="nav-item">
                <Link
                  className="nav-link active text-warning"
                  aria-current="page"
                  to="/home">
                  <i> Home</i>
                </Link>
              </li>
              <li className="nav-item ">
                <a className="nav-link text-warning" href="/pizzainfo">
                  <i>All List</i>
                </a>
              </li> */}
            </ul>
            <button className="btn btn-outline-warning" type="submit">
              <Link to="/login" className="text-decoration-none text-light">
                Login
              </Link>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
