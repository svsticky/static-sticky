import React from 'react';
import styled from 'styled-components';
import { graphql, StaticQuery } from 'gatsby';
import { Card, Image } from 'semantic-ui-react';
import { getRandomSubSet } from '../utils.jsx';

class Banner extends React.Component {

  renderLogos = allLogos => (
    <Card fluid >
      <Card.Content className="card-content">
        {getRandomSubSet(allLogos, 5).map(logo => {
          return(
            <Image className="image" key={logo.node.id} size="small" src={logo.node.image.file.url} />
          );
        })}
      </Card.Content>
    </Card>
  )

  render(){
    return(
      <BannerWrapper className="banner">
        {this.renderLogos(this.props.data.allContentfulBannerLogo.edges)}
        </BannerWrapper>
      );
  }
}

const BannerWrapper = styled.div`
  padding-bottom: 3em;
  .card-content{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
  }
  .image{
    margin-left: 2em;
    margin-right: 2em;
    margin-bottom: 1em;
  }
`;

export default props => (
<StaticQuery
  query ={graphql`
            query {
              allContentfulBannerLogo{
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
`         } render={data => <Banner data={data} {...props}/>}
  />
)
