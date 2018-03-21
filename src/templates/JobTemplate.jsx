import React from 'react';
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

const JobView = ({ data }) => {
  const job = data.contentfulJobListing;

  return(
    <div style={styles.flexContainer}>
      <div fluid style={styles.info}>
        <div>
          <div style={styles.logoContainer}>
            <img src={job.partner.logo.file.url} style={styles.partnerLogo}/>
          </div>
        </div>
          {job.contactPerson && (
            <div>
              <h3>Contact</h3>
              <p>{job.contactPerson.name} <br/>
              <a href={"mailto:" + job.contactPerson.email}>{job.contactPerson.email}</a> <br/>
              <a href={"tel:" + job.contactPerson.phone}>{job.contactPerson.phone}</a></p>
            </div>
          )}
      </div>
      <div fluid style={styles.jobContent}>
        <div>
          <h2>{job.job_title}</h2>
        </div>
        <div>
          <Markdown>
            {job.content.content}
          </Markdown>
        </div>
      </div>
    </div>
  );
};

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
