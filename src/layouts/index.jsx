import React from 'react';
import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import styled from 'styled-components';
import '../css/index.scss';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default ({ children }) => (
  <div>
    <Navbar />
    <Content>
      <Container>
        {children()}
      </Container>
      <Footer />
    </Content>
  </div>
);

const Content = styled.div`
  &&& {
    margin-top: 5em;
  }
`;
