import { Link } from 'gatsby';
import React from 'react';
import { Card } from 'semantic-ui-react';
import styled from 'styled-components';

const MainPartnerBanner = ({ partner }) => (
  <MainPartnerBannerWrapper>
    <Card
      fluid
      className="mainPartnerBanner-card"
      as={Link}
      to={`/${partner.node_locale}/partners/${partner.slug}`}
      raised
    >
      <img src={partner.logo.file.url} />
    </Card>
  </MainPartnerBannerWrapper>
);

const MainPartnerBannerWrapper = styled.div`
  img {
    width: 100%;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }

  .mainPartnerBanner-card {
    height: 100%;
  }
`;

export default MainPartnerBanner;
