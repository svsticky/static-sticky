import React from 'react';
import Link from 'gatsby-link';
import { Container, Menu } from 'semantic-ui-react';

import logo from '../images/logo-sticky.png';

const Navbar = () => (
  <Menu fixed="top">
    <Container>
      <Menu inverted secondary>
        <Link to="/"><img src={logo} alt="" /></Link>
        <Menu.Item as={Link} to="/bestuur">Bestuur</Menu.Item>
        <Menu.Item as={Link} to="/vacatures" content="Vacatures" />
        <Menu.Item as={Link} to="/onderwijs" content="Onderwijs" />
      </Menu>
    </Container>
  </Menu>
);

export default Navbar;
