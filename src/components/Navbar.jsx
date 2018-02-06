import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { Button, Container, Dropdown, Menu } from 'semantic-ui-react';

import logo from '../images/logo-sticky.png';

const Navbar = () => (
  <Menu borderless size="huge" fixed="top">
    <Container>
      <Link to="/"><Logo src={logo} alt="" /></Link>
      <Menu.Menu position="right">
        <Dropdown item simple as={Link} to="/vereniging" text="Vereniging">
          <Dropdown.Menu>
            <Dropdown.Item as={Link} to="/besturen" text="Besturen" />
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown item simple as={Link} to="/bedrijven" text="Bedrijven">
          <Dropdown.Menu>
            <Dropdown.Item as={Link} to="/vacatures" text="Vacatures" />
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown item simple as={Link} to="/onderwijs" text="Onderwijs">
          <Dropdown.Menu>
            <Dropdown.Item as={Link} to="/medezeggenschap" text="Medezeggenschap" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>
      <Menu.Item>
        <Button size="mini" content="Koala" icon="right arrow" labelPosition="right" href="https://koala.svsticky.nl/" />
      </Menu.Item>
    </Container>
  </Menu>
);

export default Navbar;

const Logo = styled.img`
  &&& {
    max-height: 3.2em;
    padding: 5px 18px 2px;
  }
`;

