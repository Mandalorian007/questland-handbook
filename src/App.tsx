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
import { GearingHomePage } from './pages/gearing/GearingHomePage';
import { ItemIndexPage } from './pages/indexes/ItemIndexPage';
import { MonsterSlayerCalcPage } from './pages/tools/MonsterSlayerCalcPage';
import { ToolsHomePage } from './pages/tools/ToolsHomePage';
import HomeIcon from '@material-ui/icons/Home';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ListIcon from '@material-ui/icons/List';
import BuildIcon from '@material-ui/icons/Build';
import CurrencyIcon from '@material-ui/icons/AttachMoney';
import ShieldIcon from '@material-ui/icons/Security';
import TrophyIcon from '@material-ui/icons/EmojiEvents';
import HeroIcon from '@material-ui/icons/Accessibility';
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
import { BeginnerTipsPage } from './pages/guides/BeginnerTipsPage';
import { BuildsPage } from './pages/guides/BuildsPage';
import { GearPage } from './pages/gearing/GearPage';
import { OrbPage } from './pages/gearing/OrbPage';
import { ArtifactPage } from './pages/gearing/ArtifactPage';
import { CollectionsPage } from './pages/gearing/CollectionsPage';
import { ReforgingPage } from './pages/gearing/ReforgingPage';
import { StatPriorityPage } from './pages/gearing/StatPriorityPage';
import { FarmerPage } from './pages/arena/FarmerPage';
import { HardBossStatsIndexPage } from './pages/indexes/HardBossStatsIndexPage';
import { GuildBossStatsIndexPage } from './pages/indexes/GuildBossStatsIndexPage';
import { GuildLookupPage } from './pages/tools/GuildLookupPage';
import { GuildBattleEventPlanner } from './pages/tools/GuildBattleEventPlanner';

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
        label: 'Beginner Tips',
        to: '/guides/beginner-tips'
      },
      {
        label: 'Popular Builds',
        to: '/guides/popular-builds'
      }
    ]
  },
  {
    label: 'Gearing',
    to: '/gearing',
    icon: <HeroIcon />,
    navItems: [
      {
        label: 'Gear',
        to: '/gearing/gear'
      },
      {
        label: 'Orbs',
        to: '/gearing/orbs'
      },
      {
        label: 'Artifacts',
        to: '/gearing/artifacts'
      },
      {
        label: 'Collections',
        to: '/gearing/collections'
      },
      {
        label: 'Reforging',
        to: '/gearing/reforging'
      },
      {
        label: 'Stat Priorities',
        to: '/gearing/stat-priorities'
      }
    ]
  },
  {
    label: 'Battle Event',
    to: '/battle-event',
    icon: <TrophyIcon />,
    navItems: [
      {
        label: 'Red Battle Event',
        to: '/battle-event/red'
      },
      {
        label: 'Blue Battle Event',
        to: '/battle-event/blue'
      },
      {
        label: 'Guild Strategy',
        to: '/battle-event/guild-strategy'
      },
      {
        label: 'Red Guild Striker',
        to: '/battle-event/red-guild-striker'
      },
      {
        label: 'Blue Guild Striker',
        to: '/battle-event/blue-guild-striker'
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
        to: '/arena/strategy'
      },
      {
        label: 'Fire Blaster',
        to: '/arena/fire-blaster'
      },
      {
        label: 'Icy Cannon',
        to: '/arena/icy-cannon'
      },
      {
        label: 'Booming Turtle',
        to: '/arena/booming-turtle'
      },
      {
        label: 'Warding Fang',
        to: '/arena/warding-fang'
      },
      {
        label: 'The Farmer',
        to: '/arena/the-farmer'
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
        to: '/currencies/primary'
      },
      {
        label: 'Secondary',
        to: '/currencies/secondary'
      },
      {
        label: 'Shop',
        to: '/currencies/shop'
      }
    ]
  },
  {
    label: 'Indexes',
    to: '/indexes',
    icon: <ListIcon />,
    navItems: [
      { label: 'Gear Index', to: '/indexes/gear' },
      { label: 'Orb Index', to: '/indexes/orb' },
      { label: 'Hard Boss Stats', to: '/indexes/hard-boss-stats' },
      { label: 'Guild Boss Stats', to: '/indexes/guild-boss-stats' }
    ]
  },
  {
    label: 'Tools',
    to: '/tools',
    icon: <BuildIcon />,
    navItems: [
      {
        label: 'Monster Slayer Calculator',
        to: '/tools/monster-slayer-calc'
      },
      {
        label: 'QL Bot for Discord',
        to: '/tools/ql-bot'
      },
      {
        label: 'Questland Public API',
        to: '/tools/public-api'
      },
      {
        label: 'Guild Lookup',
        to: '/tools/guild-lookup'
      },
      {
        label: 'Guild Battle Event Planner',
        to: '/tools/guild-be-plan'
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
          <Route path="/guides/beginner-tips" exact>
            <BeginnerTipsPage />
          </Route>
          <Route path="/guides/popular-builds" exact>
            <BuildsPage />
          </Route>

          <Route path="/gearing" exact>
            <GearingHomePage />
          </Route>
          <Route path="/gearing/gear" exact>
            <GearPage />
          </Route>
          <Route path="/gearing/orbs" exact>
            <OrbPage />
          </Route>
          <Route path="/gearing/artifacts" exact>
            <ArtifactPage />
          </Route>
          <Route path="/gearing/collections" exact>
            <CollectionsPage />
          </Route>
          <Route path="/gearing/reforging" exact>
            <ReforgingPage />
          </Route>
          <Route path="/gearing/stat-priorities" exact>
            <StatPriorityPage />
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
          <Route path="/arena/the-farmer" exact>
            <FarmerPage />
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
          <Route path="/indexes/hard-boss-stats" exact>
            <HardBossStatsIndexPage />
          </Route>
          <Route path="/indexes/guild-boss-stats" exact>
            <GuildBossStatsIndexPage />
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
          <Route path="/tools/guild-lookup" exact>
            <GuildLookupPage />
          </Route>
          <Route path="/tools/guild-be-plan" exact>
            <GuildBattleEventPlanner />
          </Route>
        </Switch>
      </Chrome>
    </Router>
  </Provider>
);
