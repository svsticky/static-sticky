import React from 'react';
import styled from 'styled-components';
import { graphql, StaticQuery } from 'gatsby';
import { Card, Image } from 'semantic-ui-react';

class Banner extends React.Component {

  renderLogos = allLogos => (
    <Card fluid >
      <Card.Content className="cardcontent">
        {getRandom(allLogos, 5).map(logo => {
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

const getRandom = (arr, n) => {
  const result = new Array(n);
  let len = arr.length;
  const taken = new Array(len);

  if(n > len)
    return arr;

  while(n--){
    const x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

const BannerWrapper = styled.div`
  padding-bottom: 3em;
  .cardcontent{
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
