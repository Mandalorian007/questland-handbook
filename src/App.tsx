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
import { CollectionsPage } from './pages/CollectionsPage';
import { ReforgingPage } from './pages/ReforgingPage';
import { HomePage } from './pages/HomePage';
import { ResourcesPage } from './pages/ResourcesPage';
import { NavItem } from './components/RoutableNavList';

const middleware = [reduxLogger as Middleware, thunk];

const store = createStore(
  rootReducer,
  load() as AppState,
  composeWithDevTools(applyMiddleware(...middleware, save()))
);

const navItems: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'Resources', to: '/resources' },
  //TODO change this to scrolls instead of collections and have collections under gearing
  { label: 'Collections', to: '/resources/collections' },
  { label: 'Reforging', to: '/resources/reforging' }
];

export const App: React.FC = () => (
  <Provider store={store}>
    <Router>
      <Chrome title="Questland Handbook" navItems={navItems}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/resources" exact>
            <ResourcesPage />
          </Route>
          <Route path="/resources/collections" exact>
            <CollectionsPage />
          </Route>
          <Route path="/resources/reforging" exact>
            <ReforgingPage />
          </Route>
        </Switch>
      </Chrome>
    </Router>
  </Provider>
);
