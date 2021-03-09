import { createMuiTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#be5050",
    },
    secondary: {
      main: "#be5050",
    },
  },
  overrides: {
    MuiInputLabel: {
      root: {
        color: "#bbb8b8",
        fontWeight: "800",

        "&$focused": {
          color: "#be5050",
          fontWeight: "900",
        },
      },
    },
    MuiInputBase: {
      root: {
        color: "#686464",
        fontWeight: "800",
        "&$focused": {},
      },
    },
  },
});

const useStyles = makeStyles({
  root: {
    padding: "3px 30px",
    marginTop: "1rem",
    alignSelf: "flex-end",
    marginRight: "1rem",
    fontWeight: "800",
  },
});

export { theme, useStyles };
