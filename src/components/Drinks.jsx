import React from 'react';
import Card from '../components/atoms/Card';
import { graphql, StaticQuery } from 'gatsby';

class Drinks extends React.Component {
  renderDescription = drinks => {
    return (
      <>
        Elke week is er een gratis borrel! Deze periode is de borreldag: <br />
        <b>
          Elke {drinks.day} vanaf {drinks.time} in de {drinks.location}!
        </b>
      </>
    );
  };

  render() {
    return (
      <>
        <div className="drinksCard">
          <h3>Borreldag</h3>
          <Card>
              {this.renderDescription(this.props.data.contentfulDrinks)}
          </Card>
        </div>
      </>
    );
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        contentfulDrinks {
          location
          day
          time
        }
      }
    `}
    render={data => <Drinks data={data} {...props} />}
  />
);
