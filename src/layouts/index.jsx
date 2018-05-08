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
    <div>
      <Navbar />
      <Content>
        {children()}
      </Content>
      <Footer />
      {/* <MobileNavbar /> */}
    </div>
  </MuiThemeProvider>
);


const Content = styled.div`
  margin-top: 4em;
  margin-bottom: 1em;
  width: 90%;
  margin: 0 auto;
`


export default layout;
