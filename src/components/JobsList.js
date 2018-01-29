import React from 'react';

const JobsList = ({ data }) => {
    return(
        <div>
            {data.map(job => (
                <h3>{job.node.job_title}</h3>
            ))}
        </div>
    );
}

export default JobsList