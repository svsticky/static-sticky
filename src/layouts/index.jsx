import React from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import MobileNavbar from '../components/MobileNavbar';
import Footer from '../components/Footer';
import theme from '../styles/theme';
import 'typeface-roboto';

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
  margin-top: 5.2em
`

export default layout;
