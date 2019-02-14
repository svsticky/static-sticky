import React from 'react';
import Markdown from 'markdown-to-jsx';
import styled from 'styled-components';
import { Grid, Image } from 'semantic-ui-react';
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
          <div>
            <div className="logo-container">
              <Image
                src={partner.logo.file.url}
                className="partner-logo"
                alt="Partner logo"
                size="small"
                centered
              />
            </div>
          </div>
          <div>
            <h3>Contact</h3>
            <p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={partner.website}
              >
                website
              </a>{' '}
              <br />
            </p>
          </div>
        </div>
        <div className="partner-content">
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
        </div>
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
      top: 0;
      padding-top: 0.5rem;
    }

    @media ${device.tablet} {
      width: 20em;
      min-width: 220px;
      margin: 0 0.5em;
      top: 5em;
    }

    position: sticky;
    z-index: 10;

    .logo-container {
      display: flex;

      @media ${device.mobileMax} {
        width: 100%;
        z-index: 10;
        align-items: start;
        justify-content: start;
        margin-top: 0 0.5em;
        margin-bottom: 5px;
      }

      @media ${device.tablet} {
        align-items: center;
        height: 10em;
        justify-content: center;
      }

      .partner-logo {
        @media ${device.mobileMax} {
          height: inherit;
          margin-right: 5px;
        }

        @media ${device.tablet} {
          width: 80%;
        }
      }
    }
  }

  .partner-content: {
    margin: 0 0.5em;
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
