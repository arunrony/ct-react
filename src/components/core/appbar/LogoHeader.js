import logo from '../../../images/core/logo-long.svg'
import {makeStyles} from "@material-ui/core/styles";
import {AppBar, Link, Toolbar} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    brand: {
        lineHeight: 1,
        marginRight: 'auto',
        minHeight: "100px",
        minWidth:"250px"
    },
    link: {
        color: "#fff",
        marginRight: theme.spacing(5),
    }
}));

const LogoHeader = ({menuItems = []}) => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                <img src={logo} alt="" width="150" className={classes.brand}/>

                {menuItems.map((menuItem) => <Link key={menuItem.name} href={menuItem.link} className={classes.link}
                                                   variant="subtitle1" underline="none">{menuItem.name}</Link>)}
            </Toolbar>
        </AppBar>
    )
}

export default LogoHeader