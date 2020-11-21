import React, {useEffect} from "react";
import {Avatar, IconButton, Menu, MenuItem} from "@material-ui/core";
import {Link} from "react-router-dom";
import {Logout} from "./Logout";
import {useCookies} from "react-cookie";
import {Profile} from "../../domain/profile";
import {useDispatch} from "react-redux";
import {useSelector} from "./AccountPage";
import {loadProfile} from "../../store/profileActions";

export const LoggedInMenu: React.FC<{}> = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [cookies] = useCookies(['authToken']);
    const profile: Profile = useSelector(state => state.profileState.profile);
    const dispatch = useDispatch();

    useEffect(() => {
        if (cookies.authToken) {
            dispatch(loadProfile(cookies.authToken));
        }
    }, [cookies, dispatch]);

    const handleAnchorE1 = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (event: any) => {
        setAnchorEl(null);
    };

    return <>
        <IconButton onClick={handleAnchorE1}>
            <Avatar
                src={profile.profileImgUrl}
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
            <Logout/>
        </Menu>
    </>;
};