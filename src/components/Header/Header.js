import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { NavBar } from "../../styles/NavBar";

import { GlobalContext } from "../../Context/GlobalContext";

const Header = () => {
  const { clearData } = useContext(GlobalContext);

  return (
    <NavBar>
      <Link onClick={clearData} to="/">
        <h1>
          <i class="fa-brands fa-github" style={{ color: "#fff" }}></i>
          Github Finder
        </h1>
      </Link>
      <ul>
        <li>
          <Link onClick={clearData} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/">Sobre</Link>
        </li>
      </ul>
    </NavBar>
  );
};

export default Header;
