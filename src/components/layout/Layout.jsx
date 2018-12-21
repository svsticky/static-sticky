import '$/semantic/dist/semantic.min.css';
import React from 'react';
import styled from 'styled-components';
import NavBar from './Navbar';
import MobileNavbar from './MobileNavbar';
import Footer from './Footer';
import { Container } from 'semantic-ui-react';

const layout = ({ children }) => (
  <>
    <NavBar />
    <PageWrapper>
      <StyledContainer className="content">{children}</StyledContainer>
      <Footer />
    </PageWrapper>
    <MobileNavbar />
  </>
);

const StyledContainer = styled(Container)`
  padding: 5em 0;
`;

const PageWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: rgb(244, 243, 239);
  overflow: auto;
  .content {
    flex: 1;
  }
`;

export default layout;
