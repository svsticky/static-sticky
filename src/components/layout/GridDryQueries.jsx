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
  .mailchimp {
    grid-area: mailchimp;
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
        'activity'
        'mailchimp';
      grid-gap: 2em;
    }
    .logo {
      background-color: ${props => props.color};
      margin: -1rem;
      padding: 0.8rem 0 1rem 0;
      display: flex;
      justify-content: center;
      img {
        height: 6rem;
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
        'jobs activity'
        'mailchimp ...';
      grid-gap: 3em;
    }
    .logo {
      display: none;
    }
  }

  @media ${device.smallMonitor} {
    .container {
      display: grid;
      grid-template-columns: 3fr 1fr;
      grid-template-areas:
        'banner banner'
        'news drinks'
        'news jobs'
        'news activity'
        'news mailchimp';
      grid-gap: 3em;
    }
    .logo {
      display: none;
    }
  }
`;

export default IndexWrapper;
