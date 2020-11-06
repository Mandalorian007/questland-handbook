import React from 'react';
import {Collapse, List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {NavLink} from 'react-router-dom';
import {ExpandLess, ExpandMore} from '@material-ui/icons';
import {NavItemGroup} from "./RoutableNavList";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        nested: {
            paddingLeft: theme.spacing(4)
        }
    })
);

export const NavListItemGroup: React.FC<{
    navItemGroup: NavItemGroup,
}> =
    ({navItemGroup}) => {
        const classes = useStyles();
        const [expanded, setExpanded] = React.useState<boolean>(false);

        const handleClick = () => {
            setExpanded(!expanded)
        };

        return (
            <List dense={true}>
                <ListItem
                    button
                    onClick={handleClick}>
                    <ListItemIcon>{navItemGroup.icon}</ListItemIcon>
                    <ListItemText primary={navItemGroup.label}/>
                    {expanded ? (<ExpandLess/>) : (<ExpandMore/>)}
                </ListItem>
                <Collapse
                    in={expanded}
                    timeout="auto"
                    unmountOnExit
                >
                    {navItemGroup.navItems.map(navItem =>
                        <List component="div" disablePadding>
                            <ListItem
                                button={true}
                                className={classes.nested}
                                component={NavLink}
                                to={navItem.to}
                            >
                                <ListItemText primary={navItem.label}/>
                            </ListItem>
                        </List>
                    )}
                </Collapse>
            </List>
        );
    };
