import React from "react";
import {GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline} from "react-google-login";
import {useCookies} from 'react-cookie';
import {useDispatch} from "react-redux";
import {loadProfile} from "../../store/profileActions";


export const Login: React.FC<{}> = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['authToken']);
    const oauth2ClientId = process.env.REACT_APP_OAUTH2_CLIENT_ID || '';
    const dispatch = useDispatch();

    const onSuccess = (res: GoogleLoginResponse | GoogleLoginResponseOffline): void => {
        refreshTokenSetup(res);
    };

    const onFailure = (error: any): void => {
        removeCookie('authToken', { path: '/' });
    };

    const refreshTokenSetup = (res: any) => {
        // Timing to renew access token
        let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;
        const idToken = res.getAuthResponse().id_token;
        setCookie('authToken', idToken, { path: '/' });
        dispatch(loadProfile(idToken));

        const refreshToken = async () => {
            const newAuthRes = await res.reloadAuthResponse();
            refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;

            // Setup the other timer after the first one
            setTimeout(refreshToken, refreshTiming);
        };

        //Setup first refresh timer
        setTimeout(refreshToken, refreshTiming);
    };

    return (
        <GoogleLogin
            clientId={oauth2ClientId}
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
            scope={'email profile openid'}
        />
    );
};