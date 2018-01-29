import React from 'react';
import Job from './Job';

const JobsList = ({ data }) => {
    return(
        <div>
            {data.map(job => (
                <Job job={job.node}/>
            ))}
        </div>
    );
}

export default JobsList