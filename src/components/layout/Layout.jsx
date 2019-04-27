import '$/semantic/dist/semantic.min.css';
import React from 'react';
import styled from 'styled-components';
import NavBar from './Navbar';
import MobileNavbar from './MobileNavbar';
import Footer from './Footer';
import { Container } from 'semantic-ui-react';
import { device } from '../../data/Devices';
import { Helmet } from 'react-helmet';

const layout = ({ children, title }) => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
    </Helmet>
    <PageWrapper>
      <NavBar />
      <Container className="layout-container">{children}</Container>
      <Footer />
      <MobileNavbar />
    </PageWrapper>
  </>
);

const PageWrapper = styled.div`
  height: 100vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  background-color: #f8f8f4;
  .layout-container {
    flex-grow: 1;
    padding: 6rem 0 2rem 0;
    flex: 1;
    @media ${device.mobileMax} {
      padding: 2rem 0;
    }
  }
`;

export default layout;
