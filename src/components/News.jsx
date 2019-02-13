import React from 'react';
import styled from 'styled-components';
import { graphql, Link, StaticQuery } from 'gatsby';
import Pager from 'react-pager';
import Markdown from 'markdown-to-jsx';
import { GlobalState } from '$/data/Context';

class News extends React.Component {
  constructor(props) {
    super(props);
    this.newsItems = this.props.data.allContentfulNewsArticles.edges;

    this.state = {
      pageCount: Math.ceil(this.newsItems.length / this.props.itemsPerPage),
      visiblePage: 3,
    };
  }

  renderNewsItems = (allItems, pageNum) => (
    <div>
      {allItems
        .slice(
          pageNum * this.props.itemsPerPage,
          pageNum * this.props.itemsPerPage + this.props.itemsPerPage
        )
        .map(item => {
          return (
            <div key={item.node.id} className="newsItem">
              <h3>
                <Link to={'/news/' + item.node.slug}>{item.node.title}</Link>
              </h3>
              {item.node.dateOfPublishing}
              <div className="content">
                <Markdown>{item.node.content.content.slice(0, 300)}</Markdown>
                ...
                <Link to={'/news/' + item.node.slug}>lees verder</Link>
              </div>
            </div>
          );
        })}
    </div>
  );

  render() {
    return (
      <NewsWrapper>
        <GlobalState.Consumer>
          {context => (
            <>
              {this.renderNewsItems(
                this.newsItems,
                context.state.lastReadNewsPage
              )}
              <Pager
                total={this.state.pageCount}
                current={context.state.lastReadNewsPage}
                visiblePages={this.state.visiblePage}
                titles={{ first: 'First', last: 'Last' }}
                onPageChanged={newpage =>
                  context.actions.updateLastReadNewsPage(newpage)
                }
              />
            </>
          )}
        </GlobalState.Consumer>
      </NewsWrapper>
    );
  }
}

export const NewsWrapper = styled.div`
  .content {
    margin-bottom: 1em;
    border-bottom: 1px solid #ddd;
  }
  .newsItem {
    img {
      width: 250px;
      border: 3px solid #000;
      border-radius: 10px;
      margin: auto;
    }
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
          border-radius: 5px 0 0 5px;
        }
      }
      &:last-child {
        > a,
        > span {
          border-radius: 0 5px 5px 0;
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
        cursor: default;
      }
    }
  }
`;

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allContentfulNewsArticles(
          sort: { fields: [dateOfPublishing], order: DESC }
        ) {
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
