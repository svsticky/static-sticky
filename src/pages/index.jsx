import React from 'react';
import Layout from '../components/layout/Layout';
import logo from '../images/sticky-logo-text.svg';
import Banner from '../components/Banner';
import News from '../components/News';
import Drinks from '../components/Drinks';
import IndexWrapper from '../components/layout/GridDryQueries';
import FeaturedJobs from '../components/jobs/FeaturedJobs';
import ActivityWidget from '../components/activities/ActivityWidget';
import ImageContainer from '../helpers/ImageContainer';

const Index = props => {
  return (
    <Layout>
      <IndexWrapper>
        <div className="container">
          <ImageContainer className="logo">
            <img src={logo} alt="Sticky Logo" />
          </ImageContainer>
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
            <FeaturedJobs />
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
