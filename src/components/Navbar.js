import { NavLink } from "react-router-dom";
import { FaBookReader, FaHome, FaBook } from "react-icons/fa";

import { SideNavbar, HeaderNav, IconNav, TitleNav } from "../styles/LayoutStyles";

export default function Navbar() {
  return(
    <SideNavbar>
      <HeaderNav>
        <IconNav>
          <FaBookReader/>
        </IconNav>
        <TitleNav>Books Register</TitleNav>
      </HeaderNav>
      <NavLink className={(navData) => "NavLink " + (navData.isActive ? "active" : "")} to="/">
        <FaHome/> Home
      </NavLink>
      <NavLink className={(navData) => "NavLink " + (navData.isActive ? "active" : "")} to="/create">
        <FaBook/> Create
      </NavLink>
    </SideNavbar>
  );
}