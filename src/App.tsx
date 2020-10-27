import * as React from 'react';
import TagManager, {TagManagerArgs} from 'react-gtm-module';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Chrome} from './Chrome';
import {applyMiddleware, createStore, Middleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {load, save} from 'redux-localstorage-simple';
import reduxLogger from 'redux-logger';
import thunk from 'redux-thunk';
import {AppState, rootReducer} from './store/rootReducer';
import {Provider} from 'react-redux';
import {HomePage} from './pages/home/HomePage';
import {NavItemGroup} from './components/RoutableNavList';
import {GuidesHomePage} from './pages/guides/GuidesHomePage';
import {IndexHomePage} from './pages/indexes/IndexHomePage';
import {OrbIndexPage} from './pages/indexes/OrbIndexPage';
import {GearingHomePage} from './pages/gearing/GearingHomePage';
import {ItemIndexPage} from './pages/indexes/ItemIndexPage';
import {MonsterSlayerCalcPage} from './pages/tools/MonsterSlayerCalcPage';
import {ToolsHomePage} from './pages/tools/ToolsHomePage';
import HomeIcon from '@material-ui/icons/Home';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ListIcon from '@material-ui/icons/List';
import BuildIcon from '@material-ui/icons/Build';
import CurrencyIcon from '@material-ui/icons/AttachMoney';
import ShieldIcon from '@material-ui/icons/Security';
import TrophyIcon from '@material-ui/icons/EmojiEvents';
import HeroIcon from '@material-ui/icons/Accessibility';
import InfoIcon from '@material-ui/icons/Info';
import MapIcon from '@material-ui/icons/Map';
import StarsIcon from '@material-ui/icons/Stars';
import {DiscordBotPage} from './pages/tools/DiscordBotPage';
import {PublicAPIPage} from './pages/tools/PubicAPIPage';
import {CurrenciesHomePage} from './pages/currencies/CurrenciesHomePage';
import {PrimaryCurrencyPage} from './pages/currencies/PrimaryCurrencyPage';
import {SecondaryCurrencyPage} from './pages/currencies/SecondaryCurrencyPage';
import {ShopCurrencyPage} from './pages/currencies/ShopCurrencyPage';
import {ArenaHomePage} from './pages/arena/ArenaHomePage';
import {FireBlasterPage} from './pages/arena/FireBlasterPage';
import {IcyCannonPage} from './pages/arena/IcyCannonPage';
import {BoomingTurtlePage} from './pages/arena/BoomingTurtlePage';
import {WardingFangPage} from './pages/arena/WardingFangPage';
import {StrategyPage} from './pages/arena/StrategyPage';
import {BattleEventHomePage} from './pages/battleevent/BattleEventHomePage';
import {RedBattleEventPage} from './pages/battleevent/RedBattleEventPage';
import {BlueBattleEventPage} from './pages/battleevent/BlueBattleEventPage';
import {GuildBattleEventStrategyPage} from './pages/battleevent/GuildBattleEventStrategyPage';
import {RedGuildStrikerPage} from './pages/battleevent/RedGuildStrikerPage';
import {BlueGuildStrikerPage} from './pages/battleevent/BlueGuildStrikerPage';
import {ReforgingPage} from './pages/gearing/ReforgingPage';
import {FarmerPage} from './pages/arena/FarmerPage';
import {HardBossStatsIndexPage} from './pages/indexes/HardBossStatsIndexPage';
import {GuildBossStatsIndexPage} from './pages/indexes/GuildBossStatsIndexPage';
import {GuildLookupPage} from './pages/tools/GuildLookupPage';
import {GuildBattleEventPlanner} from './pages/tools/GuildBattleEventPlanner';
import {QeSmeltingCalcPage} from './pages/tools/QeSmeltingCalcPage';
import {OrbCalcPage} from './pages/tools/OrbCalcPage';
import {Markdown} from "./components/Markdown";
import beginnerTips from './pages/guides/beginner-tips.md'
import artifacts from './pages/gearing/artifacts.md'
import collections from './pages/gearing/collections.md'
import gear from './pages/gearing/gear.md'
import orbs from './pages/gearing/orbs.md'
import statPriorities from './pages/gearing/statPriorities.md'
import about from './pages/about/about.md'
import {ItemPage} from "./pages/indexes/ItemPage";
import {CampaignHomePage} from "./pages/campaign/CampaignHomePage";
import {FaerieWrathPage} from "./pages/campaign/FaerieWrathPage";
import {PhoenixPage} from "./pages/campaign/PhoenixPage";
import {ShinobiPage} from "./pages/campaign/ShinobiPage";
import {MetaBuildHomePage} from "./pages/meta/MetaBuildHomePage";
import {BloodyHellPage} from "./pages/meta/BloodyHellPage";
import {TurtlePage} from "./pages/meta/TurtlePage";

const middleware = [reduxLogger as Middleware, thunk];

const store = createStore(
    rootReducer,
    load() as AppState,
    composeWithDevTools(applyMiddleware(...middleware, save()))
);

const navItemGroups: NavItemGroup[] = [
    {label: 'Home', to: '/', icon: <HomeIcon/>, navItems: []},
    {
        label: 'Guides',
        to: '/guides',
        icon: <MenuBookIcon/>,
        navItems: [
            {
                label: 'Beginner Tips',
                to: '/guides/beginner-tips'
            }
        ]
    },
    {
        label: 'Gearing',
        to: '/gearing',
        icon: <HeroIcon/>,
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
        label: 'Meta Builds',
        to: '/meta',
        icon: <StarsIcon/>,
        navItems: [
            {
                label: 'Bloody Hell',
                to: '/meta/bloody-hell'
            },
            {
                label: 'Turtle',
                to: '/meta/turtle'
            }
        ]
    },
    {
        label: 'Campaign Builds',
        to: '/campaign',
        icon: <MapIcon/>,
        navItems: [
            {
                label: 'Faerie Wrath',
                to: '/campaign/faerie-wrath'
            },
            {
                label: 'Phoenix',
                to: '/campaign/phoenix'
            },
            {
                label: 'Shinobi',
                to: '/campaign/shinobi'
            }
        ]
    },
    {
        label: 'Battle Event',
        to: '/battle-event',
        icon: <TrophyIcon/>,
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
        icon: <ShieldIcon/>,
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
        icon: <CurrencyIcon/>,
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
        icon: <ListIcon/>,
        navItems: [
            {label: 'Gear Index', to: '/indexes/gear'},
            {label: 'Orb Index', to: '/indexes/orb'},
            {label: 'Hard Boss Stats', to: '/indexes/hard-boss-stats'},
            {label: 'Guild Boss Stats', to: '/indexes/guild-boss-stats'}
        ]
    },
    {
        label: 'Tools',
        to: '/tools',
        icon: <BuildIcon/>,
        navItems: [
            {
                label: 'Monster Slayer Calculator',
                to: '/tools/monster-slayer-calc'
            },
            {
                label: 'Quest Event Smelting Calculator',
                to: '/tools/qe-smelting-calc'
            },
            {
                label: 'Orb Stat Calculator',
                to: '/tools/orb-calc'
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
    },
    {label: 'About', to: '/about', icon: <InfoIcon/>, navItems: []},
];

export const App: React.FC = () => {
    const tagManagerArgs: TagManagerArgs = {
        gtmId: process.env.REACT_APP_GTM_ID || '',
        /*events: {
            pageView: 'Page View',
        }*/
    };
    TagManager.initialize(tagManagerArgs);

    return(
        <Provider store={store}>
            <Router>
                <Chrome title="Questland Handbook" navItemGroups={navItemGroups}>
                    <Switch>
                        <Route path="/" exact>
                            <HomePage/>
                        </Route>

                        <Route path="/guides" exact>
                            <GuidesHomePage/>
                        </Route>
                        <Route path="/guides/beginner-tips" exact>
                            <Markdown md={beginnerTips}/>
                        </Route>

                        <Route path="/gearing" exact>
                            <GearingHomePage/>
                        </Route>
                        <Route path="/gearing/gear" exact>
                            <Markdown md={gear}/>
                        </Route>
                        <Route path="/gearing/orbs" exact>
                            <Markdown md={orbs}/>
                        </Route>
                        <Route path="/gearing/artifacts" exact>
                            <Markdown md={artifacts}/>
                        </Route>
                        <Route path="/gearing/collections" exact>
                            <Markdown md={collections}/>
                        </Route>
                        <Route path="/gearing/reforging" exact>
                            <ReforgingPage/>
                        </Route>
                        <Route path="/gearing/stat-priorities" exact>
                            <Markdown md={statPriorities}/>
                        </Route>

                        <Route path="/meta" exact>
                            <MetaBuildHomePage/>
                        </Route>
                        <Route path="/meta/bloody-hell" exact>
                            <BloodyHellPage/>
                        </Route>
                        <Route path="/meta/turtle" exact>
                            <TurtlePage/>
                        </Route>

                        <Route path="/campaign" exact>
                            <CampaignHomePage/>
                        </Route>
                        <Route path="/campaign/faerie-wrath" exact>
                            <FaerieWrathPage/>
                        </Route>
                        <Route path="/campaign/phoenix" exact>
                            <PhoenixPage/>
                        </Route>
                        <Route path="/campaign/shinobi" exact>
                            <ShinobiPage/>
                        </Route>

                        <Route path="/battle-event" exact>
                            <BattleEventHomePage/>
                        </Route>
                        <Route path="/battle-event/red" exact>
                            <RedBattleEventPage/>
                        </Route>
                        <Route path="/battle-event/blue" exact>
                            <BlueBattleEventPage/>
                        </Route>
                        <Route path="/battle-event/guild-strategy" exact>
                            <GuildBattleEventStrategyPage/>
                        </Route>
                        <Route path="/battle-event/red-guild-striker" exact>
                            <RedGuildStrikerPage/>
                        </Route>
                        <Route path="/battle-event/blue-guild-striker" exact>
                            <BlueGuildStrikerPage/>
                        </Route>

                        <Route path="/arena" exact>
                            <ArenaHomePage/>
                        </Route>
                        <Route path="/arena/strategy" exact>
                            <StrategyPage/>
                        </Route>
                        <Route path="/arena/fire-blaster" exact>
                            <FireBlasterPage/>
                        </Route>
                        <Route path="/arena/icy-cannon" exact>
                            <IcyCannonPage/>
                        </Route>
                        <Route path="/arena/booming-turtle" exact>
                            <BoomingTurtlePage/>
                        </Route>
                        <Route path="/arena/warding-fang" exact>
                            <WardingFangPage/>
                        </Route>
                        <Route path="/arena/the-farmer" exact>
                            <FarmerPage/>
                        </Route>

                        <Route path="/currencies" exact>
                            <CurrenciesHomePage/>
                        </Route>
                        <Route path="/currencies/primary" exact>
                            <PrimaryCurrencyPage/>
                        </Route>
                        <Route path="/currencies/secondary" exact>
                            <SecondaryCurrencyPage/>
                        </Route>
                        <Route path="/currencies/shop" exact>
                            <ShopCurrencyPage/>
                        </Route>

                        <Route path="/indexes" exact>
                            <IndexHomePage/>
                        </Route>
                        <Route path="/indexes/gear" exact>
                            <ItemIndexPage/>
                        </Route>
                        <Route path="/item/:id" component={ItemPage}/>
                        <Route path="/indexes/orb" exact>
                            <OrbIndexPage/>
                        </Route>
                        <Route path="/indexes/hard-boss-stats" exact>
                            <HardBossStatsIndexPage/>
                        </Route>
                        <Route path="/indexes/guild-boss-stats" exact>
                            <GuildBossStatsIndexPage/>
                        </Route>

                        <Route path="/tools" exact>
                            <ToolsHomePage/>
                        </Route>
                        <Route path="/tools/monster-slayer-calc" exact>
                            <MonsterSlayerCalcPage/>
                        </Route>
                        <Route path="/tools/qe-smelting-calc" exact>
                            <QeSmeltingCalcPage/>
                        </Route>
                        <Route path="/tools/orb-calc" exact>
                            <OrbCalcPage/>
                        </Route>
                        <Route path="/tools/ql-bot" exact>
                            <DiscordBotPage/>
                        </Route>
                        <Route path="/tools/public-api" exact>
                            <PublicAPIPage/>
                        </Route>
                        <Route path="/tools/guild-lookup" exact>
                            <GuildLookupPage/>
                        </Route>
                        <Route path="/tools/guild-be-plan" exact>
                            <GuildBattleEventPlanner/>
                        </Route>

                        <Route path="/about" exact>
                            <Markdown md={about}/>
                        </Route>
                    </Switch>
                </Chrome>
            </Router>
        </Provider>
    );
};
