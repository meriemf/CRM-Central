import React from 'react';
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";

/* This defines the actual bar going down the screen */
const StyledSideNav = styled.div`
  position: fixed;
  height: 100%;
  width: 75px;
  z-index: 1;      /* Stay on top of everything */
  top: 3.75em;      /* Stay at the top */
  background-color: #5bc0de;
  overflow-x: hidden;     /* Disable horizontal scroll */
  padding-top: 10px;
`;
const NavIcon = styled.div`
`;
const StyledNavItem = styled.div`
  height: 70px;
  width: 75px; /* width must be same size as NavBar to center */
  text-align: center; /* Aligns <a> inside of NavIcon div */
  margin-bottom: 0;   /* Puts space between NavItems */
  a {
    font-size: 2.7em;
    color: ${(props) => props.active ? "white" : "#292b2c"};
    :hover {
      opacity: 0.7;
      text-decoration: none;
    }  
  }
`;

class NavItem extends React.Component {
  handleClick = () => {
    const { path, onItemClick } = this.props;
    onItemClick(path);
  }
  render() {
    const { active } = this.props;
    return (
      <StyledNavItem active={active}>
        <Link to={this.props.path} className={this.props.css} onClick={this.handleClick}>
          <NavIcon>
          </NavIcon>
        </Link>
      </StyledNavItem>
    );
  }
}


class SideNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePath: props.location.pathname,
      items: [
        {
          path: '/clients', /* path is used as id to check which NavItem is active basically */
          name: 'Client',
          css: 'fa fa-fw fa-user-circle',
          key: 1 /* Key is required, else console throws error. Does this please you Mr. Browser?! */
        },
        {
          path: '/clients/new',
          name: 'New Client',
          css: 'fa fa-fw fa-user-plus',
          key: 2
        },
        {
          path: '/projects',
          name: 'Projects',
          css: 'fas fa-envelope-square',
          key: 3
        },
        {
          path: '/projects/new',
          name: 'New Project',
          css: 'fa fa-fw fa-plus-square',
          key: 4
        },
        {
          path: '/dashboard',
          name: 'Dashboard',
          css: 'fa fa-fw fa-chart-area',
          key: 5
        },
      ]
    }  
  }

  onItemClick = (path) => {
    this.setState({ activePath: path }); /* Sets activePath which causes rerender which causes CSS to change */
  }

  render() {
    const { items, activePath } = this.state;
    return (
      <StyledSideNav>
        {
          /* items = just array AND map() loops thru that array AND item is param of that loop */
          items.map((item) => {
            /* Return however many NavItems in array to be rendered */
            return (
              <NavItem path={item.path} name={item.name} css={item.css} onItemClick={this.onItemClick} /* Simply passed an entire function to onClick prop */ active={item.path === activePath} key={item.key}/>
            )
          })
        }
      </StyledSideNav>
    );
  }
}

const RouterSideNav = withRouter(SideNav);

export default class Sidebar extends React.Component {
  render() {
    return (
      <RouterSideNav></RouterSideNav>
    );
  }
}