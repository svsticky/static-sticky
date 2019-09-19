import React from 'react';
import Layout from '../components/layout/Layout';
import logo from '../images/sticky-logo-text.svg';
import Banner from '../components/Banner';
import News from '../components/News';
import Drinks from '../components/Drinks';
import IndexWrapper from '../components/layout/GridDryQueries';
import FeaturedJobWidget from '../components/jobs/FeaturedJobWidget';
import ActivityWidget from '../components/activities/ActivityWidget';
import { boardColor } from '../data/boardColor';

const Index = props => {
  return (
    <Layout title="Sticky">
      <IndexWrapper boardcolor={boardColor}>
        <div className="container">
          <div className="logo">
            <img src={logo} alt="Sticky Logo" />
          </div>
          <div className="banner">
            <Banner />
          </div>
          <div className="news">
            <News itemsPerPage="5" />
          </div>
          <div className="drinks">
            <Drinks />
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
