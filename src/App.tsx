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
import { HomePage } from './pages/HomePage';
import { ResourcesPage } from './pages/ResourcesPage';
import { NavItem } from './components/RoutableNavList';
import { GuidesPage } from './pages/GuidesPage';
import { IndexPage } from './pages/IndexPage';
import { ItemIndexPage } from './pages/ItemIndexPage';
import { OrbIndexPage } from './pages/OrbIndexPage';
import { GearingPage } from './pages/GearingPage';
import { BattleEventPage } from './pages/BattleEventPage';

const middleware = [reduxLogger as Middleware, thunk];

const store = createStore(
  rootReducer,
  load() as AppState,
  composeWithDevTools(applyMiddleware(...middleware, save()))
);

const navItems: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'Guides', to: '/guides' },
  { label: 'Resources', to: '/guides/resources' },
  { label: 'Gearing', to: '/guides/gearing' },
  { label: 'Battle Event', to: '/guides/battle-event' },
  { label: 'Indexes', to: '/indexes' },
  { label: 'Gear Index', to: '/indexes/gear' },
  { label: 'Orb Index', to: '/indexes/orb' }
];

export const App: React.FC = () => (
  <Provider store={store}>
    <Router>
      <Chrome title="Questland Handbook" navItems={navItems}>
        <Switch>
          {/* Top level Drawer & Bottom nav items */}
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/guides" exact>
            <GuidesPage />
          </Route>
          <Route path="/indexes" exact>
            <IndexPage />
          </Route>

          {/* Second level of routing in Drawer expansions */}
          <Route path="/guides/resources" exact>
            <ResourcesPage />
          </Route>
          <Route path="/guides/gearing" exact>
            <GearingPage />
          </Route>
          <Route path="/guides/battle-event" exact>
            <BattleEventPage />
          </Route>
          <Route path="/indexes/gear" exact>
            <ItemIndexPage />
          </Route>
          <Route path="/indexes/orb" exact>
            <OrbIndexPage />
          </Route>

          {/* Deeper level content routing */}
          {/*
          --- guides/resources
          dust
          scrolls
          essences
          eternium
          extract
          empowering stones
          divide tokens
          gems
          gold
          energy
          loot tokens
          arena tickets
          shop currencies (same page for all)
          - barrels
          - stamps
          - guild coins


          --- guides/gearing
          reforge
          collections
          orbs
          gear
          artifacts


          --- guides/battle-event
          individual
          guild
          */}
        </Switch>
      </Chrome>
    </Router>
  </Provider>
);
