import { NavLink } from "react-router-dom";
import { ReactSVG } from "react-svg";

import logo from "../../assets/logo.svg";

import css from "./Header.module.css";
import clsx from "clsx";

const Header = () => {
  return (
    <div className={css.header}>
      <ReactSVG src={logo} />
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => clsx (css.homeLink, isActive && css.active)
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/catalog"
          className={({ isActive }) => clsx (css.catalogLink, isActive && css.active)
          }
        >
          Catalog
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
