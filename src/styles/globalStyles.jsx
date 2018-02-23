const globalStyles = {
  media: {
    hideOnTabletAndUp: {
      '@media screen and (min-width: 768px)': {
        display: 'none'
      },
    },
    hideOnTabletAndDown: {
      '@media screen and (max-width: 768px)': {
        display: 'none',
      },
    },
  },
  theme: {
    bestuurskleur: '#000078',
  },
};

export default globalStyles;