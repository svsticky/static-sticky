import React from 'react';
import { ImageContainer, LinkLogoCard } from '../helpers';

const Partner = ({ partner }) => (
  <LinkLogoCard
    url={`/${partner.node_locale}/partners/${partner.slug}`}
    listItem
  >
    <ImageContainer src={partner.logo.file.url} alt="Partner Logo" />
  </LinkLogoCard>
);

export default Partner;
