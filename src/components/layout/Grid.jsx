import {device} from '../../data/Devices';
import styled from 'styled-components'
const IndexWrapper = styled.div`
{
  @media ${device.mobile}
  {
      &&&
      .container {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-areas:
        "banner"
        "news"
        "news"
        "drinks"
        "jobs"
        "activity";
        grid-gap: 2em;    
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
        width: 40vw;
      }
    }
  } 
  @media ${device.tablet}
  {
      &&&
      .container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-areas:
        "banner banner"
        "news drinks"
        "news jobs"
        "news activity";
        grid-gap: 2em;    
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
        width: 75%;
      }
    }
  }
    @media ${device.laptop}
    {
      &&&
      .container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-areas:
        "banner banner banner banner"
        "news news news drinks"
        "news news news jobs"
        "news news news activity";
        grid-gap: 2em;    
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
        width: 100%
      }
    }
    }          

    @media ${device.desktop}
    {
      &&&
      .container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-areas:
        "banner banner banner banner"
        "news news news drinks"
        "news news news jobs"
        "news news news activity";
        grid-gap: 2em;    
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
        width: 100%
      }
    }
    } 

    @media ${device.desktopL}
    {
      &&&
      .container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-areas:
        "banner banner banner banner"
        "news news news drinks"
        "news news news jobs"
        "news news news activity";
        grid-gap: 2em;    
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
        width: 100%
      }
    }
    } 
    `;


export default IndexWrapper


