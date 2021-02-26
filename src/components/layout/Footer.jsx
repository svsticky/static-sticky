import React from 'react';
import styled from 'styled-components';
import { getTranslation, getLanguage, metadata } from '../../data/i18n';

const language =
  typeof window !== 'undefined' ? getLanguage(window) : metadata.defaultLocale;

const Footer = () => (
  <FooterWrapper>
    <footer>
      <div className="ui centered container inverted divided three column grid">
        <div className="aligned column">
          <a href="/">
            <div class="ui mini image">
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
            <i class="big facebook icon"></i>
          </a>
          <a href="https://www.linkedin.com/company/studievereniging-sticky">
            <i class="big linkedin icon"></i>
          </a>
          <a href="https://github.com/svsticky/">
            <i class="big github icon"></i>
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
  footer {
    background-color: #444;
    color: white;

    a {
      color: white;
      margin: 1rem;
      font-size: 1.1rem;
    }

    .column {
      display: flex;
      align-items: center;
    }
  }
`;

export default Footer;
