import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import Markdown from 'markdown-to-jsx';

const styles = {
  flexContainer: {
    display: 'flex',
    alignItems: 'flex-start',
  },
  info: {
    width: '20em',
    minWidth: '220px',
    margin: '0 0.5em',
    position: 'sticky',
    top: '5em',
    zIndex: '10',
  },
  jobContent: {
    margin: '0 0.5em',
  },
  logoContainer: {
    height: '10em',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  partnerLogo: {
    width: '80%',
  },
};

const JobView = ({ data }) => (
  <div style={styles.flexContainer}>
    <Card fluid style={styles.info}>
      <Card.Content>
        <div style={styles.logoContainer}>
          <img src={data.contentfulJobListing.partner.logo.file.url} style={styles.partnerLogo}/>
        </div>
      </Card.Content>
        { data.contentfulJobListing.contactPerson && (
          <Card.Content>
            <h3>Contact</h3>
            <p>{data.contentfulJobListing.contactPerson.name} <br/>
            <a href={"mailto:" + data.contentfulJobListing.contactPerson.email}>{data.contentfulJobListing.contactPerson.email}</a> <br/>
            <a href={"tel:" + data.contentfulJobListing.contactPerson.phone}>{data.contentfulJobListing.contactPerson.phone}</a></p>
          </Card.Content>
        )}
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
      contactPerson {
        name
        email
        phone
        photo {
          file {
            url
          }
        }
      }
      partner {
        logo {
          file {
            url
          }
        }
      }
    }
  }
`;
