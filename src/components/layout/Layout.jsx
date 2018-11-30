import React from 'react';
import styled from 'styled-components';
import Responsive from 'react-responsive';
import NavBar from './Navbar';
import MobileNavbar from './MobileNavbar';
import Footer from './Footer';
import { Container } from 'semantic-ui-react';
import '$/semantic/dist/semantic.min.css';

const Desktop = props => <Responsive {...props} minWidth={768} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;

const layout = ({ children }) => (
  <>
    <PageWrapper>
      <Desktop>
        <NavBar />
      </Desktop>
      <StyledContainer className="content">{children}</StyledContainer>
      <Footer />
    </PageWrapper>
    <Mobile>
      <MobileNavbar />
    </Mobile>
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
