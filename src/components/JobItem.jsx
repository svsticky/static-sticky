import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { Card, Image } from 'semantic-ui-react';


const Job = props => (
  <JobWrapper>
    <Card fluid className='card'
        href={'/partners/' + props.partner.name.replace(/\W+/g, '-').toLowerCase()}>
      <Card.Content className='contentcontainer'>
        <Image className='image' src= {props.job.partner.logo.file.url}/>
        <Card.Header className='header'>{props.job.job_title}</Card.Header>
        <Card.Description className='desc'>{props.job.summary}</Card.Description>
      </Card.Content>
     </Card>
  </JobWrapper>
);


const JobWrapper = styled.div`
  &&&
  .card{
    height:100%;
  }
  .contentcontainer{
    display: grid;
    grid-template-rows: 40% 10% 50%;
    grid-template-columns: 100%;
    row-gap: 5px;
    grid-auto-flow: row;
  }
  .image{
    grid-row: 1;
  }
  .header{
  }
  .desc{
    vertical-align: text-bottom;
  }

`;


export default Job;
