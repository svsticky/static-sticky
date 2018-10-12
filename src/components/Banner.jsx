import React from 'react';
import styled from 'styled-components';
import { graphql, StaticQuery } from 'gatsby';
import { Card, Image } from 'semantic-ui-react';

class Banner extends React.Component {

  renderLogos = allLogos => (
    <Card fluid >
      <Card.Content className="card">
        {this.getRandom(allLogos, 4).map(logo => {
        if(logo.node.image.file.url != null){
          return(
            <Image className="image" key={logo.node.id} size="small" src={logo.node.image.file.url} />
          );
        }
        return null;
      })}
      </Card.Content>
    </Card>
  )

  getRandom = (arr, n) => {
    var result = new Array(n),
    len = arr.length,
    taken = new Array(len);

    if(n > len)
      return arr;

    while(n--){
      var x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
  }

  render(){
    return(
      <BannerWrapper>
        {this.renderLogos(this.props.data.allContentfulBannerLogo.edges)}
        </BannerWrapper>
      );
  }
}

const BannerWrapper = styled.div`
  padding-bottom: 3em;
  .card{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
  }
  .image{
    margin-left: 2em;
    margin-right: 2em;
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
`} render={data => <Banner data={data} {...props}/>}
  />
)
