import React from "react";
import {Login} from "./Login";
import {Logout} from "./Logout";
import {GoogleLoginResponse, GoogleLoginResponseOffline} from "react-google-login";
import {Avatar, IconButton, Menu, MenuItem} from "@material-ui/core";
import {Link} from "react-router-dom";

export const ProfileAvatar: React.FC<{}> = () => {
    const [loggedIn, setLoggedIn] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const signIn = (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
        setLoggedIn(true);
    };

    const handleAnchorE1 = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (event: any) => {
        setAnchorEl(null);
    };

    return (
        <>
            {!loggedIn ? <Login onLoginSuccess={signIn}
                                onLoginFailure={() => setLoggedIn(false)}/> :
                <>
                    <IconButton onClick={handleAnchorE1}>
                        <Avatar
                            src={'https://lh3.googleusercontent.com/a-/AOh14Gg6Ch0b4Dg_g5bAYB1MiwAfOW9AxcjIulzPGVc=s96-c'}
                            alt=""
                        />
                    </IconButton>
                    <Menu
                        id="profile-menu"
                        keepMounted
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        getContentAnchorEl={null}
                        anchorOrigin={{vertical: "bottom", horizontal: "center"}}
                        transformOrigin={{vertical: "top", horizontal: "center"}}
                    >
                        <MenuItem
                            component={Link}
                            to="/account"
                            onClick={handleClose}>
                            My Account
                        </MenuItem>
                        <Logout onLogout={() => setLoggedIn(false)}/>
                    </Menu>
                </>}
        </>
    )
};