import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg ">
      <a className="navbar-brand" href="#">
        TBO ROOMS
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <a className="nav-link active" href="./Register">
             Register 
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/login">
              Login
              </a>  
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
