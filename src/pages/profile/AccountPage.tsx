import React, {useEffect} from "react";
import {useCookies} from 'react-cookie';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Button,
    createStyles,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Theme,
    Typography
} from "@material-ui/core";
import DarkTheme from '@material-ui/icons/Brightness4';
import LightTheme from '@material-ui/icons/Brightness7';
import {TypedUseSelectorHook, useDispatch, useSelector as useReduxSelector} from "react-redux";
import {deleteProfile, loadProfile, updateProfile} from "../../store/profileActions";
import {AppState} from "../../store/rootReducer";
import {Profile} from "../../domain/profile";
import {makeStyles} from "@material-ui/core/styles";
import {useGoogleLogout} from "react-google-login";

export const useSelector: TypedUseSelectorHook<AppState> = useReduxSelector;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        googlePanel: {
            backgroundColor: '#0F9D58',
        },
    }),
);

export const AccountPage: React.FC<{}> = () => {
    const classes = useStyles();
    const oauth2ClientId = process.env.REACT_APP_OAUTH2_CLIENT_ID || '';
    const [cookies, setCookie, removeCookie] = useCookies(['authToken']);
    const profile: Profile = useSelector(state => state.profileState.profile);
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if (cookies.authToken) {
            dispatch(loadProfile(cookies.authToken));
        }
    }, [cookies, dispatch]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = () => {
        setOpen(false);
        dispatch(deleteProfile(cookies.authToken));
        removeCookie('authToken', { path: '/' });
        signOut();
    };

    const {signOut} = useGoogleLogout({
        clientId: oauth2ClientId
    });

    const setDarkMode = () => {
        let useDarkMode = true;
        if (profile.darkTheme && profile.darkTheme) {
            useDarkMode = false;
        }

        dispatch(updateProfile(cookies.authToken, {
            darkTheme: useDarkMode
        }));
    };

    return (
        <>
            {profile.googleId ?
                <>
                    <h1>Account Settings</h1>
                    <List>
                        <ListItem button onClick={setDarkMode}>
                            <ListItemIcon>
                                {
                                    (profile.darkTheme === undefined || profile.darkTheme === null) ?
                                        <DarkTheme/> : (profile.darkTheme ? <DarkTheme/> : <LightTheme/>)
                                }
                            </ListItemIcon>
                            <ListItemText>Toggle Dark Theme</ListItemText>
                        </ListItem>
                    </List>
                    <Accordion expanded={true}>
                        <AccordionSummary
                            classes={{expanded: classes.googlePanel}}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Google</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Grid container spacing={3}>
                                <Grid item xs={6} sm={3} style={{backgroundColor: '#606060'}}>
                                    <Typography>Account</Typography>
                                </Grid>
                                <Grid item xs={6} sm={9}>
                                    <Typography>{profile.name} ({profile.email})</Typography>
                                </Grid>
                            </Grid>
                        </AccordionDetails>
                    </Accordion>
                    <Button variant="contained" color="secondary" onClick={handleClickOpen}>
                        Delete your account
                    </Button>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">Are you sure you want to delete your account?</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                Deleting your account will ensure that we remove all your saved information and
                                settings, while you will be able to re-make your account your current settings will be
                                lost forever. Do you wish to continue?
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} variant="contained" color="primary">
                                Cancel
                            </Button>
                            <Button onClick={handleDelete} variant="contained" color="secondary" autoFocus>
                                Delete
                            </Button>
                        </DialogActions>
                    </Dialog>
                </>
                :
                <h1>You must be logged in to access your account.</h1>
            }
        </>)
};