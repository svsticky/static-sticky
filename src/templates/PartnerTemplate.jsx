import React from 'react';
import Markdown from 'markdown-to-jsx';
import styled from 'styled-components';
import { Card, Grid, Button } from 'semantic-ui-react';
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
          <Card fluid className="contact">
            <Button primary href={partner.website}>
              Website
            </Button>
          </Card>
        </div>
        <Card fluid className="partner-content">
          <h2>{partner.name}</h2>
          <div className="description">
            <Markdown>{partner.description.description}</Markdown>
          </div>
          {partner.job_listing && (
            <div className="vacatures">
              <h2> Vacatures bij {partner.name}</h2>
              <Grid columns={2} doubling stretched>
                {partner.job_listing.map(jobListing => (
                  <Grid.Column key={jobListing.id}>
                    <JobItem
                      className="item"
                      job={jobListing}
                      partner={partner}
                    />
                  </Grid.Column>
                ))}
              </Grid>
            </div>
          )}
        </Card>
      </PartnerTemplateWrapper>
    </Layout>
  );
};

const PartnerTemplateWrapper = styled.div`
  @media ${device.tablet} {
    display: flex;
    align-items: flex-start;
  }

  .info {
    @media ${device.mobileMax} {
      display: flex;
      background-color: #f8f8f4;
      padding-top: 0.5rem;
      align-items: stretch;
    }

    @media ${device.tablet} {
      width: 20em;
      min-width: 220px;
      margin: 0 0.5em;
      top: 5em;
      position: sticky;
    }

    .logo-container {
      flex: 2;
      display: flex;
      margin: 0 0.5em 0 0;
      align-items: center;
      justify-content: center;
      @media ${device.mobileMax} {
        height: 8em;
      }
      @media ${device.tablet} {
        height: 10em;
      }
      .partner-logo {
        width: 90%;
      }
    }
    .contact {
      flex: 3;
      margin-top: 0;
    }
  }
  .description {
    img {
      width: 300px;
    }
  }
  .vacatures {
    padding-top: 10px;
    padding-bottom: 10px;
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
