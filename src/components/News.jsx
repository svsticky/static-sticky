import React from 'react';
import styled from 'styled-components';
import { graphql, StaticQuery } from 'gatsby';
import Pager from 'react-pager';

class News extends React.Component {
  constructor(props) {
    super(props);

    this.handlePageChanged = this.handlePageChanged.bind(this);
    this.newsItems = this.props.data.allContentfulNewsArticles.edges;

    this.state = {
      total: Math.ceil(this.newsItems.length / 5),
      current: 0,
      visiblePage: 3,
    };
  }

  handlePageChanged(newPage) {
    this.setState({ current: newPage });
  }

  renderNewsItems = (allItems, pageNum) => (
    <div>
      {allItems
        .filter(
          fitem =>
            allItems.indexOf(fitem) >= pageNum * 5 &&
            allItems.indexOf(fitem) < pageNum * 5 + 5
        )
        .map(item => {
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
        {this.renderNewsItems(this.newsItems, this.state.current)}
        <Pager
          total={this.state.total}
          current={this.state.current}
          visiblePages={this.state.visiblePage}
          titles={{ first: 'First', last: 'Last' }}
          onPageChanged={this.handlePageChanged}
        />
      </NewsWrapper>
    );
  }
}

export const NewsWrapper = styled.div`
  .content {
    margin-bottom: 1em;
    border-bottom: 1px solid #ddd;
  }
  .pagination {
    font-size: 25px;
    display: inline-block;
    padding-left: 0;
    margin: 10px 0;
    border: 1px solid #ddd;
    border-radius: 10px;

    > li {
      display: inline;
      > a,
      > span {
        position: relative;
        float: left;
        border-left: 1px solid #ddd;
      }
      &:first-child {
        > a,
        > span {
          margin-left: 0;
        }
      }
    }
    > li > a,
    > li > span {
      &:hover,
      &:focus {
        background-color: #ddd;
      }
    }
    > .active > a,
    > .active > span {
      &,
      &:hover,
      &:focus {
        z-index: 2;
        color: #4183c4;
        cursor: default;
      }
    }
    > .disabled {
      > span,
      > span:hover,
      > span:focus,
      > a,
      > a:hover,
      > a:focus {
        color: #444;
      }
    }
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
