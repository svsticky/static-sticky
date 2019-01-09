import React from 'react';
import Markdown from 'markdown-to-jsx';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Layout from '../components/layout/Layout';
import JobItem from '../components/jobs/JobItem';

const PartnerView = ({ data }) => {
  const { contentfulPartner: partner } = data;

  return (
    <Layout>
      <PartnerTemplateWrapper>
        <div className="info">
          <div>
            <div className="logo-container">
              <img
                src={partner.logo.file.url}
                className="partner-logo"
                alt="Partner logo"
              />
            </div>
          </div>
          <div>
            <h3>Contact</h3>
            <p>
              <a href={partner.website}>website</a> <br />
            </p>
          </div>
        </div>
        <div className="partner-content">
          <h2>{partner.name}</h2>
          <Markdown>{partner.description.description}</Markdown>
          {partner.job_listing && (
            <div>
              <h2> Vacatures </h2>
              <div className="partner-joblist">
                {partner.job_listing.map(jobListing => (
                  <JobItem
                    key={jobListing.id}
                    job={jobListing}
                    partner={partner}
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

  .partner-content: {
    margin: 0 0.5em;
  }

  .partner-joblist {
    margin: 0px 0.5em;
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
