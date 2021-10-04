import React from 'react';
import { Card } from 'semantic-ui-react';
import { graphql, StaticQuery } from 'gatsby';
import { getTranslation, getLanguage, metadata } from '../data/i18n';

class Drinks extends React.Component {
  renderDescription = (drinks, lg) => {
    return (
      <>
        {getTranslation(lg, 'drinks.description')}
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
      typeof window !== 'undefined'
        ? getLanguage(window)
        : metadata.defaultLocale;
    let drink = this.props.data.allContentfulDrinks.nodes.filter(
      d => d.node_locale === language
    )[0]; //get only the first element
    return (
      <>
        <div>
          <h2>{getTranslation(language, 'drinks.title')}</h2>
          <Card fluid>{this.renderDescription(drink, language)}</Card>
        </div>
      </>
    );
  }
}

const drinksQuery = graphql`
  query drinksQuery {
    allContentfulDrinks {
      nodes {
        day
        node_locale
        time
        location
      }
    }
  }
`;

export default props => (
  <StaticQuery
    query={drinksQuery}
    render={data => <Drinks data={data} {...props} />}
  />
);
