import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Chrome } from './Chrome';
import { applyMiddleware, createStore, Middleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { load, save } from 'redux-localstorage-simple';
import reduxLogger from 'redux-logger';
import thunk from 'redux-thunk';
import { AppState, rootReducer } from './store/rootReducer';
import { Provider } from 'react-redux';
import { HomePage } from './pages/home/HomePage';
import { ResourcesHomePage } from './pages/guides/resources/ResourcesHomePage';
import { NavItemGroup } from './components/RoutableNavList';
import { GuidesHomePage } from './pages/guides/GuidesHomePage';
import { IndexHomePage } from './pages/indexes/IndexHomePage';
import { OrbIndexPage } from './pages/indexes/OrbIndexPage';
import { GearingHomePage } from './pages/guides/gearing/GearingHomePage';
import { BattleEventHomePage } from './pages/guides/battleevent/BattleEventHomePage';
import {ItemIndexPage} from "./pages/indexes/ItemIndexPage";
import {MonsterSlayerCalcPage} from "./pages/tools/MonsterSlayerCalcPage";
import { ToolsHomePage } from './pages/tools/ToolsHomePage';
import HomeIcon from '@material-ui/icons/Home';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import EventIcon from '@material-ui/icons/Event';
import ListIcon from '@material-ui/icons/List';
import BuildIcon from '@material-ui/icons/Build';
import LocationSearchingIcon from '@material-ui/icons/LocationSearching';

const middleware = [reduxLogger as Middleware, thunk];

const store = createStore(
  rootReducer,
  load() as AppState,
  composeWithDevTools(applyMiddleware(...middleware, save()))
);

const navItemGroups: NavItemGroup[] = [
  { label: 'Home', to: '/', icon: <HomeIcon />, navItems: [] },
  {
    label: 'Guides',
    to: '/guides',
    icon: <MenuBookIcon />,
    navItems: [
      {
        label: 'Resources',
        to: '/guides/resources',
        icon: <BusinessCenterIcon />
      },
      { label: 'Gearing', to: '/guides/gearing', icon: <MenuBookIcon /> },
      { label: 'Battle Event', to: '/guides/battle-event', icon: <EventIcon /> }
    ]
  },
  {
    label: 'Indexes',
    to: '/indexes',
    icon: <ListIcon />,
    navItems: [
      { label: 'Gear Index', to: '/indexes/gear', icon: <ListIcon /> },
      { label: 'Orb Index', to: '/indexes/orb', icon: <ListIcon /> }
    ]
  },
  {
    label: 'Tools',
    to: '/tools',
    icon: <BuildIcon />,
    navItems: [
      { label: 'Monster Slayer Calculator', to: '/tools/monster-slayer-calc', icon: <LocationSearchingIcon /> },
      { label: 'QL Bot for Discord', to: '/indexes/ql-bot', icon: <ListIcon /> }
    ]
  }
];

export const App: React.FC = () => (
  <Provider store={store}>
    <Router>
      <Chrome title="Questland Handbook" navItemGroups={navItemGroups}>
        <Switch>
          {/* Top level Drawer & Bottom nav items */}
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/guides" exact>
            <GuidesHomePage />
          </Route>
          <Route path="/indexes" exact>
            <IndexHomePage />
          </Route>
          <Route path="/tools" exact>
            <ToolsHomePage />
          </Route>

          {/* Second level of routing in Drawer expansions */}
          <Route path="/guides/resources" exact>
            <ResourcesHomePage />
          </Route>
          <Route path="/guides/gearing" exact>
            <GearingHomePage />
          </Route>
          <Route path="/guides/battle-event" exact>
            <BattleEventHomePage />
          </Route>
          <Route path="/indexes/gear" exact>
            <ItemIndexPage />
          </Route>
          <Route path="/indexes/orb" exact>
            <OrbIndexPage />
          </Route>
          <Route path="/tools/ql-bot" exact>
            <OrbIndexPage />
          </Route>
          <Route path="/tools/monster-slayer-calc" exact>
            <MonsterSlayerCalcPage />
          </Route>
        </Switch>
      </Chrome>
    </Router>
  </Provider>
);
