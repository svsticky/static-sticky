import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import Markdown from 'markdown-to-jsx';

const styles = {
  flexContainer: {
    display: 'flex',
    alignItems: 'flex-start',
  },
  contactInfo: {
    width: '20em',
    minWidth: '200px',
    margin: '1em 0.5em',
    position: 'sticky',
    top: '5em',
    zIndex: '10',
  },
  jobContent: {
    margin: '1em 0.5em',
  },
  logoContainer: {
    height: '10em',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  partnerLogo: {
    width: '100%',
  },
};

const JobView = ({ data }) => (
  <div style={styles.flexContainer}>
    <Card fluid style={styles.contactInfo}>
      <Card.Content>
        <div style={styles.logoContainer}>
          <img src={data.contentfulJobListing.partner.logo.file.url} style={styles.partnerLogo}/>
        </div>
      </Card.Content>
      <Card.Content>
        <h3>{data.contentfulJobListing.partner.name}</h3>
      </Card.Content>
    </Card>
    <Card fluid style={styles.jobContent}>
      <Card.Content>
        <h2>{data.contentfulJobListing.job_title}</h2>
      </Card.Content>
      <Card.Content>
        <Markdown>
          {data.contentfulJobListing.content.content}
        </Markdown>
      </Card.Content>
    </Card>
  </div>
);

export default JobView;

export const jobQuery = graphql`
  query jobQuery($id: String!){
    contentfulJobListing(id: {eq: $id}) {
      job_title
      content {
        content
      }
      partner {
        name
        logo {
          file {
            url
          }
        }
      }
    }
  }
`;
