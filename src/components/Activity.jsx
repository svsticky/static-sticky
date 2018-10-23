import React from 'react';
import styled from 'styled-components';
import { Button, Card, Image, Reveal } from 'semantic-ui-react';

const Activity = (props) => {
  const { name, poster, location } = props.activity;
  return(
    <ActivityWrapper fluid>
      <Reveal animated='move' instant>
        <Reveal.Content visible>
          <Image src={poster} />
        </Reveal.Content>
        <Reveal.Content hidden>
          <h3>{name}</h3>
          <Button fluid className="signup" href="https://koala.svsticky.nl/">Inschrijven</Button>
        </Reveal.Content>
      </Reveal>
    </ActivityWrapper>
  )
}

const ActivityWrapper = styled(Card)`
  display: flex;
  h3 {
    text-align: center;
    margin: 0.5em;
    flex: 1;
  }
  .signup {
    bottom: 0;
  }
`;

export default Activity;