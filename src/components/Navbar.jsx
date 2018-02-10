import React from 'react';
import { Container, Menu } from 'semantic-ui-react';
import Radium from 'radium';
import Link from 'gatsby-link';
import logo from '../images/logo-sticky-small.png';

const style = {
  navbar: {
    backgroundColor: '#000078',
    color: 'white',
  },
  navbaritem: {
    color: 'white',
  },
  logo: {
    height: '3.2em',
    marginTop: '0.3em',
  },
};

const Navbar = () => (
  <div>
    <Menu style={style.navbar} fixed="top">
      <Container>
        <Menu secondary>
          <Link to="/"><img src={logo} alt="" style={style.logo} /></Link>
          <Menu.Item as={Link} to="/bestuur" content="Bestuur" style={style.navbaritem} />
          <Menu.Item as={Link} to="/vacatures" content="Vacatures" style={style.navbaritem} />
          <Menu.Item as={Link} to="/onderwijs" content="Onderwijs" style={style.navbaritem} />
        </Menu>
      </Container>
    </Menu>
  </div>
);

export default Radium(Navbar);
