import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import logo from '../assets/logo.png'; 
//<img src={logo} alt="Kreditdebit" height="80"/>
/**
 * Navigation Component
 *
 * It renders the navigation links
 */
const Nav = ({ state }) => (
  <NavContainer className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="/"><img src={logo} alt="Kreditdebit" height="80"/></a>
        <div className="collapse navbar-collapse" id="mainnav">
        <ul className="nav justify-content-end">
        {state.theme.menu.map(([name, link]) => {
                  // Check if the link matched the current page url
                  const isCurrentPage = state.router.link === link;
                  return (
                  <li className={isCurrentPage ? "nav-item active" : "nav-item"} key={name}>
                    <a className="nav-link" href={link}>{name} <span className="sr-only">(current)</span></a>
                  </li>
                  );
                })}
        </ul>
        </div>
      </NavContainer>
);

export default connect(Nav);

const NavContainer = styled.nav`
`;

const NavItem = styled.div`
  padding: 0;
  margin: 0 16px;
  color: var(--brand);
  font-size: 0.9em;
  box-sizing: border-box;
  flex-shrink: 0;

  & > a {
    display: inline-block;
    line-height: 2em;
    color:var(--black);
    transition: all 0.3s ease;
    /* Use for semantic approach to style the current link */
    &[aria-current="page"] {
      color:var(--brand);
    }
    &:hover {
      color:var(--brand);
    }
  }

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;

    &:after {
      content: "";
      display: inline-block;
      width: 24px;
    }
  }
`;
