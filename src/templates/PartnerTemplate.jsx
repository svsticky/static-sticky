import React from 'react';
import Markdown from 'markdown-to-jsx';
import styled from 'styled-components';
import JobItem from '../components/JobItem';


const PartnerView = ({ data }) => {
    const partner = data.contentfulPartner;

    return(
      <PartnerTemplateWrapper>
        <div className="info">
          <div>
            <div className="logo-container">
              <img src={partner.logo.file.url} className="partner-logo"/>
            </div>
          </div>
            <div>
              <h3>Contact</h3>
              <p>
                <a href={partner.website}>website</a> <br/>
              </p>
            </div>
        </div>
        <div className="partner-content">
          <h2>{partner.name}</h2>
            <Markdown>
              {partner.description.description}
            </Markdown>
          <h2> Vacatures </h2>  
            <div className="partner-joblist">
            { partner.job_listing.map(job_listing => 
              <JobItem key={job_listing.id} job={job_listing} partner={partner} />)
            }
          </div>
        </div>
      </PartnerTemplateWrapper>  
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
`


export default PartnerView


export const PartnerQuery = graphql`
  query PartnerQuery($id: String!) {
    contentfulPartner(id: {eq: $id}) {
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