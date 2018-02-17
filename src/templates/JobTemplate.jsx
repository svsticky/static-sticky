import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import Markdown from 'markdown-to-jsx';

const styles = {
  jobview: {
    display: 'grid',
    gridTemplateColumns: '1fr 3fr',
    gridColumnGap: '20px',
  },
  logoContainer: {
    height: '10em',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  partnerLogo: {
    width: '75%',
  },
};

const JobView = ({ data }) => (
  <div style={styles.jobview}>
    <Card fluid>
      <Card.Content>
        <div style={styles.logoContainer}>
          <img src={data.contentfulJobListing.partner.logo.file.url} style={styles.partnerLogo}/>
        </div>
      </Card.Content>
      <Card.Content>
        <h3>{data.contentfulJobListing.partner.name}</h3>
      </Card.Content>
    </Card>
    <Card fluid>
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
