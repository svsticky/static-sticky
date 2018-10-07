import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { Card, Image } from 'semantic-ui-react';


const Job = props => (
    <Card fluid
        href={'/partners/' + props.partner.name.replace(/\W+/g, '-').toLowerCase()}>
        <Card.Content>
        <Image src= {props.job.partner.logo.file.url}/>
        <Card.Header>{props.job.job_title}</Card.Header>
        <Card.Description>{props.job.summary}</Card.Description>
        </Card.Content>
     </Card>
);


const JobWrapper = styled.div`

`;


export default Job;
