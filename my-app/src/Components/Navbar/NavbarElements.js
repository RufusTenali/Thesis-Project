import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
  
export const Nav = styled.nav`
  background: rgb(68, 2, 68);
  height: 85px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
  margin: -8px;
  margin-bottom: 5px
`;
  
export const NavLink = styled(Link)`
  color: white;
  font-size: 20px;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: grey;
  }
`;
  
export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
    position: flex;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
  
export const NavMenu = styled.div`
  display: flex;
  align-items: left;
  margin-right: -24px;
  Second Nav
  margin-right: 24px;
  Third Nav
  width: 100vw;
white-space: wrap;
  @media screen and (max-width: 350px) {
    display: none;
  }
  color: white;
`;