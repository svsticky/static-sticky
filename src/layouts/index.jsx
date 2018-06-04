import React from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import styled from 'styled-components';
import 'typeface-roboto';
import Navbar from '../components/Navbar';
import MobileNavbar from '../components/MobileNavbar';
import Footer from '../components/Footer';
import theme from '../styles/theme';


const layout = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    <SiteWrapper>
      <Navbar />
      <div className="content">
        {children()}
      </div>
      <Footer />
      {/* <MobileNavbar /> */}
    </SiteWrapper>
  </MuiThemeProvider>
);


const SiteWrapper = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');
  font-family: 'Open Sans', sans-serif;
  .content {

  }
`


export default layout;
