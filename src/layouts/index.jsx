import React from 'react';
import Link from 'gatsby-link';
import { Button, Container, Menu } from 'semantic-ui-react';
import styled from 'styled-components';
import 'semantic-ui-css/semantic.min.css';

import logo from '../images/logo-sticky.png';
import '../css/index.scss';

export default ({ children }) => (
  <div>
    <Menu borderless size="huge" fixed="top">
      <Container>
        <Link to="/"><Logo src={logo} alt="" /></Link>
        <Menu.Menu position="right">
          <Menu.Item as={Link} to="/vereniging" name="Vereniging" />
          <Menu.Item as={Link} to="/vacatures" name="Bedrijven" />
          <Menu.Item as={Link} to="/onderwijs" name="Onderwijs" />
        </Menu.Menu>
        <Menu.Item>
          <Button href="https://koala.svsticky.nl/">Koala</Button>
        </Menu.Item>
      </Container>
    </Menu>
    <Content>
      {children()}
    </Content>
  </div>
);

const Content = styled(Container)`
  &&& {
    position: relative;
    top: 80px;
  }
`;

const Logo = styled.img`
  &&& {
    max-height: 3.2em;
    padding: 5px 18px 2px;
  }
`;
