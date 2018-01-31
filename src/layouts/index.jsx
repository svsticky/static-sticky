import React from 'react';
import Link from 'gatsby-link';
import { Container, Menu } from 'semantic-ui-react';
import styled from 'styled-components';

import 'semantic-ui-css/semantic.min.css';
import '../css/index.scss';


export default ({ children }) => (
  <div>
    <Menu size="large" fixed="top">
      <Link to="/">
        <Menu.Item name="Home" />
      </Link>
      <Link to="/vacatures">
        <Menu.Item name="Vacatures" />
      </Link>
    </Menu>
    <StyledContainer>
      {children()}
    </StyledContainer>
  </div>
);

const StyledContainer = styled(Container)`
    &&& { 
        position: relative;
        top: 75px;
    }
`;
