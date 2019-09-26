import React from 'react';
import Markdown from 'markdown-to-jsx';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout/Layout';
import { Button, Header, Icon, Image } from 'semantic-ui-react';
import { Composition } from 'atomic-layout';

const CommitteeView = ({ data: { contentfulCommittee: committee } }) => {
  return (
    <Layout>
      <Button
        as={Link}
        className="labeled icon basic"
        to="/vereniging/commissies"
      >
        <Icon name="angle left" />
        Commissies
      </Button>
      <Composition
        template={`
          logo
          info
          members
        `}
        templateSm={
          /*I couldn't find a better way to remove the spacing between the logo and members when the info is higher than their combined height, because their rows will get stretched.*/ `
          logoAboveMembers info
        `
        }
        templateMd={`
          logo info info members
        `}
        gutter="10px"
        marginTop={'10px' /* spacing for the button */}
      >
        {({ Logo, Info, Members, LogoAboveMembers }) => (
          <>
            <Logo>
              <Sticky>{renderLogo(committee)}</Sticky>
            </Logo>
            <Info>
              <Header className="huge">{committee.name}</Header>
              <Markdown>{committee.description.description}</Markdown>
            </Info>
            <LogoAboveMembers>
              <Sticky>{renderLogo(committee)}</Sticky>
            </LogoAboveMembers>
          </>
        )}
      </Composition>
    </Layout>
  );
};

const renderLogo = committee => (
  <Image
    src={committee.logo.file.url}
    alt={`${committee.name} logo`}
    centered
    size="medium"
  />
);

const Sticky = styled.div`
  top: 60px; // this is the height of the navbar (probably should make that dynamic) + 10 for nice spacing
  position: sticky;
`;

export default CommitteeView;

export const CommitteeQuery = graphql`
  query CommitteeQuery($id: String!) {
    contentfulCommittee(id: { eq: $id }) {
      id
      name
      description {
        description
      }
      logo {
        file {
          url
        }
      }
      photo {
        file {
          url
        }
      }
    }
  }
`;
