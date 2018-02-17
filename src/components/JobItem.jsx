import React from 'react';
import Link from 'gatsby-link';
import { Card, Label } from 'semantic-ui-react';
import Radium from 'radium';

const styles = {
  jobCard: {
    color: 'black',
  },
  header: {
    display: 'flex',
  },
  partnerLogo: {
    width: '100%',
  },
  logoContainer: {
    width: '80px',
    height: '50px',
    marginRight: '20px',
    display: 'flex',
    alignItems: 'center',
  },
};

const Job = ({ job }) => (
  <Card as={Link} to={'/vacatures/' + job.job_title.replace(/\W+/g, '-').toLowerCase()} fluid style={styles.jobCard}>
    <Card.Content style={styles.header}>
      <div style={styles.logoContainer}>
        <img src={job.partner.logo.file.url} alt="Partner Logo" style={styles.partnerLogo} />
      </div>
      <div>
        {job.job_title}
        <Card.Meta>
          {job.partner.name}
        </Card.Meta>
      </div>
      {job.featured &&
        <Label corner="right" color="yellow" icon="star" size="mini" />}
    </Card.Content>
    <Card.Content>
      <p>{job.summary}</p>
    </Card.Content>
  </Card>
);

export default Radium(Job);
