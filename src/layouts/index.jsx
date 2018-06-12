import React from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import styled from 'styled-components';
import 'typeface-roboto';
import Navbar from '../components/Navbar';
import MobileNavbar from '../components/MobileNavbar';
import Footer from '../components/Footer';
import theme from '../styles/theme';
import globals from '../styles/globals.json';


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


// These are also the globals styles to the website in general
const SiteWrapper = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');
  font-family: "Open Sans";
  .content {
    a {
      color: rgb(${globals.boardColor});
      font-weight: bold;
    }
    margin: 5em auto 1em auto;
    ${globals.media.small} { width: 90%; }
    ${globals.media.medium} { width: 80%; }
    ${globals.media.large} { width: 70%; }
    ${globals.media.veryLarge} { width: 60%; }
  }
`


export default layout;
