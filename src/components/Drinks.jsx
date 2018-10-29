import React from 'react'
import styled from 'styled-components'
import { Card } from 'semantic-ui-react'
import { graphql, StaticQuery } from 'gatsby'

class Drinks extends React.Component {

  renderDescription = drinks => {
    return (
      <Card.Description>
        Elke week is er een gratis borrel! Deze periode is de borreldag: <br /> 
        <b>Elke {drinks.day} vanaf {drinks.time} in de {drinks.location}!</b>
      </Card.Description>
    )
  }

  render(){
    return (
      <DrinksWrapper>
        <div className="drinksCard">
          <Card fluid>
            <Card.Content>
              <Card.Header>Borreldag</Card.Header>
              {this.renderDescription(this.props.data.contentfulDrinks)}
            </Card.Content>
                    
          </Card>
        </div>
      </DrinksWrapper>
    )
  }
}

export const DrinksWrapper = styled.div`
  .drinksCard{
    padding-left:2em;
  }
`

export default props => (
  <StaticQuery
    query={graphql`
      query {
        contentfulDrinks{
          location
          day
          time
        }
      }
    `}
    render={data => <Drinks data={data} {...props} />}
  />
)