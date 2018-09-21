import { createMuiTheme } from '@material-ui/core';
import globals from '../styles/globals.json';

const theme = createMuiTheme({
  typography: {
    fontFamily: '\'Open Sans\', \'Helvetica\', \'Arial\', sans-serif',
  },
  palette: {
    primary: {
      main: `rgb(${globals.boardColor})`,
    },
  },
});


export default theme;
