import React from 'react';
import { Container, Menu } from 'semantic-ui-react';
import Radium from 'radium';
import Link from 'gatsby-link';
import logo from '../images/logo-sticky-small.png';
import globalStyles from '../styles/globalStyles';
import responsive from '../styles/responsive';

const styles = {
  navbar: {
    backgroundColor: globalStyles.theme.bestuurskleur,
    color: 'white',
  },
  navbaritem: {
    color: 'white',
  },
  logo: {
    height: '3.2em',
    margin: '0.3em 0 0 0.5em',
  },
};

const Navbar = () => (
  <div style={responsive.hide.tabletDown}>
    <Menu style={styles.navbar} fixed="top">
      <Link to="/"><img src={logo} alt="" style={styles.logo} /></Link>
      <Menu.Item as={Link} to="/bestuur" content="Bestuur" style={styles.navbaritem} />
      <Menu.Item as={Link} to="/carriere" content="Carrière" style={styles.navbaritem} />
      <Menu.Item as={Link} to="/onderwijs" content="Onderwijs" style={styles.navbaritem} />
    </Menu>
  </div>
);

export default Radium(Navbar);
