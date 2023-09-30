import React from 'react';
import { Card } from 'semantic-ui-react';
import { graphql, StaticQuery } from 'gatsby';
import { getLanguage, metadata } from '../data/i18n';
import Markdown from 'markdown-to-jsx';

class Drinks extends React.Component {
  renderDescription = (drinks, lg) => {
    return (
      <Markdown>
        {drinks.descriptionlong.descriptionlong}
      </Markdown>
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
          <h2>{drink.title}</h2>
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
        node_locale
        title
        descriptionlong {
          descriptionlong
        }
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
