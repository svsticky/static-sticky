import React from 'react';
import Markdown from 'markdown-to-jsx';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout/Layout';
import { Button, Card, Image } from 'semantic-ui-react';
import { device } from '../data/Devices';

const JobView = ({ data }) => {
  const job = data.contentfulJobListing;

  return (
    <Layout>
      <JobTemplateWrapper>
        <div className="side-info">
          <Card
            fluid
            as={Link}
            to={'/partners/' + job.partner.slug}
            className="logo-container"
          >
            <img
              src={job.partner.logo.file.url}
              className="partner-logo"
              alt="Partner Logo"
            />
          </Card>
          {job.contactPerson && (
            <Card fluid className="contactperson">
              <h3 className="contact-header">Contact</h3>
              <p>{job.contactPerson.name}</p>
              <div className="button-flex">
                <Button
                  primary
                  fluid
                  className="mail-button"
                  href={'mailto:' + job.contactPerson.email}
                >
                  E-mailen
                </Button>
                <Button primary fluid href={'tel:' + job.contactPerson.phone}>
                  Bellen
                </Button>
              </div>
            </Card>
          )}
        </div>
        <Card fluid className="job-content">
          <h2>{job.job_title}</h2>
          <div className="description">
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

  h2 {
    border-bottom: 1px solid #ddd;
    padding-bottom: 0.5em;
    margin-top: 0;
  }

  .side-info {
    @media ${device.tablet} {
      width: 20em;
      min-width: 220px;
      margin: 0 1em;
      top: 5rem;
      position: sticky;
      z-index: 10;
    }

    @media ${device.mobileMax} {
      display: flex;
      margin: -0.8em;
      padding-top: 0.5rem;
      background-color: #f8f8f4;
      top: 0;
    }

    .logo-container {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 2;

      @media ${device.tablet} {
        height: 10em;
        margin-bottom: 1em;
      }

      @media ${device.mobileMax} {
        height: 7rem;
        margin: 0 0.5em 0 0.5em;
      }

      .partner-logo {
        background-color: white;
        height: 100%;
      }
    }
    .contactperson {
      @media ${device.mobileMax} {
        margin: 0 0.5em 0 0;
        flex: 3;
        .contact-header {
          display: none;
        }
      }

      padding: 1em;
    }
  }
  .button-flex {
    display: flex;
    .mail-button {
      margin-right: 0.5rem;
    }
  }

  .job-content {
    padding: 1em;
    @media ${device.mobileMax} {
      margin-top: 1.5rem;
    }
  }
  .description {
    img {
      width: 300px;
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
