import React from 'react';
import styled from 'styled-components';
import { graphql, Link, StaticQuery } from 'gatsby';
import Pager from 'react-pager';
import Markdown from 'markdown-to-jsx';
import { GlobalState } from '$/data/Context';
import { Card, List } from 'semantic-ui-react';
import { device } from '../data/Devices';

class News extends React.Component {
  constructor(props) {
    super(props);
    const language = localStorage.getItem('language') || 'nl'; // Default fallback to Dutch
    this.newsItems = this.props.data.allContentfulNewsArticles.edges.filter(
      content => content.node.node_locale === language // Only get the current language
    );
    this.state = {
      pageCount: Math.ceil(this.newsItems.length / this.props.itemsPerPage),
      visiblePage: 3,
    };
  }

  renderNewsItems = (allItems, pageNum) => (
    <List divided relaxed>
      {allItems
        .slice(
          pageNum * this.props.itemsPerPage,
          pageNum * this.props.itemsPerPage + this.props.itemsPerPage
        )
        .map(item => {
          return (
            <Link
              to={'/news/' + item.node.slug}
              key={item.node.id}
              className="news-item"
            >
              <div className="news-item-content">
                <div className="news-item-header">
                  <h3>{item.node.title}</h3>
                  <p className="date">
                    <i>{item.node.dateOfPublishing}</i>
                  </p>
                </div>
                <List.Description>
                  <Markdown>{item.node.content.content.slice(0, 300)}</Markdown>
                </List.Description>
              </div>
              {item.node.frontPageImage && (
                <div className="news-item-image">
                  <img
                    src={item.node.frontPageImage.file.url}
                    alt={'Front page image of news article: ' + item.node.title}
                  />
                </div>
              )}
            </Link>
          );
        })}
    </List>
  );

  render() {
    return (
      <NewsWrapper>
        <h2>Nieuws</h2>
        <Card fluid className="news-list">
          <GlobalState.Consumer>
            {context => (
              <>
                {this.renderNewsItems(
                  this.newsItems,
                  context.state.lastReadNewsPage
                )}
                <div className="pager-container">
                  <Pager
                    total={this.state.pageCount}
                    current={context.state.lastReadNewsPage}
                    visiblePages={this.state.visiblePage}
                    titles={{ first: 'First', last: 'Last' }}
                    onPageChanged={newpage =>
                      context.actions.updateLastReadNewsPage(newpage)
                    }
                  />
                </div>
              </>
            )}
          </GlobalState.Consumer>
        </Card>
      </NewsWrapper>
    );
  }
}

export const NewsWrapper = styled.div`
  &&& {
    .news-list {
      padding: 0.5rem;
    }
    .news-item {
      color: black;
      display: flex;
      padding: 1rem;
      transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
      border-bottom: 1px solid #ddd;
      @media ${device.mobileMax} {
        flex-direction: column-reverse; /* make sure image is above content, not below */
      }
      &-content {
        flex: 3;
      }
      &-header {
        display: flex;
        justify-content: start;
        align-items: baseline;
        .date {
          margin-left: 0.5em;
        }
      }
      &-image {
        flex: 1;
        width: 200px;
        @media ${device.mobileMax} {
          width: 100%;
          margin-bottom: 1rem;
        }
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 80%;
        }
      }
      &:hover {
        border-radius: 5px;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
      }
    }
    .pager-container {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .pagination {
      font-size: 18px;
      display: inline-block;
      padding-left: 0;
      margin: 0px 0;
      border: 1px solid #ddd;
      border-radius: 5px;

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
              node_locale
              frontPageImage {
                file {
                  url
                }
              }
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
