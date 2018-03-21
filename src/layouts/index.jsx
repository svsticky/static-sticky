import React from 'react';
import Navbar from '../components/Navbar';
import MobileNavbar from '../components/MobileNavbar';
import Footer from '../components/Footer';
import 'typeface-roboto';
import { MuiThemeProvider } from 'material-ui/styles';
import theme from '../styles/theme';

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
