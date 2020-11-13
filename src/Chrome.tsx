import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {createMuiTheme, createStyles, makeStyles, Theme, ThemeOptions, ThemeProvider} from '@material-ui/core/styles';
import {Container, Grid, Paper} from '@material-ui/core';
import {NavItemGroup, RoutableNavList} from './components/chrome/RoutableNavList';
import {TypedUseSelectorHook, useSelector as useReduxSelector} from "react-redux";
import {AppState} from "./store/rootReducer";
import {Profile} from "./domain/profile";
import {ProfileAvatar} from "./pages/profile/ProfileAvatar";

const drawerWidth = 240;

const dark: ThemeOptions = {
    palette: {
        type: 'dark'
    }
};

const light: ThemeOptions = {
    palette: {
        type: 'light'
    }
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        drawer: {
            [theme.breakpoints.up('sm')]: {
                width: drawerWidth,
                flexShrink: 0
            }
        },
        appBar: {
            [theme.breakpoints.up('sm')]: {
                width: `calc(100% - ${drawerWidth}px)`,
                marginLeft: drawerWidth
            }
        },
        menuButton: {
            marginRight: theme.spacing(2),
            [theme.breakpoints.up('sm')]: {
                display: 'none'
            }
        },
        toolbar: theme.mixins.toolbar,
        drawerPaper: {
            width: drawerWidth
        },
        lists: {
            backgroundColor: theme.palette.background.paper,
            marginTop: theme.spacing(1)
        },
        nested: {
            paddingLeft: theme.spacing(4)
        },
        contentContainer: {
            display: 'flex',
            minHeight: '100vh',
            flexDirection: 'column',
        },
        content: {
            flex: 1,
            padding: theme.spacing(3),
        },
        footer: {
            padding: theme.spacing(0),
            paddingTop: theme.spacing(3),
            paddingBottom: theme.spacing(0),
        },
        footerContent: {
            padding: theme.spacing(2)
        }
    })
);

export const useSelector: TypedUseSelectorHook<AppState> = useReduxSelector;

export const Chrome: React.FC<{
    title: string;
    navItemGroups: NavItemGroup[];
}> = ({title, navItemGroups, children}) => {
    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const profile: Profile = useSelector(state => state.profileState.profile);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <ThemeProvider theme={createMuiTheme((profile.darkTheme === undefined ? dark : (profile.darkTheme ? dark : light)))}>
            <div className={classes.root}>
                <CssBaseline/>
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            className={classes.menuButton}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" noWrap style={{flex: 1}}>
                            {title}
                        </Typography>
                        <ProfileAvatar/>
                    </Toolbar>
                </AppBar>
                <nav className={classes.drawer} aria-label="mailbox folders">
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Hidden smUp implementation="css">
                        <Drawer
                            variant="temporary"
                            anchor="left"
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            classes={{
                                paper: classes.drawerPaper
                            }}
                            ModalProps={{
                                keepMounted: true // Better open performance on mobile.
                            }}
                        >
                            <Paper>
                                <div className={classes.toolbar}/>
                                <Divider/>
                                <RoutableNavList navItemGroups={navItemGroups}/>
                            </Paper>
                        </Drawer>
                    </Hidden>
                    <Hidden xsDown implementation="css">
                        <Drawer
                            classes={{
                                paper: classes.drawerPaper
                            }}
                            variant="permanent"
                            open
                        >
                            <Paper>
                                <div className={classes.toolbar}/>
                                <RoutableNavList navItemGroups={navItemGroups}/>
                            </Paper>
                        </Drawer>
                    </Hidden>
                </nav>
                <Container className={classes.contentContainer}>
                    <Container component="main" className={classes.content}>
                        <div className={classes.toolbar}/>
                        {children}
                    </Container>
                    <Container component="footer" className={classes.footer}>
                        <Paper>
                            <Grid container direction="row" alignItems="center" className={classes.footerContent}>
                                <Typography variant="body1">Learn more about Questland at my
                                    Patreon{`\xa0\xa0`}</Typography>
                                <a href="https://www.patreon.com/bePatron?u=33921067" target="_blank"
                                   rel="noopener noreferrer">
                                    <img
                                        src="https://www.questland-handbook.com/become_a_patron_button@2x.png"
                                        alt="unable to load patreon logo"
                                        width={160}
                                    />
                                </a>
                            </Grid>
                        </Paper>
                    </Container>
                </Container>
            </div>
        </ThemeProvider>
    );
};
