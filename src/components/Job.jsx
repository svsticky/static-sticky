import React from 'react';
import { Card, Label } from 'semantic-ui-react';

const Job = ({ job }) => (
  <Card fluid>
    <Card.Content>
      <Card.Header>
        {job.job_title}
        {job.featured &&
          <Label corner="right" color="yellow" icon="star" size="mini" />
        }
      </Card.Header>
      <Card.Meta>
        {job.partner.name}
      </Card.Meta>
      <p>{job.summary}</p>
      <p>{job.target_studies}</p>
      <p>{job.type}</p>
    </Card.Content>
  </Card>
);

export default Job;
