import React from 'react';
import { Container, Menu } from 'semantic-ui-react';
import Radium from 'radium';
import Link from 'gatsby-link';
import logo from '../images/logo-sticky-small.png';

const styles = {
  hideOnMobile: {
    display: 'block',
    '@media (max-width: 768px)': {
      display: 'none',
    },
  },
  navbar: {
    backgroundColor: '#000078',
    color: 'white',
    '@media (max-width: 768px)': {
      display: 'none'
    }
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
  <div style={styles.hideOnMobile}>
    <Menu style={styles.navbar} fixed="top">
      <Link to="/"><img src={logo} alt="" style={styles.logo} /></Link>
      <Menu.Item as={Link} to="/bestuur" content="Bestuur" style={styles.navbaritem} />
      <Menu.Item as={Link} to="/carriere" content="Carrière" style={styles.navbaritem} />
      <Menu.Item as={Link} to="/onderwijs" content="Onderwijs" style={styles.navbaritem} />
    </Menu>
  </div>
);

export default Radium(Navbar);
