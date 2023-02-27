import React from 'react';
import { graphql } from 'gatsby';

// Components
import Layout from '$/components/layout/Layout';
import Banner from '$/components/Banner';
import News from '$/components/News';
import Drinks from '$/components/Drinks';
import MainPartnerIndex from '$/components/MainPartnerIndex';
import MainPartnerBanner from '$/components/MainPartnerBanner';
import IndexWrapper from '$/components/layout/GridDryQueries';
import FeaturedJobWidget from '$/components/jobs/FeaturedJobWidget';
import ActivityWidget from '$/components/activities/ActivityWidget';

import logo from '$/images/sticky-logo-text.svg';

const Index = ({ data }) => {
  const mainPartner = data.allContentfulPartner.edges.filter(
    edge => edge.node.isMainPartner
  )[0].node;
  return (
    <Layout title="Sticky">
      <IndexWrapper
        color={!data.contentfulBoard ? '#000000' : data.contentfulBoard.color}
      >
        <div className="container">
          <div className="logo">
            <img src={logo} alt="Sticky Logo" />
          </div>
          <div className="banner">
            <MainPartnerBanner partner={mainPartner} />
            <Banner />
          </div>
          <div className="news">
            <News itemsPerPage="5" />
          </div>
          <div className="drinks">
            <Drinks />
          </div>
          <div className="mainPartner">
            <MainPartnerIndex partner={mainPartner} />
          </div>
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
