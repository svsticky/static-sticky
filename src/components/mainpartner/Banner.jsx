import { Link } from 'gatsby';
import React from 'react';
import { Card } from 'semantic-ui-react';
import styled from 'styled-components';

const Banner = ({ partner }) => (
  <BannerWrapper>
    <Card
      fluid
      className="mainPartnerBanner-card"
      as={Link}
      to={`/${partner.node_locale}/partners/${partner.slug}`}
    >
      <img src={partner.logo.file.url} />
    </Card>
  </BannerWrapper>
);

const BannerWrapper = styled.div`
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

export default Banner;
