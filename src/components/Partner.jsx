import React from 'react';
import { ImageContainer, LinkLogoCard } from '../helpers';

const Partner = ({ partner }) => (
  <LinkLogoCard
    url={`/${partner.node_locale}/partners/${partner.slug}`}
    listItem
    name={partner.name}
  >
    <ImageContainer src={partner.logo.file.url} alt={`Logo ${partner.name}`} />
  </LinkLogoCard>
);

export default Partner;
