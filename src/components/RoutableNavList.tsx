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

const isNested = (navItem: NavItem, navItems: NavItem[]) => {
  if (navItem.to === '/') {
    return false;
  }
  const urlParts = navItem.to.split('/').map(x => x);

  const urlPartMatches: boolean[] = navItems
    // get urls from all nav items
    .map(navItem => navItem.to)
    // spit the urls into tokens ignoring empty tokens
    .map(url => url.split('/').map(x => x))
    // see if any of the parts of our url are used by a different url
    // and that there are more parts (showing it's actually a lower depth)
    .map(
      urlPieces =>
        urlPieces.some(ai => urlParts.includes(ai)) &&
        urlPieces.length < urlParts.length
    )
    // filter to only successful matches
    .filter(match => match);

  return urlPartMatches.length > 1;
};

const hasNested = (navItem: NavItem, navItems: NavItem[]) => {
  if (navItem.to === '/') {
    return false;
  }

  const matchCount = navItems
    // get urls from all nav items
    .map(navItem => navItem.to)
    // filter out the navItem we are interested in
    .filter(url => url !== navItem.to)
    // check if another url contains our url
    .map(url => url.includes(navItem.to))
    // count how many matches
    .filter(bool => !bool).length;
  return matchCount > 0;
};

const getNavParent = (navItem: NavItem, navItems: NavItem[]) => {
  let maybeParent = navItems
    .filter(item => hasNested(item, navItems))
    .find(navItemParent => navItem.to.includes(navItemParent.to));
  //TODO We should always find a parent here, but not sure how to enforce this
  return maybeParent ? maybeParent : navItem;
};

interface ListItemOpenStatus {
  url: string;
  open: boolean;
}

const initialListOpenState = (navItems: NavItem[]) => {
  let initialState: ListItemOpenStatus[] = [];
  navItems.map(navItem => initialState.push({ url: navItem.to, open: false }));
  return initialState;
};

const extractOpenState = (
  navItem: NavItem,
  openItemStatuses: ListItemOpenStatus[]
) => {
  let maybeFound = openItemStatuses.find(item => item.url === navItem.to);
  return maybeFound ? maybeFound.open : false;
};

export type NavItem = {
  label: string;
  to: string;
  icon?: ReactElement;
};

// Only supporting 1 level of nesting atm
export const RoutableNavList: React.FC<{ navItems: NavItem[] }> = ({
  navItems
}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState<ListItemOpenStatus[]>(
    initialListOpenState(navItems)
  );

  const handleClick = (url: string) => {
    const newOpenState = open.map(openState =>
      openState.url === url ? { url: url, open: !openState.open } : openState
    );
    setOpen(newOpenState);
  };

  return (
    <List>
      {navItems.map(navItem => {
        // Needs to be in a sub list
        if (isNested(navItem, navItems)) {
          return (
            <Collapse
              key={navItem.to}
              in={extractOpenState(getNavParent(navItem, navItems), open)}
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
                  {/*TODO figure out how to use navItem.icon to set this instead*/}
                  <ListItemIcon>
                    <SendIcon />
                  </ListItemIcon>
                  <ListItemText primary={navItem.label} />
                </ListItem>
              </List>
            </Collapse>
          );
        } else {
          return (
            <ListItem
              key={navItem.to}
              button
              component={NavLink}
              to={navItem.to}
              onClick={() => handleClick(navItem.to)}
            >
              {/*TODO figure out how to use navItem.icon to set this instead*/}
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText primary={navItem.label} />
              {/* If list item has sub list items allow them to be expandable */}
              {hasNested(navItem, navItems) ? (
                extractOpenState(navItem, open) ? (
                  <ExpandLess />
                ) : (
                  <ExpandMore />
                )
              ) : null}
            </ListItem>
          );
        }
      })}
    </List>
  );
};
