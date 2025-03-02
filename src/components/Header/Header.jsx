import { NavLink, useLocation } from "react-router-dom";
import { ReactSVG } from "react-svg";

import clsx from "clsx";
import css from "./Header.module.css";

import logo from "../../assets/logo.svg";

const Header = () => {
  const location = useLocation();
  return (
    <div className={css.header}>
      <ReactSVG src={logo} />
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) =>
            clsx(css.homeLink, isActive && css.active)
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/catalog"
          className={({ isActive }) =>
            clsx(
              css.catalogLink,
              isActive && !location.pathname.includes("/catalog/") && css.active
            )
          }
        >
          Catalog
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
