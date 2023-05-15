import { purple } from '@mui/material/colors';
import { experimental_extendTheme as extendTheme } from '@mui/material/styles';

const theme = extendTheme({
  colorSchemes: {
    light: {
      // palette for light mode
      palette: {
        primary: {
          main: purple[700]
        }
      }
    },
    dark: {
      // palette for dark mode
      palette: {
        primary: {
          main: purple[200]
        }
      }
    }
  }
});

export default theme;
