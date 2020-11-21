import React from "react";
import {useGoogleLogout} from "react-google-login";
import {MenuItem} from "@material-ui/core";
import {useCookies} from "react-cookie";
import {useDispatch} from "react-redux";
import {unloadProfile} from "../../store/profileActions";


export const Logout: React.FC<{}> = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['authToken']);
    const oauth2ClientId = process.env.REACT_APP_OAUTH2_CLIENT_ID || '';
    const dispatch = useDispatch();

    const onLogoutSuccess = () => {
        removeCookie('authToken', { path: '/' });
        dispatch(unloadProfile());
    };

    const {signOut} = useGoogleLogout({
        clientId: oauth2ClientId,
        onLogoutSuccess
    });

    return (
        <MenuItem onClick={signOut}>
            Logout
        </MenuItem>
    );
};