import React from 'react';
import Markdown from 'markdown-to-jsx';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Layout from '../components/layout/Layout';
import { Button, Card } from 'semantic-ui-react';
import { device } from '../data/Devices';
import { LinkLogoCard, ImageContainer } from '../helpers';
import { Helmet } from 'react-helmet';

const JobView = ({ data }) => {
  const job = data.contentfulJobListing;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{job.job_title}</title>
      </Helmet>
      <Layout>
        <JobTemplateWrapper>
          <div className="side-info">
            <LinkLogoCard
              url={'/partners/' + job.partner.slug}
              className="partner"
            >
              <ImageContainer
                src={job.partner.logo.file.url}
                alt="Partner Logo"
              />
            </LinkLogoCard>
            {job.contactPerson && (
              <Card fluid className="contact">
                <h3 className="contact-header">Contact</h3>
                <p>{job.contactPerson.name}</p>
                <Button
                  primary
                  href={'mailto:' + job.contactPerson.email}
                  fluid
                >
                  E-mailen
                </Button>
                <Button
                  primary
                  href={'tel:' + job.contactPerson.phone}
                  fluid
                  className="call-button"
                >
                  Bellen
                </Button>
              </Card>
            )}
          </div>
          <div className="job-content">
            <h2>{job.job_title}</h2>
            <Card fluid>
              <div className="description">
                <Markdown>{job.content.content}</Markdown>
              </div>
            </Card>
          </div>
        </JobTemplateWrapper>
      </Layout>
    </>
  );
};

const JobTemplateWrapper = styled.div`
  &&& {
    @media ${device.tablet} {
      display: flex;
      align-items: flex-start;
    }

    .side-info {
      display: flex;
      background-color: #f8f8f4;
      top: 0;
      margin-top: -1rem;
      @media ${device.tablet} {
        display: block;
        top: 9rem;
        position: sticky;
        z-index: 10;
      }
    }
    .contact {
      margin: 0 0 0 1rem;
      @media ${device.tablet} {
        margin: 1rem 0 0 0;
      }
      &-header {
        display: none;
        @media ${device.tablet} {
          display: block;
        }
      }
    }
    .call-button {
      margin-top: 0.5rem;
      border-radius: 5px !important;
    }

    .job-content {
      margin-left: 3rem;
      @media ${device.mobileMax} {
        margin: 2rem 0 0 0;
      }
    }
    .description {
      img {
        width: 20rem;
      }
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
