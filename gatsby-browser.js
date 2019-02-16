import React from 'react';
import ContextProvider from '$/data/Context';

export const wrapRootElement = ({ element }) => {
  return <ContextProvider>{element}</ContextProvider>;
};
