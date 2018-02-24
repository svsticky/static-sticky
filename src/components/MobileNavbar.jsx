import React from 'react';
import { Container, Icon, Menu } from 'semantic-ui-react';
import Link from 'gatsby-link';
import Radium from 'radium';
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
};

const MobileNavbar = () =>
  <div style={responsive.hide.tabletUp}>
    <Menu widths={3} fixed='bottom' icon='labeled' secondary style={styles.navbar}>
      <Menu.Item as={Link} to="/bestuur"style={styles.navbaritem}>
        <Icon name='users'/>
        Bestuur
      </Menu.Item>
      <Menu.Item as={Link} to="/carriere" style={styles.navbaritem}>
        <Icon name='briefcase'/>
        Carrière
      </Menu.Item>
      <Menu.Item as={Link} to="/onderwijs" style={styles.navbaritem}>
        <Icon name='student'/>
        Onderwijs
      </Menu.Item>
    </Menu>
  </div>

export default Radium(MobileNavbar);