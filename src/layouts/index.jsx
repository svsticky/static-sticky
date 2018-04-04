import React from 'react';
import Navbar from '../components/Navbar';
import MobileNavbar from '../components/MobileNavbar';
import Footer from '../components/Footer';
import { MuiThemeProvider } from 'material-ui/styles';
import theme from '../styles/theme';
import 'typeface-roboto';

const layout = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    <div>
      <Navbar />
      <div>
        {children()}
      </div>
      <Footer />
      <MobileNavbar />
    </div>
  </MuiThemeProvider>
);

export default layout;
