import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Card from '../atoms/Card';


const Job = props => (
  <JobWrapper hoverable>
    <div className="logo-container">
      <Link to={'/partners/' + props.partner.name.replace(/\W+/g, '-').toLowerCase()}>
        <img className="logo"
          src={props.job.partner.logo.file.url}
          alt="Partner Logo"
        />
      </Link>
    </div>
    <Link to={"/vacatures/" + props.job.job_title.replace(/\W+/g, '-').toLowerCase()} className="content-container">	
      <div hoverable>	
        <h3>{props.job.job_title}</h3>	
        <p>{props.job.summary}</p>
      </div>	
    </Link>
  </JobWrapper>
);


const JobWrapper = styled(Card)`
  text-decoration: none;
  display: grid;
  grid-template-columns: 1fr 3fr;
  .logo-container {
    display: flex;  
    align-items: center;
    justify-content: center;
    height: inherit;
    width: inherit;
    padding: 10px;
    border-radius: 8px 0 0 8px;
    .logo {
      height: auto;
      width: 80%;
      margin: 10%;
      transition: all 0.15s;
      &:hover {
        transform: scale(1.2);
      }
    }
  }
  .content-container {
    color: black;
    text-decoration: none;
    padding: 0 1em 0 0;

    color: black !important;
    h3 { 
      margin: 0; 
      padding: 5px 0;
      border-bottom: 1px solid #ececec;
    }
    p {
      margin: 0.5em 0;
      font-weight: 300;
    }
  }
`


export default Job;
