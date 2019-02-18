import '$/semantic/dist/semantic.min.css';
import React from 'react';
import styled from 'styled-components';
import NavBar from './Navbar';
import MobileNavbar from './MobileNavbar';
import Footer from './Footer';
import { Container } from 'semantic-ui-react';
import { device } from '../../data/Devices';

const layout = ({ children }) => (
  <>
    <NavBar />
    <PageWrapper>
      <Container className="container">{children}</Container>
      <Footer />
    </PageWrapper>
    <MobileNavbar />
  </>
);

const PageWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: rgb(244, 243, 239);
  overflow: auto;
  background-color: #f8f8f4;
  .container {
    padding: 5rem 0 1rem 0;
    flex: 1;
    @media ${device.mobileMax} {
      padding: 1rem 0;
    }
  }
`;

export default layout;
