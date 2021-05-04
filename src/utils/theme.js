import {createMuiTheme} from '@material-ui/core/styles';

const theme = createMuiTheme({
    "palette": {
        "primary": {
            "main": "#000000",
            "light": "#73747B",
            "dark": "#000000"
        },
        "secondary": {
            "main": "#FFC500",
            "light": "#DBAE18",
            "dark": "#FFC500",
            "contrastText": "#000000"
        },
        "text": {
            "primary": "#060606",
            "secondary": "#FFC500",
            "hint": "#9FA8DA"
        },
        "background": {
            "emphasis": "rgba(255, 197, 0, 0.48)",
            "secondary": "#FFC500",
            "default": "#FFF",
            "header": "#121037"
        },
    },
    typography: {
    button: {
      textTransform: "none"
    }
  }

});

export default theme;