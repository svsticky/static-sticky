import React from 'react';
import { ImageContainer, LinkLogoCard } from '../helpers';

const Dispute = ({ dispute }) => (
  <LinkLogoCard
    url={`/${dispute.node_locale}/disputen/${dispute.slug}`}
    listItem
  >
    <ImageContainer src={dispute.logo.file.url} alt="Dispuut Logo" />
  </LinkLogoCard>
);

export default Dispute;
