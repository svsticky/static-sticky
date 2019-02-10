import React from 'react';
import Markdown from 'markdown-to-jsx';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout/Layout';
import { Button, Card } from 'semantic-ui-react';
import { device } from '../data/Devices';

const JobView = ({ data }) => {
  const job = data.contentfulJobListing;

  return (
    <Layout>
      <JobTemplateWrapper>
        <div className="side-info">
          <div>
            <Card as={ Link } to={'/partners/' + job.partner.slug} className="logo-container">
              <img
                src={job.partner.logo.file.url}
                className="partner-logo"
                alt="Partner Logo"
              />
            </Card>
            {job.contactPerson && (
              <Card className="contactperson">
                <h3>Contact</h3>
                <p>{job.contactPerson.name}</p>
                <Button
                  className="button"
                  color="primary"
                  href={'mailto:' + job.contactPerson.email}
                >
                  <span className="content">{job.contactPerson.email}</span>
                </Button>
                <Button
                  className="button"
                  color="primary"
                  href={'tel:' + job.contactPerson.phone}
                >
                  {job.contactPerson.phone}
                </Button>
              </Card>
            )}
          </div>
        </div>
        <Card fluid className="job-content">
          <h1>{job.job_title}</h1>
          <div class="description">
            <Markdown>{job.content.content}</Markdown>
          </div>
        </Card>
      </JobTemplateWrapper>
    </Layout>
  );
};

const JobTemplateWrapper = styled.div`
  @media ${device.tablet} {
    display: flex;
    align-items: flex-start;
  }

  h1 {
    border-bottom: 1px solid #ddd;
    padding-bottom: 0.5em;
    margin-top: 0;
  }

  .side-info {
    @media ${device.tablet} {
      width: 20em;
      min-width: 220px;
      margin: 0 1em;
      top: 8em;
    }

    @media ${device.mobileMax} {
      width: 100%;
      height: 100%;
      top: 0em;
      background-color: #f8f8f4;
    }

    position: sticky;
    z-index: 10;

    .logo-container {
      display: flex;
      align-items: center;
      justify-content: center;

      @media ${device.tablet} {
        height: 10em;

        margin-bottom: 1em;
      }
      @media ${device.mobileMax} {
        height: 100%;
        width: 100%;
      }

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
  .description {
    img {
      width: 500px;
    }
  }
`;

export default JobView;

export const jobQuery = graphql`
  query jobQuery($id: String!) {
    contentfulJobListing(id: { eq: $id }) {
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
        slug
        logo {
          file {
            url
          }
        }
      }
    }
  }
`;
