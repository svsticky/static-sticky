import React from 'react';
import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Radium from 'radium';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const styles = {
  contentContainer: {
    marginTop: '5rem',
  },
};

const layout = ({ children }) => (
  <div>
    <Navbar />
    <div>
      <Container style={styles.contentContainer}>
        {children()}
      </Container>
      <Footer />
    </div>
  </div>
);

export default Radium(layout);
