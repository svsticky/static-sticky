import { createMuiTheme } from 'material-ui/styles';


const bestuurskleur = "rgb(0, 0, 120)";

const theme = createMuiTheme({
    palette: {
      primary: {
        main: bestuurskleur 
      },
    },
  }
);


export default theme;