import React from 'react';
import Link from 'gatsby-link';
import logo from '../images/logo-sticky-small.png';
import styled from 'styled-components';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const Navbar = () => (
  <AppBar position="fixed" color="primary">
    <Toolbar>
      <Logo to="/"><img src={logo} alt=""/></Logo>
    </Toolbar>
  </AppBar>
  // <NavbarContainer>
  //   <div>
  //     
  //     <div>
  //       <NavbarItem to="/besturen" content="Bestuur" />
  //       <NavbarItem to="/vacatures" content="Vacatures" />
  //       <NavbarItem to="/onderwijs" content="Onderwijs" />
  //     </div>
  //   </div>
  // </NavbarContainer>
);

const NavbarContainer = styled.div`
  background-color: '#000078';
  color: 'white';
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavbarItem = styled.div`
  color: 'white';
`;

const Logo = styled(Link)`
  img { 
    height: 50px;
    margin-top: 2px;
    margin-left: -12px;
  }
`


export default Navbar;
