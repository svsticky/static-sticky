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
      <div className="page">
        <div className="content">
          {children()}
        </div>
        <Footer />
      </div>
    </SiteWrapper>
  </MuiThemeProvider>
);

/* These are also the globals styles to the website in general. 
In .page there is an ugly hack to cancel out the standard 
margin: 8 on the body-element without messing with html.js */
const SiteWrapper = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');
  font-family: "Open Sans";
  .page {
    position: absolute;
    left: -8px;
    top: -8px;
    height: calc(100vh + 8px);
    width: calc(100vw + 8px);
    overflow-y: auto;
  }
  .content {
    a {
      color: rgb(${globals.boardColor});
      font-weight: bold;
    }
    margin: 5.5em auto 1em auto;
    ${globals.media.small} { width: 90%; }
    ${globals.media.medium} { width: 80%; }
    ${globals.media.large} { width: 70%; }
    ${globals.media.veryLarge} { width: 60%; }
  }
`


export default layout;
