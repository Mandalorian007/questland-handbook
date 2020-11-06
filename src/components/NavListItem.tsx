import React from 'react';
import {List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import {NavLink} from 'react-router-dom';
import {NavItemGroup} from "./RoutableNavList";


export const NavListItem: React.FC<{
    navItemGroup: NavItemGroup,
}> =
    ({navItemGroup}) => (
        <List dense={true}>
            <ListItem
                button={true}
                component={NavLink}
                to={navItemGroup.to || ''}
            >
                <ListItemIcon>{navItemGroup.icon}</ListItemIcon>
                <ListItemText primary={navItemGroup.label}/>
            </ListItem>
        </List>
    );
