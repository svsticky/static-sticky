import React from 'react';
import Markdown from 'markdown-to-jsx';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout/Layout';
import { Button, Card, Image } from 'semantic-ui-react';
import { device } from '../data/Devices';

const JobView = ({ data }) => {
  const job = data.contentfulJobListing;
  const contact = job.contactPerson ? true : false;

  return (
    <Layout>
      <JobTemplateWrapper contact={contact}>
        <div className="side-info">
          <Card
            as={Link}
            to={'/partners/' + job.partner.slug}
            className="logo-container"
          >
            <Image
              src={job.partner.logo.file.url}
              className="partner-logo"
              alt="Partner Logo"
              size="small"
            />
          </Card>
          {job.contactPerson && (
            <Card className="contactperson">
              <h3 className="contact-headers">Contact</h3>
              <p className="contact-headers">{job.contactPerson.name}</p>
              <div className="button-div">
                <Button
                  className="button"
                  color="primary"
                  href={'mailto:' + job.contactPerson.email}
                >
                  <span className="content">{job.contactPerson.email}</span>
                </Button>
              </div>
              <div className="button-div">
                <Button
                  className="button"
                  color="primary"
                  href={'tel:' + job.contactPerson.phone}
                >
                  {job.contactPerson.phone}
                </Button>
              </div>
            </Card>
          )}
        </div>
        <Card fluid className="job-content">
          <h1>{job.job_title}</h1>
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
      display: grid;
      grid-template-columns: ${props => props.contact ? 'repeat(2, 50%)' : '100%'};
      justify-items: center;
      grid-column-gap: 5px;
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
        padding-top: 5px;
        padding-bottom: 5px;
      }

      .partner-logo {
        background-color: white;
      }
    }
    .contactperson {
      @media ${device.mobileMax} {
        .contact-headers {
          display: none;
        }
      }

      padding: 1em;
      .button {
        width: 100%;
        padding-left: 5px;
        font-size: 0.8em;
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
      width: 300px;
    }
  }
  .button-div {
    margin-bottom: 5px;
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
