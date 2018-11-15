import React from 'react';
import styled from 'styled-components';
import { graphql, StaticQuery } from 'gatsby';

class News extends React.Component {
  renderNewsItems = allItems => (
    <div>
      {allItems.map(item => {
        return (
          <div key={item.node.id}>
            <h3>
              <a href={'/news/' + item.node.slug}>{item.node.title}</a>
            </h3>
            <p>{item.node.dateOfPublishing}</p>
            <p className="content">
              {item.node.content.content.slice(0, 300)}
              ...
              <a href={'/news/' + item.node.slug}>lees verder</a>
            </p>
          </div>
        );
      })}
    </div>
  );

  render() {
    return (
      <NewsWrapper>
        {this.renderNewsItems(this.props.data.allContentfulNewsArticles.edges)}
      </NewsWrapper>
    );
  }
}

export const NewsWrapper = styled.div`
  .content {
    margin-bottom: 1em;
    border-bottom: 1px solid #ddd;
  }
`;

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allContentfulNewsArticles {
          edges {
            node {
              id
              title
              slug
              dateOfPublishing
              content {
                content
              }
            }
          }
        }
      }
    `}
    render={data => <News data={data} {...props} />}
  />
);
