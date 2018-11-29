import React from 'react';
import { Slide } from 'react-slideshow-image';
import styled from 'styled-components';
import { graphql, StaticQuery } from 'gatsby';
import { Card, Image } from 'semantic-ui-react';

class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.allLogos = props.data.allContentfulBannerLogo.edges;
    this.state = {
      logos: this.allLogos,
    };
  }

  renderLogos = allLogos => (
    <div className="card-container">
      <Card className="card">
        <Card.Content className="card-content">
          <Slide {...properties} className="slide">
            {allLogos.map(logo => (
              <div className="each-slide" key={logo.node.id}>
                <Image src={logo.node.image.file.url} className="image" />
              </div>
            ))}
          </Slide>
        </Card.Content>
      </Card>
    </div>
  );

  render() {
    return <BannerWrapper>{this.renderLogos(this.state.logos)}</BannerWrapper>;
  }
}

const properties = {
  duration: 8000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: true,
};

export const BannerWrapper = styled.div`
  width: 100%;
  .card-container {
    display: flex !important;
    justify-content: center;
    align-items: center;
    height: 125px !important;
  }
  .card {
    flex-grow: 1;
    height: 100% !important;
  }
  .card-content {
    height: 100% !important;
  }
  .slide {
    height: 100% !important;
  }
  .each-slide {
    display: flex;
    height: 110px;
    justify-content: center;
  }
  .image {
    height: inherit !important;
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
