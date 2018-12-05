import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout/Layout';
import Banner from '../components/Banner';
import News from '../components/News';
import Drinks from '../components/Drinks';
import IndexWrapper from '../components/Grid';
import FeaturedJobs from '../components/jobs/FeaturedJobs';
import ActivityWidget from '../components/activities/ActivityIndex';

const Index = props => {
  return (
    <Layout>
      <IndexWrapper>
        <h1>Homepage</h1>
        <div className="container">
          <div className="banner">
            <Banner />
          </div>
          <div className="news">
            <News />
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
