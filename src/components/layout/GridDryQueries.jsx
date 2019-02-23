import { device } from '../../data/Devices';
import styled from 'styled-components';

const IndexWrapper = styled.div`
  .logo {
    grid-area: logo;
  }
  .banner {
    grid-area: banner;
  }
  .news {
    grid-area: news;
  }
  .drinks {
    grid-area: drinks;
  }
  .jobs {
    grid-area: jobs;
  }
  .activity {
    grid-area: activity;
  }

  @media ${device.mobileMax} {
    .container {
      margin-top: -1rem;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-areas:
        'logo'
        'banner'
        'news'
        'news'
        'drinks'
        'jobs'
        'activity';
      grid-gap: 2em;
    }
    .logo {
      background-color: #20730d;
      margin: -1rem;
      padding: 0.8rem 0 1rem 0;
      img {
        height: 7rem;
      }
    }
  }

  @media ${device.tablet} {
    .container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-areas:
        'banner banner'
        'news news'
        'drinks activity'
        'jobs activity';
      grid-gap: 3em;
    }
    .logo {
      display: none;
    }
  }
  @media ${device.laptop} {
    .container {
      display: grid;
      grid-template-columns: 3fr 1fr;
      grid-template-areas:
        'banner banner'
        'news drinks'
        'news jobs'
        'news activity'
        'news ...';
      grid-gap: 3em;
    }
    .logo {
      display: none;
    }
  }
`;

export default IndexWrapper;
