import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
      primary: {
        main: '#1E91D6',
      },
      secondary: {
        main: '#ffffff',
      }
    },
    typography: {
      h1: {
        fontSize: "2.5rem",
        fontWeight: "bold"
      },
      h5: {
        fontSize: "1.5rem",
        fontWeight: "bold"
      }
    }
  });