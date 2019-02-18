import { device } from '../../data/Devices';
import styled from 'styled-components';

const IndexWrapper = styled.div`
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

  @media ${device.mobile} {
    .container {
      margin-top: -4rem;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-areas:
        'banner'
        'news'
        'news'
        'drinks'
        'jobs'
        'activity';
      grid-gap: 2em;
    }
    .activity {
      grid-area: activity;
      width: 40%;
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
      grid-gap: 2em;
    }
    .activity {
      grid-area: activity;
      width: auto;
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
    .activity {
      grid-area: activity;
      width: auto;
    }
  }
`;

export default IndexWrapper;
