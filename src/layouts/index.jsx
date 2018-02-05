import React from 'react';
import Link from 'gatsby-link';
import { Container, Menu, Segment } from 'semantic-ui-react';
import styled from 'styled-components';
import 'semantic-ui-css/semantic.min.css';

import logo from '../images/logo-sticky.png';
import '../css/index.scss';

export default ({ children }) => (
  <div>
    <Menu size="massive" fixed="top">
      <Container>
        <Link to="/"><Logo src={logo} /></Link>
        <Menu.Menu position="right">
          <Menu.Item as={Link} to="/vereniging" name="Vereniging" />
          <Menu.Item as={Link} to="/vacatures" name="Bedrijven" />
          <Menu.Item as={Link} to="/onderwijs" name="Onderwijs" />
        </Menu.Menu>
      </Container>
    </Menu>
    <Content>
      <Segment>
        {children()}
      </Segment>
    </Content>
  </div>
);

const Content = styled(Container)`
  &&& {
    position: relative;
    top: 75px;
  }
`;

const Logo = styled.img`
  &&& {
    padding: 5px 20px 2px;
    height: 50px;
  }
`;
