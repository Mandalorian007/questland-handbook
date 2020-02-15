import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import HomeIcon from '@material-ui/icons/Home';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import { MemoryRouter, Route } from 'react-router';
import Link, { LinkProps } from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import {
  createMuiTheme,
  createStyles,
  makeStyles,
  Theme,
  ThemeProvider,
  useTheme
} from '@material-ui/core/styles';
import {
  BottomNavigation,
  BottomNavigationAction,
  Breadcrumbs,
  Collapse,
  Paper
} from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark'
  }
});

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex'
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0
      }
    },
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth
      }
    },
    appBarBottom: {
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        position: 'fixed',
        bottom: 0
      },
      [theme.breakpoints.up('sm')]: {
        width: '0%',
        position: 'fixed',
        bottom: 0
      }
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none'
      }
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3)
    },
    lists: {
      backgroundColor: theme.palette.background.paper,
      marginTop: theme.spacing(1)
    },
    nested: {
      paddingLeft: theme.spacing(4)
    }
  })
);

export type SiteNavMap = {
  [url: string]: string;
};

interface ListItemLinkProps extends LinkProps {
  to: string;
  open?: boolean;
}

interface LinkRouterProps extends LinkProps {
  to: string;
  replace?: boolean;
}

const LinkRouter = (props: LinkRouterProps) => (
  <Link {...props} component={RouterLink as any} />
);

function ListItemLink(props: Omit<ListItemLinkProps, 'ref'>) {
  const { to, title, open, ...other } = props;
  return (
    <li>
      <ListItem button component={RouterLink} to={to} {...other}>
        <ListItemText primary={title} />
        {open != null ? open ? <ExpandLess /> : <ExpandMore /> : null}
      </ListItem>
    </li>
  );
}

const RouterBreadcrumbs: React.FC<{
  siteNavMap: SiteNavMap;
}> = ({ siteNavMap }) => {
  const classes = useStyles();

  return (
    <MemoryRouter initialEntries={['/inbox']} initialIndex={0}>
      <div className={classes.root}>
        <Route>
          {({ location }) => {
            const pathnames = location.pathname.split('/').filter(x => x);
            return (
              <Breadcrumbs aria-label="breadcrumb">
                <LinkRouter color="inherit" to="/">
                  Home
                </LinkRouter>
                {pathnames.map((value, index) => {
                  const last = index === pathnames.length - 1;
                  const to = `/${pathnames.slice(0, index + 1).join('/')}`;

                  return last ? (
                    <Typography color="textPrimary" key={to}>
                      {siteNavMap[to]}
                    </Typography>
                  ) : (
                    <LinkRouter color="inherit" to={to} key={to}>
                      {siteNavMap[to]}
                    </LinkRouter>
                  );
                })}
              </Breadcrumbs>
            );
          }}
        </Route>
      </div>
    </MemoryRouter>
  );
};

const RouterDrawer: React.FC<{
  siteNavMap: SiteNavMap;
}> = ({ siteNavMap }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(prevOpen => !prevOpen);
  };

  return (
    <MemoryRouter initialEntries={['/']} initialIndex={0}>
      <div className={classes.root}>
        <nav className={classes.lists} aria-label="mailbox folders">
          <List>
            {Object.keys(siteNavMap).map(key => {
              const breadcrumbParts: string[] = key.split('/').filter(x => x);
              if (
                // 0 handles the home page which is just a /
                breadcrumbParts.length === 0 ||
                breadcrumbParts.length === 1
              ) {
                const matches: string[] = Object.keys(siteNavMap).filter(key2 =>
                  key2.includes(key)
                );

                if (matches.length > 1) {
                  return (
                    <ListItemLink
                      to={key}
                      title={siteNavMap[key]}
                      open={open}
                      onClick={handleClick}
                    />
                  );
                } else {
                  return (
                    <ListItemLink
                      to={key}
                      title={siteNavMap[key]}
                      onClick={handleClick}
                    />
                  );
                }
              } else {
                return (
                  <Collapse
                    component="li"
                    in={open}
                    timeout="auto"
                    unmountOnExit
                  >
                    <List disablePadding>
                      <ListItemLink
                        to={key}
                        title={siteNavMap[key]}
                        className={classes.nested}
                      />
                    </List>
                  </Collapse>
                );
              }
            })}
          </List>
        </nav>
      </div>
    </MemoryRouter>
  );
};

export const Chrome: React.FC<{
  title: string;
  siteNavMap: SiteNavMap;
}> = ({ title, siteNavMap, children }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [value, setValue] = React.useState('home');

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Paper>
      <div className={classes.toolbar} />
      <Divider />
      <RouterDrawer siteNavMap={siteNavMap} />
    </Paper>
  );

  return (
    <ThemeProvider theme={darkTheme}>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              {title}
            </Typography>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer} aria-label="mailbox folders">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper
              }}
              ModalProps={{
                keepMounted: true // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <RouterBreadcrumbs siteNavMap={siteNavMap} />
          {children}
        </main>
        <BottomNavigation
          className={classes.appBarBottom}
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
        >
          <BottomNavigationAction
            component={RouterLink}
            to="/"
            label="Home"
            icon={<HomeIcon />}
          />
          <BottomNavigationAction
            component={RouterLink}
            to="/builds"
            label="Builds"
            icon={<MenuBookIcon />}
          />
          <BottomNavigationAction
            component={RouterLink}
            to="/items"
            label="Item Index"
            icon={<FolderIcon />}
          />
        </BottomNavigation>
      </div>
    </ThemeProvider>
  );
};
