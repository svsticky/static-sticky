import React from 'react';
import { ImageContainer, LinkLogoCard } from '../helpers';
import { getTranslation } from '../data/i18n';

const Dispute = ({ dispute }) => (
  <LinkLogoCard
    url={`/${dispute.node_locale}/disputen/${dispute.slug}`}
    listItem
  >
    <ImageContainer
      src={dispute.logo.file.url}
      alt={getTranslation(dispute.node_locale, 'society.logo')}
    />
  </LinkLogoCard>
);

export default Dispute;
