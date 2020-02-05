import React from 'react';
import Layout from '../components/layout/Layout';
import { getTranslation, getLanguage, metadata } from '../data/i18n';

const language =
  typeof window !== 'undefined' ? getLanguage(window) : metadata.defaultLocale;

const NotFoundPage = () => (
  <Layout title="404">
    <h1>{getTranslation(language, '404.title')}</h1>
    <p>{getTranslation(language, '404.description')}</p>
  </Layout>
);

export default NotFoundPage;
