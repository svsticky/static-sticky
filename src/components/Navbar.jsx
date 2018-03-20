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
    height: '2.8em',
    marginTop: '0.3em',
  },
};

const Navbar = () => (
  <div style={responsive.hide.tabletDown}>
    <Menu style={styles.navbar} fixed="top">
    <Container>
      <Link to="/"><img src={logo} alt="" style={styles.logo} /></Link>
      <Menu.Menu position="right">
        <Menu.Item as={Link} to="/bestuur" content="Bestuur" style={styles.navbaritem} />
        <Menu.Item as={Link} to="/vacatures" content="Vacatures" style={styles.navbaritem} />
        <Menu.Item as={Link} to="/onderwijs" content="Onderwijs" style={styles.navbaritem} />
      </Menu.Menu>
      </Container>
    </Menu>
  </div>
);

export default Radium(Navbar);
