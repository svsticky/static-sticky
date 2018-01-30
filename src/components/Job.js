import React from 'react';
import { Card } from 'semantic-ui-react';

const Job = ({ job }) => {
    return(
        <Card>
            <h3>{job.job_title}</h3>
            <p>{job.summary}</p>
        </Card>
    );
}

export default Job