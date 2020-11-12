import React, {useEffect} from "react";
import {useCookies} from 'react-cookie';
import {qlApiUrl} from "../../config";

export const AccountPage: React.FC<{}> = () => {
    const [cookies] = useCookies(['token']);
    const [googleId, setGoogleID] = React.useState(false);

    useEffect(() => {
        if (cookies.token) {
            const requestInit: RequestInit = {
                headers: {
                    'id_token': cookies.token,
                }
            };

            fetch(qlApiUrl + 'profile', requestInit)
                .then(res => res.json())
                .then(json => setGoogleID(json.googleId))
        }
    }, [cookies]);

    return (
        <>
            {cookies.token ?
                <>
                    <h1>Account Settings coming soon :)</h1>
                    <div>{googleId ? 'profile found.' : 'no profile found.'}</div>
                </>
                :
                <h1>You must be logged in to access your account.</h1>
            }
        </>)
};