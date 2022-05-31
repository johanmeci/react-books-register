import { Link } from "react-router-dom";

import { SideNavbar } from "../styles/LayoutStyles";

export default function Navbar() {
  return(
    <SideNavbar>
      <Link to="/">Home</Link>
      <Link to="/create">Create</Link>
    </SideNavbar>
  );
}