import React from 'react'
import styled from 'styled-components'
import { graphql, StaticQuery } from 'gatsby'

class News extends React.Component {

  renderNewsItems = allItems => (
    <div className="news-container">
      {allItems.map(item => {
        return(
          <div>
            <h3>{item.node.title}</h3>
            <p>{item.node.dateOfPublishing}</p>
            <p className="content">{item.node.content.content.slice(0,300)}...</p>
          </div>
        )
      })}
    </div>
  )

  render(){
    return(
      <NewsWrapper>
        {this.renderNewsItems(this.props.data.allContentfulNewsArcticles.edges)}
      </NewsWrapper>
    );

  }
}

const NewsWrapper = styled.div`
  .news-container {

  }
  .content {
    margin-bottom: 1em;
    border-bottom: 1px solid #ddd;
  }
`

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allContentfulNewsArcticles{
  	       edges{
             node {
               id
               title
               dateOfPublishing
               content{
                 content
               }
             }
           }
	        }
        }
      `}
      render={data => <News data={data} {...props} />}
    />
)
