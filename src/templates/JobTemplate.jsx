import React from 'react';
import Markdown from 'markdown-to-jsx';
import styled from 'styled-components';
import Button from 'material-ui/Button';
import Email from '@material-ui/icons/Email';
import Phone from '@material-ui/icons/Phone';

const JobView = ({ data }) => {
  const job = data.contentfulJobListing;

  return(
    <JobTemplateWrapper>
      <div className="info">
        <div>
          <div className="logo-container">
            <img src={job.partner.logo.file.url} className="partner-logo"/>
          </div>
        </div>
          { job.contactPerson && (
            <div className="contactperson">
              <h3>Contact</h3>
              <p>{job.contactPerson.name}</p>
              <Button color="primary" href={"mailto:" + job.contactPerson.email}><Email/>{job.contactPerson.email}</Button>
              <Button color="primary" href={"tel:" + job.contactPerson.phone}><Phone/>{job.contactPerson.phone}</Button>
            </div>
          )}
      </div>
      <div className="job-content">
        <h1>{job.job_title}</h1>
        <Markdown>
          {job.content.content}
        </Markdown>
      </div>
    </JobTemplateWrapper>
  );
};


const JobTemplateWrapper = styled.div`
  display: flex;
  align-items: flex-start;

  h1 {
    border-bottom: 1px solid #ddd;
    padding-bottom: 0.5em;
  }

  .info {
    width: 20em;
    min-width: 220px;
    margin: 0 0.5em;
    padding: 1em;
    position: sticky;
    top: 4em;
    z-index: 10;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

    .logo-container {
      height: 10em;
      display: flex;
      align-items: center;
      justify-content: center;

      .partner-logo {
        width: 80%;
      }
    }

    .button {
      max-width: 100%;
      word-wrap: normal
    }
  }

  .job-content {
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    padding: 1em;
    text-align: justify;
  }
`


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
