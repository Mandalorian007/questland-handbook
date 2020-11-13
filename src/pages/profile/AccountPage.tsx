import React, {useEffect} from "react";
import {useCookies} from 'react-cookie';
import {IconButton} from "@material-ui/core";
import DarkTheme from '@material-ui/icons/Brightness4';
import LightTheme from '@material-ui/icons/Brightness7';
import {TypedUseSelectorHook, useDispatch, useSelector as useReduxSelector} from "react-redux";
import {loadProfile, updateProfile} from "../../store/profileActions";
import {AppState} from "../../store/rootReducer";
import {Profile} from "../../domain/profile";

export const useSelector: TypedUseSelectorHook<AppState> = useReduxSelector;

export const AccountPage: React.FC<{}> = () => {
    const [cookies] = useCookies(['token']);
    const profile: Profile = useSelector(state => state.profileState.profile);
    const dispatch = useDispatch();

    useEffect(() => {
        if (cookies.token) {
            dispatch(loadProfile(cookies.token));
        }
    }, [cookies, dispatch]);

    const setDarkMode = () => {
        let useDarkMode = true;
        if (profile.darkTheme && profile.darkTheme) {
            useDarkMode = false;
        }

        dispatch(updateProfile(cookies.token, {
            darkTheme: useDarkMode
        }));
    };

    return (
        <>
            {cookies.token ?
                <>
                    <h1>Account Settings</h1>
                    <span>
                        <h3>Toggle Dark Theme</h3>
                        <IconButton onClick={setDarkMode}>
                            {
                                profile.darkTheme === undefined ? <DarkTheme/> : (profile.darkTheme ? <DarkTheme/> : <LightTheme/>)
                            }
                        </IconButton>
                    </span>
                </>
                :
                <h1>You must be logged in to access your account.</h1>
            }
        </>)
};