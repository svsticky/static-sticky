import React from 'react';
import { Card } from 'semantic-ui-react';
import { graphql, StaticQuery } from 'gatsby';
import { getTranslation } from '../data/i18n';

class Drinks extends React.Component {
  renderDescription = (drinks, lg) => {
    return (
      <>
        {getTranslation(lg, 'drinks.description')} <br />
        <b>
          {getTranslation(lg, 'drinks.when', [
            drinks.day,
            drinks.time,
            drinks.location,
          ])}
        </b>
      </>
    );
  };

  render() {
    const language =
      typeof window !== 'undefined' ? window.location.href.split('/')[3] : 'nl';
    return (
      <>
        <div>
          <h2>{getTranslation(language, 'drinks.title')}</h2>
          <Card fluid>
            {this.renderDescription(this.props.data.contentfulDrinks, language)}
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
