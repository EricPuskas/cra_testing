import React from "react";
import "./Header.scss";
import Logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header data-test="header">
      <div className="wrap">
        <div className="logo">
          <img src={Logo} alt="logo" data-test="logo" />
        </div>
        <div className="logo-title">CRA-Testing</div>
      </div>
    </header>
  );
};

export default Header;
