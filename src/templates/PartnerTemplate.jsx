import React from 'react';
import Markdown from 'markdown-to-jsx';
import styled from 'styled-components';
import { Card, Button } from 'semantic-ui-react';
import { graphql } from 'gatsby';
import Layout from '../components/layout/Layout';
import JobItem from '../components/jobs/JobItem';
import { device } from '../data/Devices';

const PartnerView = ({ data }) => {
  const { contentfulPartner: partner } = data;

  return (
    <Layout>
      <PartnerTemplateWrapper>
        <div className="info">
          <Card fluid className="logo-container">
            <img
              src={partner.logo.file.url}
              className="partner-logo"
              alt="Partner logo"
            />
          </Card>
          <div className="contact">
            <Button
              fluid
              primary
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              Website
            </Button>
          </div>
        </div>
        <div className="partner-content">
          <h2>{partner.name}</h2>
          <Card fluid>
            <div className="description">
              <Markdown>{partner.description.description}</Markdown>
            </div>
          </Card>

          {partner.job_listing && (
            <div className="vacatures">
              <h2> Vacatures bij {partner.name}</h2>
              <div className="partner-job-list">
                {partner.job_listing.map(jobListing => (
                  <JobItem
                    className="item"
                    job={jobListing}
                    partner={partner}
                    key={jobListing.id}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </PartnerTemplateWrapper>
    </Layout>
  );
};

const PartnerTemplateWrapper = styled.div`
  &&& {
    @media ${device.tablet} {
      display: flex;
      align-items: flex-start;
    }

    .info {
      @media ${device.mobileMax} {
        display: flex;
        background-color: #f8f8f4;
        margin: -1rem 0 2rem 0;
      }

      @media ${device.tablet} {
        margin: 3rem 1rem;
        top: 7em;
        position: sticky;
      }

      .logo-container {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        height: 8rem;
        width: 8rem;
        margin-right: 1rem;
        img {
          height: auto;
          max-height: 90%;
          max-width: 90%;
        }
        @media ${device.tablet} {
          margin-right: 0;
          width: 12rem;
          height: 11rem;
        }
      }
      .contact {
        flex: 1;
      }
    }
    .description {
      img {
        width: 20rem;
      }
    }
    .partner-job-list {
      display: flex;
      flex-wrap: wrap;
      margin-left: -1rem;
      justify-content: center;
      @media ${device.laptop} {
        justify-content: flex-start;
        margin-right: -1rem;
      }
    }
    .vacatures {
      margin-top: 3rem;
    }
    .partner-content {
      margin-left: 2rem;
      @media ${device.mobileMax} {
        margin: 0;
      }
    }
  }
`;

export default PartnerView;

export const PartnerQuery = graphql`
  query PartnerQuery($id: String!) {
    contentfulPartner(id: { eq: $id }) {
      id
      name
      website
      description {
        description
      }

      logo {
        file {
          url
        }
      }

      job_listing {
        id
        job_title
        summary
        featured
        slug
        isJob
        partner {
          logo {
            file {
              url
            }
          }
        }
      }
    }
  }
`;
