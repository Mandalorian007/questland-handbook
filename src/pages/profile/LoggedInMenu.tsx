import React from "react";
import {Avatar, IconButton, Menu, MenuItem} from "@material-ui/core";
import {Link} from "react-router-dom";
import {Logout} from "./Logout";
import {useCookies} from "react-cookie";

export const LoggedInMenu: React.FC<{
    onLogout: any
}> = ({onLogout}) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [cookies] = useCookies(['avatarURL']);

    const handleAnchorE1 = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (event: any) => {
        setAnchorEl(null);
    };

    return <>
        <IconButton onClick={handleAnchorE1}>
            <Avatar
                src={cookies.avatarURL}
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
            <Logout onLogout={() => onLogout(false)}/>
        </Menu>
    </>;
};