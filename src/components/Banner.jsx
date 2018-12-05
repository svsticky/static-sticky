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

  componentDidMount(){

  }

  renderLogos = allLogos => (
    <div className="card-container">
      <Card className="card">
          <div className="slide">
          <Slide {...properties} >
            {allLogos.map(logo => (
              <div className="each-slide" key={logo.node.id}>
                <Image src={logo.node.image.file.url} className="image" />
              </div>
            ))}
          </Slide>
          </div>
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
  autoplay: true
};

export const BannerWrapper = styled.div`
  width: 100%;
  .card-container {
    display: flex !important;
    justify-content: center;
    align-items: center;
    height: 125px;
  }
  .card {
    flex-grow: 1;
    height: 100%;
  }
  .slide {
    height: inherit;
  }
  .each-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    height: 125px;
  }
  .image {
    @media (min-width: 990px) {
      height: inherit;
    }
    @media (max-width: 990px) {
      height: 100px;
    }
    @media (max-width: 700px) {
      height: 80px;
    }
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
