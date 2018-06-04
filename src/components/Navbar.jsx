import React from 'react';
import Link from 'gatsby-link';
import logo from '../images/logo-sticky-small.png';
import styled from 'styled-components';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';


const Navbar = () => (
  <div style={{flexGrow: 1}}>
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <Logo component={Link} to="/" color="inherit">
          <img src={logo} alt=""/>
        </Logo>
        <div  style={{flex: 1}}></div>
        <Button component={Link} to="/sticky" color="inherit">
          Vereniging
        </Button>
        <Button component={Link} to="/partners/vacatures" color="inherit">
          Carrière
        </Button>
        <Button component={Link} to="/onderwijs" color="inherit">
          Onderwijs
        </Button>
      </Toolbar>
    </AppBar>
  </div>
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


const Logo = styled(Button)`
  img {
    height: 2.5em;
    margin-bottom: 0;
  }
`;


export default Navbar;
