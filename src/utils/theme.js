import { createMuiTheme } from '@material-ui/core/styles';

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
        "contrastThreshold": 1.8
    },
    "typography": {
        "fontFamily": "Nunito Sans",
        "fontSize": 16,
        "body1": {
            "fontFamily": "Nunito Sans"
        },
        "body2": {
            "fontFamily": "Nunito Sans"
        },
        "h1": {
            "fontFamily": "Nunito Sans"
        },
        "h2": {
            "fontFamily": "Nunito Sans"
        },
        "h3": {
            "fontFamily": "Nunito Sans"
        },
        "h4": {
            "fontFamily": "Nunito Sans"
        },
        "h5": {
            "fontFamily": "Nunito Sans"
        },
        "h6": {
            "fontFamily": "Nunito Sans"
        },
        "subtitle1": {
            "fontFamily": "Nunito Sans"
        },
        "subtitle2": {
            "fontFamily": "Nunito Sans"
        },
        "button": {
            "fontFamily": "Nunito Sans",
            "textTransform": "none"
        },
        "caption": {
            "fontFamily": "Nunito Sans"
        },
        "overline": {
            "fontFamily": "Nunito Sans"
        }
    }});

export default theme;