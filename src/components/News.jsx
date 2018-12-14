import React from 'react';
import styled from 'styled-components';
import { graphql, StaticQuery } from 'gatsby';
import Pager from 'react-pager';

class News extends React.Component {
  constructor(props) {
    super(props);
    this.itemsPerPage = 5; //Change this to change the amount of items per page
    this.handlePageChanged = this.handlePageChanged.bind(this);
    this.newsItems = this.props.data.allContentfulNewsArticles.edges;

    this.state = {
      pageCount: Math.ceil(this.newsItems.length / this.itemsPerPage),
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
        .slice(pageNum * 5,pageNum * 5 + 5)
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
          total={this.state.pageCount}
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
    font-size: 18px;
    display: inline-block;
    padding-left: 0;
    margin: 0px 0;
    border: 1px solid #ddd;
    border-radius: 10px;

    > li {
      display: inline;
      > a,
      > span {
        position: relative;
        float: left;
        padding: 7px 7px;
        line-height: 20px;
        text-decoration: none;
        background-color: #fff;
        border: 1px solid #ddd;
        margin-left: -1px;
      }
      &:first-child {
        > a,
        > span {
          margin-left: 0;
          .border-left-radius(5px);
        }
      }
      &:last-child {
        > a,
        > span {
          .border-right-radius(5px);
        }
      }
    }

    > li > a,
    > li > span {
      &:hover,
      &:focus {
        color: #ccc;
        cursor: pointer;
      }
    }

    > .active > a,
    > .active > span {
      &,
      &:hover,
      &:focus {
        z-index: 2;
        color: #00f;
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
        color: #333;
        background-color: @pagination-disabled-bg;
        border-color: @pagination-disabled-border;
        cursor: default;
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
