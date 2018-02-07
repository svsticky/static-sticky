import React from 'react';
import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default ({ children }) => (
  <div>
    <Navbar />
    <div>
      <Container>
        {children()}
      </Container>
      <Footer />
    </div>
  </div>
);
