import {device} from '../../data/Devices';
import styled from 'styled-components'
const IndexWrapper = styled.div`
{
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
      }
    }
    }      
    
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
        }
      }
    }
    
    
    @media ${device.tablet}
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
        }
      }
    }
    `;


export default IndexWrapper


