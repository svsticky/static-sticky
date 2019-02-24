const size = {
  tablet: '768px',
  smallMonitor: '992px',
  largeMonitor: '1200px',
};

export const device = {
  mobileMax: `(max-width: ${size.tablet})`,
  tablet: `(min-width: ${size.tablet})`,
  smallMonitor: `(min-width: ${size.smallMonitor})`,
  largeMonitor: `(min-width: ${size.largeMonitor})`,
};
