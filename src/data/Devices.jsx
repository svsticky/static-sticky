const size = {
  mobile: '320px',
  tablet: '760px',
  laptop: '1020px',
  desktop: '1281px',
  desktopL: '2560px',
};

export const device = {
  mobile: `(min-width: ${size.mobile})`,
  mobileMax: `(max-width: ${size.tablet})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktopL})`,
};
