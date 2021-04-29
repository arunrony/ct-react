import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    "typography": {
        fontFamily: ["Montserrat", "Nunito Sans"],
        "fontSize": 15,
        "overline": {
            "lineHeight": 2.66
        },
        button: {
            textTransform: "none",
            fontSize: "larger"
        }
    },
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
        }
    }
});

export default theme;