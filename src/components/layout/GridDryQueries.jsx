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
      grid-template-columns: repeat(2, 1fr);
      grid-template-areas:
        'banner banner'
        'news drinks'
        'news jobs'
        'news activity';
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
      grid-template-columns: repeat(4, 1fr);
      grid-template-areas:
        'banner banner banner banner'
        'news news news drinks'
        'news news news jobs'
        'news news news activity';
      grid-gap: 2em;
    }
    .activity {
      grid-area: activity;
      width: auto;
    }
  }

  @media ${device.desktop} {
    .container {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-areas:
        'banner banner banner banner'
        'news news news drinks'
        'news news news jobs'
        'news news news activity';
      grid-gap: 2em;
    }
    .activity {
      grid-area: activity;
      width: auto;
    }
  }

  @media ${device.desktopL} {
    .container {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-areas:
        'banner banner banner banner'
        'news news news drinks'
        'news news news jobs'
        'news news news activity';
      grid-gap: 2em;
    }
    .activity {
      grid-area: activity;
      width: auto;
    }
  }
`;

export default IndexWrapper;
