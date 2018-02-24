import globalStyles from './globalStyles';

const responsive = {
  hide: {
    desktop: {
      [globalStyles.screen.desktop]: {
        display: 'none',
      },
    },
    tabletUp: {
      [globalStyles.screen.tabletUp]: {
        display: 'none',
      },
    },
    tabletDown: {
      [globalStyles.screen.tabletDown]: {
        display: 'none',
      },
    },
    mobile: {
      [globalStyles.screen.mobile]: {
        display: 'none',
      },
    },
  },
};

export default responsive;
