import React from 'react';
import { Button, Card } from 'semantic-ui-react';
import { graphql, StaticQuery } from 'gatsby';
import { getLanguage, getTranslation, metadata } from '../data/i18n';

class IntroInformation extends React.Component {
  render() {
    const language =
      typeof window !== 'undefined'
        ? getLanguage(window)
        : metadata.defaultLocale;
    let intro_information = this.props.data.allContentfulIntroInformation.nodes.filter(
      d => d.node_locale === language
    )[0]; //get only the first element

    let color = this.props.data.contentfulBoard.color;
    console.log(color);

    return (
      <>
        <div>
          <h2>{intro_information.title}</h2>
          <Card fluid>
            <div>{intro_information.description.description}</div>
            <Button
              href={intro_information.introWebsiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button"
              style={{ backgroundColor: color, color: 'white' }}
            >
              {intro_information.linkToWebsiteButtonText}
            </Button>
          </Card>
        </div>
      </>
    );
  }
}

const introInformationQuery = graphql`
  query introInformationQuery {
    allContentfulIntroInformation {
      nodes {
        node_locale
        title
        linkToWebsiteButtonText
        description {
          description
        }
        introWebsiteUrl
      }
    }
    contentfulBoard(current: { eq: true }) {
      color
    }
  }
`;

export default props => (
  <StaticQuery
    query={introInformationQuery}
    render={data => <IntroInformation data={data} {...props} />}
  />
);
