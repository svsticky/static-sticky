import translationNL from './nl.json';
import translationEN from './en.json';

const languages = {
  'en-US': translationEN,
  nl: translationNL,
};

export const getTranslation = (lg, key, words) => {
  const vars = key.split('.');
  let text;
  if (vars.length === 1) {
    text = languages[lg][key];
  } else {
    let trans = languages[lg] || '';
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
