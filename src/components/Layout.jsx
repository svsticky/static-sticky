import React from 'react'
import styled from 'styled-components';
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import { Container } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const layout = ({ children }) => (
  <>
    <NavBar />
    <StyledContainer>{children}</StyledContainer>
    <Footer />
  </>
)

const StyledContainer = styled(Container)`
  padding: 3em 0;
`;


export default layout
