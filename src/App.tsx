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
import { NavItemGroup } from './components/RoutableNavList';
import { GuidesHomePage } from './pages/guides/GuidesHomePage';
import { IndexHomePage } from './pages/indexes/IndexHomePage';
import { OrbIndexPage } from './pages/indexes/OrbIndexPage';
import { GearingHomePage } from './pages/guides/gearing/GearingHomePage';
import { ItemIndexPage } from './pages/indexes/ItemIndexPage';
import { MonsterSlayerCalcPage } from './pages/tools/MonsterSlayerCalcPage';
import { ToolsHomePage } from './pages/tools/ToolsHomePage';
import HomeIcon from '@material-ui/icons/Home';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import EventIcon from '@material-ui/icons/Event';
import ListIcon from '@material-ui/icons/List';
import BuildIcon from '@material-ui/icons/Build';
import LocationSearchingIcon from '@material-ui/icons/LocationSearching';
import CurrencyIcon from '@material-ui/icons/AttachMoney';
import ShieldIcon from '@material-ui/icons/Security';
import TrophyIcon from '@material-ui/icons/EmojiEvents';
import AndroidIcon from '@material-ui/icons/Android';
import HttpIcon from '@material-ui/icons/Http';
import { DiscordBotPage } from './pages/tools/DiscordBotPage';
import { PublicAPIPage } from './pages/tools/PubicAPIPage';
import { CurrenciesHomePage } from './pages/currencies/CurrenciesHomePage';
import { PrimaryCurrencyPage } from './pages/currencies/PrimaryCurrencyPage';
import { SecondaryCurrencyPage } from './pages/currencies/SecondaryCurrencyPage';
import { ShopCurrencyPage } from './pages/currencies/ShopCurrencyPage';
import { ArenaHomePage } from './pages/arena/ArenaHomePage';
import { FireBlasterPage } from './pages/arena/FireBlasterPage';
import { IcyCannonPage } from './pages/arena/IcyCannonPage';
import { BoomingTurtlePage } from './pages/arena/BoomingTurtlePage';
import { WardingFangPage } from './pages/arena/WardingFangPage';
import { StrategyPage } from './pages/arena/StrategyPage';
import { BattleEventHomePage } from './pages/battleevent/BattleEventHomePage';
import { RedBattleEventPage } from './pages/battleevent/RedBattleEventPage';
import { BlueBattleEventPage } from './pages/battleevent/BlueBattleEventPage';
import { GuildBattleEventStrategyPage } from './pages/battleevent/GuildBattleEventStrategyPage';
import { RedGuildStrikerPage } from './pages/battleevent/RedGuildStrikerPage';
import { BlueGuildStrikerPage } from './pages/battleevent/BlueGuildStrikerPage';

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
      { label: 'Gearing', to: '/guides/gearing', icon: <MenuBookIcon /> }
    ]
  },
  {
    label: 'Battle Event',
    to: '/battle-event',
    icon: <TrophyIcon />,
    navItems: [
      {
        label: 'Red Battle Event',
        to: '/battle-event/red',
        icon: <TrophyIcon />
      },
      {
        label: 'Blue Battle Event',
        to: '/battle-event/blue',
        icon: <TrophyIcon />
      },
      {
        label: 'Guild Strategy',
        to: '/battle-event/guild-strategy',
        icon: <TrophyIcon />
      },
      {
        label: 'Red Guild Striker',
        to: '/battle-event/red-guild-striker',
        icon: <TrophyIcon />
      },
      {
        label: 'Blue Guild Striker',
        to: '/battle-event/blue-guild-striker',
        icon: <TrophyIcon />
      }
    ]
  },
  {
    label: 'Arena',
    to: '/arena',
    icon: <ShieldIcon />,
    navItems: [
      {
        label: 'Strategy',
        to: '/arena/strategy',
        icon: <ShieldIcon />
      },
      {
        label: 'Fire Blaster',
        to: '/arena/fire-blaster',
        icon: <ShieldIcon />
      },
      {
        label: 'Icy Cannon',
        to: '/arena/icy-cannon',
        icon: <ShieldIcon />
      },
      {
        label: 'Booming Turtle',
        to: '/arena/booming-turtle',
        icon: <ShieldIcon />
      },
      {
        label: 'Warding Fang',
        to: '/arena/warding-fang',
        icon: <ShieldIcon />
      }
    ]
  },
  {
    label: 'Currencies',
    to: '/currencies',
    icon: <CurrencyIcon />,
    navItems: [
      {
        label: 'Primary',
        to: '/currencies/primary',
        icon: <CurrencyIcon />
      },
      {
        label: 'Secondary',
        to: '/currencies/secondary',
        icon: <CurrencyIcon />
      },
      {
        label: 'Shop',
        to: '/currencies/shop',
        icon: <CurrencyIcon />
      }
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
      {
        label: 'Monster Slayer Calculator',
        to: '/tools/monster-slayer-calc',
        icon: <LocationSearchingIcon />
      },
      {
        label: 'QL Bot for Discord',
        to: '/tools/ql-bot',
        icon: <AndroidIcon />
      },
      {
        label: 'Questland Public API',
        to: '/tools/public-api',
        icon: <HttpIcon />
      }
    ]
  }
];

export const App: React.FC = () => (
  <Provider store={store}>
    <Router>
      <Chrome title="Questland Handbook" navItemGroups={navItemGroups}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/guides" exact>
            <GuidesHomePage />
          </Route>
          <Route path="/guides/gearing" exact>
            <GearingHomePage />
          </Route>

          <Route path="/battle-event" exact>
            <BattleEventHomePage />
          </Route>
          <Route path="/battle-event/red" exact>
            <RedBattleEventPage />
          </Route>
          <Route path="/battle-event/blue" exact>
            <BlueBattleEventPage />
          </Route>
          <Route path="/battle-event/guild-strategy" exact>
            <GuildBattleEventStrategyPage />
          </Route>
          <Route path="/battle-event/red-guild-striker" exact>
            <RedGuildStrikerPage />
          </Route>
          <Route path="/battle-event/blue-guild-striker" exact>
            <BlueGuildStrikerPage />
          </Route>

          <Route path="/arena" exact>
            <ArenaHomePage />
          </Route>
          <Route path="/arena/strategy" exact>
            <StrategyPage />
          </Route>
          <Route path="/arena/fire-blaster" exact>
            <FireBlasterPage />
          </Route>
          <Route path="/arena/icy-cannon" exact>
            <IcyCannonPage />
          </Route>
          <Route path="/arena/booming-turtle" exact>
            <BoomingTurtlePage />
          </Route>
          <Route path="/arena/warding-fang" exact>
            <WardingFangPage />
          </Route>

          <Route path="/currencies" exact>
            <CurrenciesHomePage />
          </Route>
          <Route path="/currencies/primary" exact>
            <PrimaryCurrencyPage />
          </Route>
          <Route path="/currencies/secondary" exact>
            <SecondaryCurrencyPage />
          </Route>
          <Route path="/currencies/shop" exact>
            <ShopCurrencyPage />
          </Route>

          <Route path="/indexes" exact>
            <IndexHomePage />
          </Route>
          <Route path="/indexes/gear" exact>
            <ItemIndexPage />
          </Route>
          <Route path="/indexes/orb" exact>
            <OrbIndexPage />
          </Route>

          <Route path="/tools" exact>
            <ToolsHomePage />
          </Route>
          <Route path="/tools/monster-slayer-calc" exact>
            <MonsterSlayerCalcPage />
          </Route>
          <Route path="/tools/ql-bot" exact>
            <DiscordBotPage />
          </Route>
          <Route path="/tools/public-api" exact>
            <PublicAPIPage />
          </Route>
        </Switch>
      </Chrome>
    </Router>
  </Provider>
);
