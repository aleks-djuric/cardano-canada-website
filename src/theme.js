import { createMuiTheme } from '@material-ui/core'

import 'typeface-dm-sans';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#E00404"
    },
    secondary: {
      main: "#FFFFFF"
    },
    text: {
      primary: "#083656",
      secondary: "#837890"
    },
    prussianBlue: {
      main: "#083656"
    }
  },
  typography: {
    fontFamily: '"DM Sans", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 600,
      fontSize: "3.25rem",
    },
    h2: {
      fontWeight: 500,
      fontSize: "2.25rem",
    },
    h3: {
      fontWeight: 500,
      fontSize: "1.5rem",
    },
    h4: {
      fontWeight: 500,
      fontSize: "1.25rem",
    },
    h5: {
      fontWeight: 500,
      fontSize: "1.0rem",
    },
    h6: {
      fontWeight: 500,
      fontSize: "0.75rem",
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: "1.5rem",
      lineHeight: 1.25,
      textTransform: "none"
    },
    subtitle2: {
      fontWeight: 400,
      fontSize: "1.1rem",
      lineHeight: 1.3,
      textTransform: "none"
    },
    body1: {
      fontWeight: 400,
      fontSize: "1.1rem",
    },
    body2: {
      fontWeight: 400,
      fontSize: "0.9rem",
    }
  }
});

export default theme;
