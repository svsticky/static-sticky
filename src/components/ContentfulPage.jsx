import React from 'react'
import Layout from './Layout'
import styled from 'styled-components'
import { Card } from 'semantic-ui-react'

export default ({ page, children }) => {
  return (
    <Layout>
      <PageWrapper fluid>
        <h1 className="title">{page.title}</h1>
        {children}
      </PageWrapper>
    </Layout>
  )
}

const PageWrapper = styled(Card)`
  padding: 1em;
  .title {
    margin: 0;
    padding-bottom: 0.5em;
    border-bottom: 1px solid #ececec;
  }
`