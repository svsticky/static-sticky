export const metadata = {
  languages: {
    'en-US': require('./en-us.json'),
    nl: require('./nl.json'),
  },
  defaultLocale: 'nl',
};

export const getLanguage = window => {
  let language =
    typeof window !== 'undefined'
      ? window.location.href.split('/')[3]
      : metadata.defaultLocale;

  if (Object.keys(metadata.languages).indexOf(language) === -1) {
    language = metadata.defaultLocale;
  }

  return language;
};

export const getTranslation = (lg, key, words) => {
  const vars = key.split('.');
  let text;
  if (vars.length === 1) {
    text = metadata.languages[lg][key];
  } else {
    let trans = metadata.languages[lg] || '';
    for (let i = 0; i < vars.length; i++) {
      trans = trans[vars[i]] || '';
    }
    text = trans;
  }

  if (words) {
    for (let i = 0; i < words.length; i++) {
      text = text.replace(`{${i}}`, words[i]);
    }
    return text;
  } else {
    return text;
  }
};
