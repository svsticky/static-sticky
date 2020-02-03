import React from 'react';
import Layout from '../components/layout/Layout';
import { getTranslation } from '../data/i18n';

const languages = ['nl', 'en-US'];
const urlLg =
  typeof window !== 'undefined' ? window.location.href.split('/')[3] : 'nl';
const language = languages.indexOf(urlLg) !== -1 ? urlLg : 'nl';

const NotFoundPage = () => (
  <Layout title="404">
    <h1>{getTranslation(language, '404.title')}</h1>
    <p>{getTranslation(language, '404.description')}</p>
  </Layout>
);

export default NotFoundPage;
