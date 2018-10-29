import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Banner from '../components/Banner'
import News from '../components/News'
import Drinks from '../components/Drinks'
import FeaturedJobs from '../components/FeaturedJobs'

const Index = (props) => {

  return(
    <Layout>
      <IndexWrapper>
        <h1>Homepage</h1>
        <div className="container">
          <div className="banner">
            <Banner />
          </div>
          <div className="news">
            <News />
          </div>
          <div className="drinks">
            <Drinks />
          </div>
          <div className="jobs">
            <FeaturedJobs />
          </div>
        </div>
      </IndexWrapper>
    </Layout>
  )
}

export const IndexWrapper = styled.div`
  &&&
  .container {
    display: grid;
    grid-template-columns: 33% 33% 29%%;
    grid-template-rows: auto;
    grid-template-areas:
      "banner banner banner"
      "news news drinks"
      "news news jobs";
    grid-gap: 2em;
  }
  .banner {
    grid-area: banner;
  }
  .news {
    grid-area: news;
  }
`

export default Index
