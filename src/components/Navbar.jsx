import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { Toolbar, AppBar, Button } from '@material-ui/core';
import logo from '../images/logo-sticky-small.png';

const Navbar = () => (
  <div style={{ flexGrow: 1 }}>
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <Logo component={Link} to="/" color="inherit">
          <img src={logo} alt="Sticky logo" />
        </Logo>
        <div style={{ flex: 1 }} />
        <Button component={Link} to="/vereniging" color="inherit">
          Vereniging
        </Button>
        <Button component={Link} to="/vacatures" color="inherit">
          Carrière
        </Button>
        <Button component={Link} to="/onderwijs" color="inherit">
          Onderwijs
        </Button>
      </Toolbar>
    </AppBar>
  </div>
);


const Logo = styled(Button)`
  img {
    height: 3.2em;
    margin-bottom: 0;
  }
`;


export default Navbar;
