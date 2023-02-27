import React from 'react';
import { Card } from 'semantic-ui-react';
import { Link } from 'gatsby';
import { getTranslation, getLanguage, metadata } from '$/data/i18n';
import { ImageContainer } from '$/helpers/ImageContainer';

const MainPartnerCard = ({ partner }) => {
  const language =
    typeof window !== 'undefined'
      ? getLanguage(window)
      : metadata.defaultLocale;
  return (
    <div>
      <h2>{getTranslation(language, 'partners.main')}</h2>
      <Card
        fluid
        as={Link}
        to={`/${partner.node_locale}/partners/${partner.slug}`}
      >
        <ImageContainer src={partner.logo.file.url} />
      </Card>
    </div>
  );
};
export default MainPartnerCard;
