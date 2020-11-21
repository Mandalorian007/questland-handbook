import React from "react";
import {Login} from "./Login";
import {LoggedInMenu} from "./LoggedInMenu";
import {useCookies} from "react-cookie";

export const ProfileAvatar: React.FC<{}> = () => {
    const [cookies] = useCookies(['authToken']);

    return (
        <>
            {!cookies.authToken ? <Login/> : <LoggedInMenu/>}
        </>
    )
};