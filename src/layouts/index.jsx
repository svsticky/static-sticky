import React from 'react';
import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { StyleRoot } from 'radium';
import Navbar from '../components/Navbar';
import MobileNavbar from '../components/MobileNavbar';
import Footer from '../components/Footer';

const styles = {
  contentContainer: {
    marginTop: '5em',
    '@media screen and (max-width: 768px)': {
      marginTop: '1em',
    }
  },
};

const layout = ({ children }) => (
  <StyleRoot>
    <Navbar />
    <div style={styles.contentContainer}>
      <Container>
        {children()}
      </Container>
      <Footer />
    </div>
    <MobileNavbar />
  </StyleRoot>
);

export default layout;
