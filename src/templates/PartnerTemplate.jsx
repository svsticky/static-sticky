import React from 'react';
import Markdown from 'markdown-to-jsx';
import styled from 'styled-components';
import { Card, Button } from 'semantic-ui-react';
import { graphql } from 'gatsby';
import Layout from '../components/layout/Layout';
import JobItem from '../components/jobs/JobItem';
import { device } from '../data/Devices';
import { LinkLogoCard, ImageContainer } from '../helpers';

const PartnerView = ({ data }) => {
  const { contentfulPartner: partner } = data;

  return (
    <Layout>
      <PartnerTemplateWrapper>
        <div className="info">
          <LinkLogoCard url={'/partners/' + partner.slug}>
            <ImageContainer src={partner.logo.file.url} alt="Partner Logo" />
          </LinkLogoCard>
          <div fluid className="contact">
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
        display: block;
        margin: 3rem 1rem;
        top: 7em;
        position: sticky;
      }
    }
    .contact {
      margin: 1rem 0 0 0;
      @media ${device.mobileMax} {
        margin: 0 0 0 1rem;
        padding: 1rem;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15), 0 2px 6px rgba(0, 0, 0, 0.2);
        border-radius: 5px;
        background: white;
        width: 100%;
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
      @media ${device.smallMonitor} {
        justify-content: flex-start;
      }
    }
    .vacatures {
      margin-top: 3rem;
    }
    .partner-content {
      margin-left: 2rem;
      @media ${device.mobileMax} {
        margin: 3rem 0 0 0;
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
      slug
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
