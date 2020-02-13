import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Chrome } from './Chrome';
import { ItemIndexPage } from './pages/ItemIndexPage';
import { applyMiddleware, createStore, Middleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { load, save } from 'redux-localstorage-simple';
import reduxLogger from 'redux-logger';
import thunk from 'redux-thunk';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ListIcon from '@material-ui/icons/List';
import { AppState, rootReducer } from './store/rootReducer';
import { Provider } from 'react-redux';
import { OrbPage } from './pages/OrgPage';
import { GearPage } from './pages/GearPage';
import { CollectionsPage } from './pages/CollectionsPage';
import { ReforgingPage } from './pages/ReforgingPage';
import { ArtifactPage } from './pages/ArtifactPage';
import { StatPriorityPage } from './pages/StatPriorityPage';
import { BuildsPage } from './pages/BuildsPage';
import { ArenaPage } from './pages/ArenaPage';
import { IndividualBattleEventPage } from './pages/IndividualBattleEventPage';
import { GuildBattleEventPage } from './pages/GuildBattleEventPage';
import { HomePage } from './pages/HomePage';
import { OrbIndexPage } from './pages/OrbIndexPage';

const middleware = [reduxLogger as Middleware, thunk];

const store = createStore(
  rootReducer,
  load() as AppState,
  composeWithDevTools(applyMiddleware(...middleware, save()))
);

export const App: React.FC<{}> = () => (
  <Provider store={store}>
    <Router>
      <Chrome
        title="Questland Handbook"
        navItemGroups={[
          {
            sectionLabel: 'Guides',
            icon: <MenuBookIcon />,
            navItems: [
              { label: 'Home', path: '/' },
              { label: 'Stat Priorities', path: '/stat-priorities' },
              { label: 'Gear', path: '/gear' },
              { label: 'Orbs', path: '/orb' },
              { label: 'Collections', path: '/collections' },
              { label: 'Reforging', path: '/reforging' },
              { label: 'Artifacts', path: '/artifacts' },
              { label: 'Popular Builds', path: '/builds' },
              { label: 'Arena', path: '/arena' },
              { label: 'Individual Battle Event', path: '/individual-be' },
              { label: 'Guild Battle Event', path: '/guild-be' }
            ]
          },
          {
            sectionLabel: 'Indexes',
            icon: <ListIcon />,
            navItems: [
              { label: 'Items', path: '/items' },
              { label: 'Orbs', path: '/orbs' }
            ]
          }
        ]}
      >
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/stat-priorities" exact>
            <StatPriorityPage />
          </Route>
          <Route path="/gear" exact>
            <GearPage />
          </Route>
          <Route path="/orb" exact>
            <OrbPage />
          </Route>
          <Route path="/collections" exact>
            <CollectionsPage />
          </Route>
          <Route path="/reforging" exact>
            <ReforgingPage />
          </Route>
          <Route path="/artifacts" exact>
            <ArtifactPage />
          </Route>
          <Route path="/builds" exact>
            <BuildsPage />
          </Route>
          <Route path="/arena" exact>
            <ArenaPage />
          </Route>
          <Route path="/individual-be" exact>
            <IndividualBattleEventPage />
          </Route>
          <Route path="/guild-be" exact>
            <GuildBattleEventPage />
          </Route>
          <Route path="/items" exact>
            <ItemIndexPage />
          </Route>
          <Route path="/orbs" exact>
            <OrbIndexPage />
          </Route>
        </Switch>
      </Chrome>
    </Router>
  </Provider>
);
