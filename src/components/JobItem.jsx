import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Card from '../atoms/Card';


const Job = (props) => (
  <JobWrapper>
    <div className="logo-container">
      <Link to={'/partners/' + props.partner.name.replace(/\W+/g, '-').toLowerCase()}>
        <img className="logo"
          src={props.job.partner.logo.file.url}
          alt="Partner Logo"
        />
      </Link>
    </div>
    <Link to={"/vacatures/" + props.job.job_title.replace(/\W+/g, '-').toLowerCase()} className="content-container">	
      <Card hoverable>	
        <h3>{props.job.job_title}</h3>	
        {props.job.summary}	
      </Card>	
    </Link>
  </JobWrapper>
);


const JobWrapper = styled.div`
  text-decoration: none;
  display: grid;
  grid-template-columns: 1fr 3fr;
  &:hover {
  }
  .logo-container {
    display: flex;  
    align-items: center;
    justify-content: center;
    height: inherit;
    padding: 25px;
    background-color: #eee;
    border-radius: 8px 0 0 8px;
    .logo {
      width: auto;
      height: auto;
      margin: 0;
      transition: all 0.15s;
      &:hover {
        transform: scale(1.2);
      }
    }
  }
  .content-container {
    color: black;
    text-decoration: none;
    padding: 1em;
    text-align: justify;
  }
`


export default Job;
