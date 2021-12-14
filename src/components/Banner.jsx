import React from 'react';
import { Slide } from 'react-slideshow-image';
import styled from 'styled-components';
import { graphql, StaticQuery } from 'gatsby';
import { Card, Image } from 'semantic-ui-react';
import { device } from '../data/Devices';
import 'react-slideshow-image/dist/styles.css';

class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.prev = 0;
    this.dir = 1;
    this.state = {
      logos: props.data.allContentfulBannerLogo.edges,
      visibility: 'hidden',
    };
  }

  componentDidMount() {
    this.setState({
      visibility: 'visible',
    });
  }

  renderLogos = allLogos => (
    <div className="card-container">
      <Card className="card">
        <div className="slide">
          <Slide {...properties}>
            {shuffleArray(allLogos).map(logo => (
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
    return (
      <BannerWrapper visible={this.state.visibility}>
        {this.renderLogos(this.state.logos)}
      </BannerWrapper>
    );
  }
}

const properties = {
  duration: 8000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: true,
  autoplay: true,
};

const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const BannerWrapper = styled.div`
  width: 100%;
  .card-container {
    display: flex !important;
    justify-content: center;
    align-items: center;
    height: 10rem;
    width: 100%;
  }
  .card {
    flex-grow: 1;
    height: 100%;
    padding: 1rem;
  }
  .slide {
    visibility: ${props => props.visible};
    height: 100%;
  }
  .each-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 8rem;
  }
  .image {
    height: 100%;
    @media ${device.mobileMax} {
      width: 90%;
      height: auto;
    }
  }
`;

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allContentfulBannerLogo(filter: { node_locale: { eq: "nl" } }) {
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
