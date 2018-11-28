import React from 'react';
import styled from 'styled-components';
import { graphql, StaticQuery } from 'gatsby';
import { Card, Image, Icon } from 'semantic-ui-react';
import $ from 'jquery';

class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.prev = 0;
    this.dir = 1;
  }

  autoScroll = () => {
    let action = this.scroll(this.dir);
    if (action === this.prev) {
      this.dir = this.dir * -1;
    }
    this.prev = action;
  };

  scroll = direction => {
    let far = ($('.card-content').width() / 2) * direction;
    let pos = $('.card-content').scrollLeft() + far;
    $('.card-content').animate({ scrollLeft: pos }, 1000);
    return pos;
  };

  renderLogos = allLogos => (
    <div>
      <Card fluid className="card">
        <Icon
          className="arrowl"
          name="chevron circle left"
          size="large"
          onClick={() => this.scroll(-1)}
        />
        <Card.Content className="card-content">
          {allLogos.map(logo => {
            return (
              <Image
                className="image"
                key={logo.node.id}
                size="small"
                src={logo.node.image.file.url}
              />
            );
          })}
        </Card.Content>
        <Icon
          className="arrowr"
          name="chevron circle right"
          size="large"
          onClick={() => this.scroll(1)}
        />
      </Card>
    </div>
  );

  componentDidMount() {
    setInterval(this.autoScroll, 5000);
  }

  render() {
    return (
      <BannerWrapper className="banner">
        {this.renderLogos(this.props.data.allContentfulBannerLogo.edges)}
      </BannerWrapper>
    );
  }
}

export const BannerWrapper = styled.div`
  .card {
    display: flex;
    flex-direction: row;
    flex-wrap: no wrap;
    align-items: center;
    height: 125pt;
  }
  .card-content {
    position: relative;
    vertical-align: middle;
    horizontal-align: center;
    display: inline-block;
    white-space: nowrap;
    overflow-x: hidden;
    overflow-y: hidden;
    width: 100%;
  }
  .card-content:hover {
    overflow-x: auto;
  }
  .image {
    margin-left: 2em;
    margin-right: 2em;
    margin-bottom: 1em;
  }
  .arrowl {
    position: absolute;
    left: 10pt;
    top: 45%;
  }
  .arrowr {
    position: absolute;
    right: 10pt;
    top: 45%;
  }
`;

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allContentfulBannerLogo {
          edges {
            node {
              id
              title
              image {
                file {
                  url
                }
              }
            }
          }
        }
      }
    `}
    render={data => <Banner data={data} {...props} />}
  />
);
