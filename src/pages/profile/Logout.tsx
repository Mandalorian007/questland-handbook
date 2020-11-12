import React from "react";
import {useGoogleLogout} from "react-google-login";
import {MenuItem} from "@material-ui/core";
import {useCookies} from "react-cookie";


export const Logout: React.FC<{
    onLogout?(): void
}> = ({onLogout}) => {
    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    const oauth2ClientId = process.env.REACT_APP_OAUTH2_CLIENT_ID || '';

    const onLogoutSuccess = () => {
        removeCookie('token');
        if (onLogout) {
            onLogout();
        }
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