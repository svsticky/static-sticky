import { Link } from 'gatsby';
import React from 'react';
import { Segment, Button, Grid, Divider } from 'semantic-ui-react';
import { getTranslation } from '$/data/i18n';
import styled from 'styled-components';

const MainPartner = ({
  partner: { description, name, website, slug, node_locale, logo },
}) => (
  <MainPartnerWrapper>
    <Segment raised>
      <Grid columns={2}>
        <Grid.Column>
          <div className="logoContainer">
            <img src={logo.file.url} alt={name} />
          </div>
        </Grid.Column>
        <Grid.Column>
          <p>{description.description}</p>
        </Grid.Column>
      </Grid>
      <Divider vertical></Divider>
    </Segment>
    <Grid columns={3}>
      <Grid.Column>
        <Button fluid primary as={Link} to={website}>
          Website
        </Button>
      </Grid.Column>
      <Grid.Column>
        <Button fluid primary as={Link} to={`/${node_locale}/partners/${slug}`}>
          {getTranslation(node_locale, 'vacancy.title')}
        </Button>
      </Grid.Column>
      <Grid.Column>
        {/* TODO: Adjust link */}
        <Button fluid primary as={Link} to={`/${node_locale}/partners/${slug}`}>
          Contact
        </Button>
      </Grid.Column>
    </Grid>
  </MainPartnerWrapper>
);

const MainPartnerWrapper = styled.div`
  .logoContainer {
    height: 100%;
  }
  .logoContainer > img {
    width: 100%;
    position: relative;
    transform: translateY(-50%);
    top: 50%;
  }
`;

export default MainPartner;
