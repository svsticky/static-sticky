import '$/semantic/dist/semantic.min.css';
import React from 'react';
import Context from '$/data/Context';
import styled from 'styled-components';
import NavBar from './Navbar';
import MobileNavbar from './MobileNavbar';
import Footer from './Footer';
import { Container } from 'semantic-ui-react';
import { device } from '../../data/Devices';

const layout = ({ children }) => (
  <Context>
    <NavBar />
    <PageWrapper>
      <StyledContainer className="content">{children}</StyledContainer>
      <Footer />
    </PageWrapper>
    <MobileNavbar />
  </Context>
);

const StyledContainer = styled(Container)`
  padding: 1em 0;
  @media ${device.tablet} {
    padding: 5em 0;
  }
`;

const PageWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: rgb(244, 243, 239);
  overflow: auto;
  background-color: #f8f8f4;
  .content {
    flex: 1;
  }
`;

export default layout;
