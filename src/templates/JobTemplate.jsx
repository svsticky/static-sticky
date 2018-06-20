import React from 'react';
import Markdown from 'markdown-to-jsx';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import Email from '@material-ui/icons/Email';
import Phone from '@material-ui/icons/Phone';
import Card from '../atoms/Card';

const JobView = ({ data }) => {
  const job = data.contentfulJobListing;

  return (
    <JobTemplateWrapper>
      <div className="side-info">
        <div>
          <Card className="logo-container">
            <img src={job.partner.logo.file.url} className="partner-logo" alt="Partner Logo" />
          </Card>
          { job.contactPerson && (
            <Card className="contactperson">
              <h3>Contact</h3>
              <p>{job.contactPerson.name}</p>
              <Button className="button" color="primary" href={'mailto:' + job.contactPerson.email}>
                <Email />
                <span className="content">{job.contactPerson.email}</span>
              </Button>
              <Button className="button" color="primary" href={'tel:' + job.contactPerson.phone}>
                <Phone />
                {job.contactPerson.phone}
              </Button>
            </Card>
          )}
        </div>
      </div>
      <Card className="job-content">
        <h1>{job.job_title}</h1>
        <Markdown>
          {job.content.content}
        </Markdown>
      </Card>
    </JobTemplateWrapper>
  );
};


const JobTemplateWrapper = styled.div`
  display: flex;
  align-items: flex-start;

  h1 {
    border-bottom: 1px solid #ddd;
    padding-bottom: 0.5em;
    margin-top: 0;
  }

  .side-info {
    width: 20em;
    min-width: 220px;
    margin: 0 1em;
    position: sticky;
    top: 8em;
    z-index: 10;
    .logo-container {
      height: 10em;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1em;
      .partner-logo {
        width: 70%;
        height: auto;
      }
    }
    .contactperson {
      padding: 1em;
      .button {
        width: 100%;
        padding-left: 5px;
        font-size: 0.8em;
        justify-content: start;
        .content {
          word-wrap: break-word;
          margin: 0;
          width: 90%;
        }
        svg {
          padding-right: 5px;
        }
      }
    }
  }
  .job-content {
    padding: 1em;
  }
`;


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
