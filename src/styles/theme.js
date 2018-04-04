import { createMuiTheme } from 'material-ui/styles';


const bestuurskleur = "#000078";

const theme = createMuiTheme({
    palette: {
      primary: {
        main: bestuurskleur 
      },
      secondary: { 
        main: '#11cb5f' 
      },
    },
  }
);

export default theme;