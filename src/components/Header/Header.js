import React from "react";
import logo from '../../images/logo.jpg';
import "./Header.css"

const Header = () => {
  return (
    <>
      <nav className="navbar shadow " style={{backgroundColor: '#464242'}}>
        <div className="container-fliuid">
          <a className="navbar-brand" style={{color: 'white'}} href="/">
            <img
              src={logo}
              alt="Logo"
              width="100"
              className="d-inline-block align-text-top mx-3 rounded"
            />
            ClimaX
          </a>
        </div>
      </nav>
    </>
  );
};

export default Header;
