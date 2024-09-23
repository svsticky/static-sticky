import React from 'react';
import styled from 'styled-components';
import { device } from '../../data/Devices';
import { getTranslation, getLanguage, metadata } from '../../data/i18n';

const language =
  typeof window !== 'undefined' ? getLanguage(window) : metadata.defaultLocale;

const Footer = () => (
  <FooterWrapper>
    <div className="mobile"></div>
    <footer>
      <div className="ui centered container inverted divided three column grid">
        <div className="aligned column grid">
          <a href="/">
            <div className="ui mini image">
              <img
                src="https://public.svsticky.nl/logos/hoofd_outline_wit.svg"
                alt="Home"
              ></img>
            </div>
          </a>
          <a href="/vereniging/over-ons">
            {getTranslation(language, 'footer.about_us')}
          </a>
          <a href="/vereniging/contact">
            {getTranslation(language, 'footer.contact')}
          </a>
        </div>
        <div className="aligned column">
          <a href="https://svsticky.nl/facebook">
            <i className="big facebook icon"></i>
          </a>
          <a href="https://www.instagram.com/stickyutrecht/">
            <i className="big instagram icon"></i>
          </a>
          <a href="https://www.linkedin.com/company/studievereniging-sticky">
            <i className="big linkedin icon"></i>
          </a>
          <a href="https://github.com/svsticky/">
            <i className="big github icon"></i>
          </a>
        </div>
        <div className="aligned column grid">
          <a href="/carriere/partners">
            {getTranslation(language, 'footer.partners')}
          </a>
          <a href="/carriere/samenwerking">
            {getTranslation(language, 'footer.advertising')}
          </a>
          <a href="https://public.svsticky.nl/privacystatement.pdf">
            {getTranslation(language, 'footer.privacy')}
          </a>
        </div>
      </div>
    </footer>
  </FooterWrapper>
);

const FooterWrapper = styled.div`
  .mobile {
    display: block;
    @media ${device.tablet} {
      display: none;
    }
    height: 42px;
  }

  footer {
    display: none;
    margin-top: 2rem;

    .container {
      margin-bottom: 0 !important;
    }

    @media ${device.tablet} {
      display: block;
      margin-top: 1rem;
    }

    background-color: #444;
    color: white;

    a {
      color: white;
      margin: 1rem;
      font-size: 1.1rem;
    }

    i,
    img {
      font-size: 1.9rem !important;
    }

    .column {
      display: flex;
      align-items: center;
      padding: 0.2rem !important;
      @media ${device.smallMonitor} {
        padding: 0.4rem !important;
      }
    }
  }
`;

export default Footer;
