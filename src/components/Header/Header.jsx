import React from "react";

import "./Header.css";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import { FormattedMessage } from "react-intl";

const Navigation = () => {
  return (
    <header>
      <a href="#" class="logo">
        <span>Ani</span>Flix
      </a>
      <nav class="navbar">
        <Link to="start" spy={true} offset={-150} href="#start">
          <FormattedMessage id="home" defaultMessage="" />
        </Link>
        <Link to="anime" spy={true} offset={-150} href="#anime">
          <FormattedMessage id="anime" defaultMessage="" />
        </Link>
        <Link to="action" spy={true} offset={-150} href="#action">
          <FormattedMessage id="action" defaultMessage="" />
        </Link>
        <Link to="child" spy={true} offset={-150} href="#child">
          <FormattedMessage id="child" defaultMessage="" />
        </Link>
        <Link to="family" spy={true} offset={-150} href="#family">
          <FormattedMessage id="family" defaultMessage="" />
        </Link>
      </nav>
      <div class="icons">
        <i class="fas fa-bars" id="menu-bars"></i>
        <i class="fas fa-search" id="search-icon"></i>
        <a href="#" class="fas fa-heart"></a>
      </div>
    </header>
  );
};

export default React.memo(Navigation);
