import React from 'react';

const Job = ({ job }) => {
    return(
        <div>
            <h3>{job.job_title}</h3>
            <p>{job.summary}</p>
        </div>
    );
}

export default Job