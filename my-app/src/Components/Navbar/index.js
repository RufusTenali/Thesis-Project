import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
        <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/matchingCards" activeStyle>
            Matching Cards
          </NavLink>
          <NavLink to="/bananagram" activeStyle>
            Bananagrams
          </NavLink>
          <NavLink to="/info" activeStyle>
            More Information
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;