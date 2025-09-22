import React from 'react';
import { graphql } from 'gatsby';

// Components
import Layout from '$/components/layout/Layout';
import Banner from '$/components/Banner';
import News from '$/components/News';
import Drinks from '$/components/Drinks';
import MainPartnerIndex from '$/components/mainpartner/Card';
import MainPartnerBanner from '$/components/mainpartner/Banner';
import IndexWrapperFactory from '$/components/layout/GridDryQueries';
import FeaturedJobWidget from '$/components/jobs/FeaturedJobWidget';
import ActivityWidget from '$/components/activities/ActivityWidget';
import IntroInformation from '$/components/IntroInformation';

import logo from '$/images/sticky-logo-text.svg';

const Index = ({ data }) => {
  const mainPartners = data.allContentfulPartner.edges.filter(
    edge => edge.node.isMainPartner
  );
  const mainPartner = mainPartners.length > 0 ? mainPartners[0].node : null;
  const hasIntroInformation =
    data.allContentfulIntroInformation.nodes[0].enabled;
  const IndexWrapper = IndexWrapperFactory(hasIntroInformation);

  return (
    <Layout title="Sticky">
      <IndexWrapper
        color={!data.contentfulBoard ? '#000000' : data.contentfulBoard.color}
      >
        <div className="container">
          <div className="logo">
            <img src={logo} alt="Sticky Logo" />
          </div>

          {mainPartner && (
            <div className="banner">
              <MainPartnerBanner partner={mainPartner} />
              <Banner />
            </div>
          )}

          <div className="news">
            <News itemsPerPage="5" />
          </div>
          {hasIntroInformation && (
            <div className="introInformation">
              <IntroInformation />
            </div>
          )}
          <div className="drinks">
            <Drinks />
          </div>
          {mainPartner && (
            <div className="mainPartner">
              <MainPartnerIndex partner={mainPartner} />
            </div>
          )}
          <div className="jobs">
            <FeaturedJobWidget />
          </div>
          <div className="activity">
            <ActivityWidget />
          </div>
        </div>
      </IndexWrapper>
    </Layout>
  );
};
export default Index;

export const indexQuery = graphql`
  query colorQuery {
    contentfulBoard(current: { eq: true }) {
      color
    }
    allContentfulIntroInformation {
      nodes {
        enabled
      }
    }
    allContentfulPartner {
      edges {
        node {
          isMainPartner
          node_locale
          slug
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
