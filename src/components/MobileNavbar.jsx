import React from 'react';
import { Container, Icon, Menu } from 'semantic-ui-react';
import Link from 'gatsby-link';
import Radium from 'radium';
import globalStyles from '../styles/globalStyles';

const scopedStyles = {
  navbar: {
    backgroundColor: globalStyles.theme.bestuurskleur,
    color: 'white',
  },
  navbaritem: {
    color: 'white',
  },
};

const MobileNavbar = () =>
  <div style={globalStyles.media.hideOnTabletAndUp}>
    <Menu widths={4} fixed='bottom' icon='labeled' secondary style={scopedStyles.navbar}>
      <Menu.Item as={Link} to="/bestuur"style={scopedStyles.navbaritem}>
        <Icon name='users'/>
        Bestuur
      </Menu.Item>
      <Menu.Item as={Link} to="/carriere" style={scopedStyles.navbaritem}>
        <Icon name='briefcase'/>
        Carrière
      </Menu.Item>
      <Menu.Item as={Link} to="/onderwijs" style={scopedStyles.navbaritem}>
        <Icon name='student'/>
        Onderwijs
      </Menu.Item>
    </Menu>
  </div>

export default Radium(MobileNavbar);