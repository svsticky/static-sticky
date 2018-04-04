import React from 'react';
import Markdown from 'markdown-to-jsx';
import JobItem from '../components/JobItem';

const styles = {
    flexContainer: {
      display: 'flex',
      alignItems: 'flex-start',
    },
    info: {
      width: '20em',
      minWidth: '220px',
      margin: '0 0.5em',
      position: 'sticky',
      top: '5em',
      zIndex: '10',
    },
    partnerContent: {
      margin: '0 0.5em',
    },
    logoContainer: {
      height: '10em',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    partnerLogo: {
      width: '80%',
    },
    partnerJobList: {
        margin: '0px 0.5em',
    }

  };


const PartnerView = ({ data }) => {
    const partner = data.contentfulPartner;

    return(
      <div style={styles.flexContainer}>
        <div style={styles.info}>
          <div>
            <div style={styles.logoContainer}>
              <img src={partner.logo.file.url} style={styles.partnerLogo}/>
            </div>
          </div>
            {
              <div>
                <h3>Contact</h3>
                <p>
                    <a href={partner.website}>website</a> <br/>
                </p>
              </div>
            }
        </div>
        <div style={styles.partnerContent}>
        <h2>{partner.name}</h2>
        <div>
          <div>
            <Markdown>
              {partner.description.description}
            </Markdown>
          </div>
        </div>

        <h2> Vacatures </h2>  
          <div >
          {
              partner.job_listing.map(job_listing => 
              <JobItem key={job_listing.id} job={job_listing} partner={partner} />)
          }
          </div>
        </div>
      </div>  
    );
};

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