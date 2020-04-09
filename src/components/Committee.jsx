import React from 'react';
import { ImageContainer, LinkLogoCard } from '../helpers';
import { getTranslation } from '../data/i18n';

const Committee = ({ committee }) => (
  <LinkLogoCard
    url={`/${committee.node_locale}/commissies/${committee.slug}`}
    listItem
    name={committee.name}
  >
    <ImageContainer
      src={committee.logo.file.url}
      alt={getTranslation(committee.node_locale, 'committee.logo')}
    />
  </LinkLogoCard>
);

export default Committee;
