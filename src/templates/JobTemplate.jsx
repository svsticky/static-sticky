import React from 'react';
import Markdown from 'markdown-to-jsx';
import styled from 'styled-components';


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
          {job.contactPerson && (
            <div>
              <h3>Contact</h3>
              <p>{job.contactPerson.name} <br/>
              <a href={"mailto:" + job.contactPerson.email}>{job.contactPerson.email}</a> <br/>
              <a href={"tel:" + job.contactPerson.phone}>{job.contactPerson.phone}</a></p>
            </div>
          )}
      </div>
      <div className="job-content">
        <div>
          <h2>{job.job_title}</h2>
        </div>
        <div>
          <Markdown>
            {job.content.content}
          </Markdown>
        </div>
      </div>
    </JobTemplateWrapper>
  );
};


const JobTemplateWrapper = styled.div`
  display: flex;
  align-items: flex-start;

  .info {
    width: 20em;
    min-width: 220px;
    margin: 0 0.5em;
    position: sticky;
    top: 5em;
    z-index: 10;

    .logo-container {
      height: 10em;
      display: flex;
      align-items: center;
      justify-content: center;

      .partner-logo {
        width: 80%;
      }
    }
  }

  .job-content {
    margin: 0 2em;
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
