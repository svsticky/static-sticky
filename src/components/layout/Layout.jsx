import React from 'react';
import styled from 'styled-components';
import NavBar from './Navbar';
import Footer from './Footer';
import { Container } from 'semantic-ui-react';
import '../../semantic/dist/semantic.min.css';

const layout = ({ children }) => (
  <>
    <PageWrapper>
      <NavBar />
      <StyledContainer className="content">{children}</StyledContainer>
      <Footer />
    </PageWrapper>
  </>
);

const StyledContainer = styled(Container)`
  padding: 3em 0;
`;

const PageWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;

  .content {
    flex: 1;
  }
`;

export default layout;
