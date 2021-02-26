import React from 'react';
import styled from 'styled-components';

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
          <a href="/vereniging/over-ons">Over Ons</a>
          <a href="/vereniging/contact">Contact</a>
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
          <a href="/carriere/partners">Partners</a>
          <a href="/carriere/samenwerking">Adverteren</a>
          <a href="https://public.svsticky.nl/privacystatement.pdf">Privacy</a>
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
