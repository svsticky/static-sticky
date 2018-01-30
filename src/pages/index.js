import React from 'react';
import Link from 'gatsby-link';
import { Button, Container } from 'semantic-ui-react'

const HomePage = () => (
  <Container>
    <h1>S.V. Sticky</h1>
    <Link to="/vacatures/">VacatureIndex</Link>
  </Container>
)

export default HomePage
