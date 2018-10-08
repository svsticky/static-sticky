import React from 'react'
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import { Container } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const layout = ({ children }) => (
  <>
    <NavBar />
    <Container>{children}</Container>
    <Footer />
  </>
)

export default layout
