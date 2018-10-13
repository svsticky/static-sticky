import React from 'react'
import Layout from './Layout'
import styled from 'styled-components'
import { Card } from 'semantic-ui-react'

export default ({ page, children }) => {
  return (
    <Layout>
      <PageWrapper>
        <Card fluid>
          <Card.Content><h2>{page.title}</h2></Card.Content>
          <Card.Content>
            {children}
          </Card.Content>
        </Card>
      </PageWrapper>
    </Layout>
  )
}

const PageWrapper = styled.div`
  padding: 3em 0;
`;