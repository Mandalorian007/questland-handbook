import React, { ReactElement } from 'react';
import {
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';
import { NavLink } from 'react-router-dom';
import { ExpandLess, ExpandMore } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    lists: {
      backgroundColor: theme.palette.background.paper,
      marginTop: theme.spacing(1)
    },
    nested: {
      paddingLeft: theme.spacing(4)
    }
  })
);

interface ListItemOpenStatus {
  url: string;
  open: boolean;
}

const initialListOpenState = (navItemGroups: NavItemGroup[]) => {
  let initialState: ListItemOpenStatus[] = [];
  navItemGroups.map(navItemGroup =>
    initialState.push({ url: navItemGroup.to, open: false })
  );
  return initialState;
};

const extractOpenState = (
  navItemGroup: NavItemGroup,
  openItemStatuses: ListItemOpenStatus[]
) => {
  let maybeFound = openItemStatuses.find(item => item.url === navItemGroup.to);
  return maybeFound ? maybeFound.open : false;
};

export type NavItemGroup = {
  label: string;
  to: string;
  icon?: ReactElement;
  navItems: NavItem[];
};

export type NavItem = {
  label: string;
  to: string;
};

// Only supporting 1 level of nesting atm
export const RoutableNavList: React.FC<{ navItemGroups: NavItemGroup[] }> = ({
  navItemGroups
}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState<ListItemOpenStatus[]>(
    initialListOpenState(navItemGroups)
  );

  const handleClick = (url: string) => {
    const newOpenState = open.map(openState =>
      openState.url === url ? { url: url, open: !openState.open } : openState
    );
    setOpen(newOpenState);
  };

  return (
    <List>
      {navItemGroups.map(navItemGroup => {
        return (
          <>
            <ListItem
              key={navItemGroup.to}
              button
              component={NavLink}
              to={navItemGroup.to}
              onClick={() => handleClick(navItemGroup.to)}
            >
              <ListItemIcon>
                {navItemGroup.icon ? navItemGroup.icon : <SendIcon />}
              </ListItemIcon>
              <ListItemText primary={navItemGroup.label} />
              {/* If list item has sub list items allow them to be expandable */}
              {navItemGroup.navItems.length > 0 ? (
                extractOpenState(navItemGroup, open) ? (
                  <ExpandLess />
                ) : (
                  <ExpandMore />
                )
              ) : null}
            </ListItem>
            {navItemGroup.navItems.map(navItem => {
              return (
                <Collapse
                  key={navItem.to}
                  in={extractOpenState(navItemGroup, open)}
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    <ListItem
                      key={navItem.to}
                      button={true}
                      className={classes.nested}
                      component={NavLink}
                      to={navItem.to}
                    >
                      <ListItemText primary={navItem.label} />
                    </ListItem>
                  </List>
                </Collapse>
              );
            })}
          </>
        );
      })}
    </List>
  );
};
