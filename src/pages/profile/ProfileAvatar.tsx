import React from "react";
import {Login} from "./Login";
import {GoogleLoginResponse, GoogleLoginResponseOffline} from "react-google-login";
import {LoggedInMenu} from "./LoggedInMenu";

export const ProfileAvatar: React.FC<{}> = () => {
    const [loggedIn, setLoggedIn] = React.useState(false);

    const signIn = (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
        setLoggedIn(true);
    };

    return (
        <>
            {!loggedIn ? <Login onLoginSuccess={signIn}
                                onLoginFailure={() => setLoggedIn(false)}/> :
                <LoggedInMenu onLogout={() => setLoggedIn(false)}/>}
        </>
    )
};