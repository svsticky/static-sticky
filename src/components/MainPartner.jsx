import { Link } from 'gatsby';
import React from 'react';
import { Segment, Button, Grid, Divider } from 'semantic-ui-react';
import { getTranslation } from '../data/i18n';

const MainPartner = partner => {
  const {
    description,
    name,
    website,
    slug,
    node_locale,
    logo,
  } = partner.partner;
  const imageStyle = {
    width: '100%',
    position: 'relative',
    transform: 'translateY(-50%)',
    top: '50%',
  };
  const containerStyle = { height: '100%' };
  return (
    <>
      <Segment raised>
        <Grid columns={2}>
          <Grid.Column>
            <div style={containerStyle}>
              <img style={imageStyle} src={logo.file.url} alt={name} />
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
          <Button
            fluid
            primary
            as={Link}
            to={`/${node_locale}/partners/${slug}`}
          >
            {getTranslation(node_locale, 'vacancy.title')}
          </Button>
        </Grid.Column>
        <Grid.Column>
          <Button
            fluid
            primary
            as={Link}
            to={`/${node_locale}/partners/${slug}`}
          >
            Contact
          </Button>
        </Grid.Column>
      </Grid>
    </>
  );
};

export default MainPartner;
