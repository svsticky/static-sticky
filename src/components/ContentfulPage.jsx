import React from 'react'
import Layout from './Layout'
import styled from 'styled-components'

export default ({ page, children }) => {
  return (
    <Layout>
      <PageWrapper>
        <div>
          <h2 className="title">{page.title}</h2>
        </div>
        <div>{children}</div>
      </PageWrapper>
    </Layout>
  )
}

const PageWrapper = styled.div`
  .title{
    border-bottom: 1px solid #ddd;
    margin-bottom: 10px;
  }
`
