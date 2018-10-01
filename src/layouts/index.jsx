import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const layout = props => (
  <SiteWrapper>
    <Navbar pages={props.data.allContentfulPage.edges} />
    <div className="page">
      <div className="content">
        {props.children()}
      </div>
      <Footer />
    </div>
  </SiteWrapper>
);

/* These are also the globals styles to the website in general.
In .page there is an ugly hack to cancel out the standard
margin: 8 on the body-element without messing with html.js */
const SiteWrapper = styled.div`
  font-family: "Open Sans";
  .page {
    position: absolute;
    left: -8px;
    top: -8px;
    height: calc(100vh + 8px);
    width: calc(100vw + 8px);
    overflow-y: auto;
    background-color: #f6f6f6;
  }
  .content {
    a {
      font-weight: bold;
    }
    margin: 8em auto 4em auto;
    ${globals.media.small} { width: 95%; }
    ${globals.media.medium} { width: 88%; }
    ${globals.media.large} { width: 80%; }
    ${globals.media.veryLarge} { width: 75%; }
  }
`;

export const NavBarQuery = graphql`
  query NavBarQuery {
    allContentfulPage {
      edges {
        node {
          id
          title
          slug
          parentPage {
            title
            slug
          }
        }
      }
    }
  }
`;

export default layout;
