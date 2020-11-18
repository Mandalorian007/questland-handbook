import * as React from 'react';
import TagManager, {TagManagerArgs} from 'react-gtm-module';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Chrome} from './Chrome';
import {applyMiddleware, createStore} from 'redux';
import {load} from 'redux-localstorage-simple';
import thunk from 'redux-thunk';
import {AppState, rootReducer} from './store/rootReducer';
import {Provider} from 'react-redux';
import {HomePage} from './pages/home/HomePage';
import {NavItemGroup} from './components/chrome/RoutableNavList';
import {OrbIndexPage} from './pages/indexes/OrbIndexPage';
import {ItemIndexPage} from './pages/indexes/item-index/ItemIndexPage';
import {MonsterSlayerCalcPage} from './pages/tools/MonsterSlayerCalcPage';
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
import GavelIcon from '@material-ui/icons/Gavel';
import {DiscordBotPage} from './pages/tools/discord-bot/DiscordBotPage';
import {PublicAPIPage} from './pages/tools/PubicAPIPage';
import {PrimaryCurrencyPage} from './pages/currencies/PrimaryCurrencyPage';
import {SecondaryCurrencyPage} from './pages/currencies/SecondaryCurrencyPage';
import {ShopCurrencyPage} from './pages/currencies/ShopCurrencyPage';
import {FireBlasterPage} from './pages/arena/FireBlasterPage';
import {IcyCannonPage} from './pages/arena/IcyCannonPage';
import {BoomingTurtlePage} from './pages/arena/BoomingTurtlePage';
import {WardingFangPage} from './pages/arena/WardingFangPage';
import {StrategyPage} from './pages/arena/StrategyPage';
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
import artifacts from './pages/gearing/artifacts.md'
import collections from './pages/gearing/collections.md'
import gear from './pages/gearing/gear.md'
import orbs from './pages/gearing/orbs.md'
import statPriorities from './pages/guides/statPriorities.md'
import about from './pages/about/about.md'
import {ItemOverviewPage} from "./pages/indexes/item-overview/ItemOverviewPage";
import {FaerieWrathPage} from "./pages/campaign/FaerieWrathPage";
import {PhoenixPage} from "./pages/campaign/PhoenixPage";
import {ShinobiPage} from "./pages/campaign/ShinobiPage";
import {BloodyHellPage} from "./pages/meta/BloodyHellPage";
import {TurtlePage} from "./pages/meta/TurtlePage";
import {BeginnerTipsPage} from "./pages/guides/BeginnerTipsGuide";
import {GearDesignPage} from "./pages/guides/GearDesignPage";
import {OptimizedGearTemplatesPage} from "./pages/gearing/OptimizedGearTemplatesPage";
import {HeroLookupPage} from "./pages/tools/hero-lookup/HeroLookupPage";
import {LicensingPage} from "./pages/licensing/LicensingPage";
import {GearPlannerPage} from "./pages/tools/gear-planner/GearPlannerPage";
import {PrivacyPolicyPage} from "./pages/privacy/PrivacyPolicyPage";
import {AccountPage} from "./pages/profile/AccountPage";
import {CookiesProvider} from 'react-cookie';

const store = createStore(
    rootReducer,
    load() as AppState,
    applyMiddleware(thunk)
);

// Declare gTM dataLayer array.
declare global {
    interface Window {
        dataLayer: any[];
    }
}

const navItemGroups: NavItemGroup[] = [
    {label: 'Home', to: '/', icon: <HomeIcon/>, navItems: []},
    {
        label: 'Guides',
        icon: <MenuBookIcon/>,
        navItems: [
            {
                label: 'Beginner Tips',
                to: '/guides/beginner-tips'
            },
            {
                label: 'Stat Priorities',
                to: '/guides/stat-priorities'
            },
            {
                label: 'Gear Design',
                to: '/guides/gear-design'
            }
        ]
    },
    {
        label: 'Gearing',
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
                label: 'Optimized Gear Templates',
                to: '/gearing/optimized-gear-templates'
            }
        ]
    },
    {
        label: 'Meta Builds',
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
                label: 'Hero Lookup',
                to: '/tools/hero-lookup'
            },
            {
                label: 'Guild Battle Event Planner',
                to: '/tools/guild-be-plan'
            }/*TODO add this back for live launch,
            {
                label: 'Gear Planner',
                to: '/tools/gear-planner'
            }*/
        ]
    },
    {label: 'About', to: '/about', icon: <InfoIcon/>, navItems: []},
    {label: 'Licensing', to: '/licensing', icon: <GavelIcon/>, navItems: []},
    {label: 'Privacy Policy', to: '/privacy', icon: <GavelIcon/>, navItems: []},
];

export const App: React.FC = () => {
    const tagManagerArgs: TagManagerArgs = {
        gtmId: process.env.REACT_APP_GTM_ID || '',
    };
    TagManager.initialize(tagManagerArgs);

    window.dataLayer.push({
        event: 'pageview'
    });

    return (
        <Provider store={store}>
            <CookiesProvider>
                <Router>
                    <Chrome title="Questland Handbook" navItemGroups={navItemGroups}>
                        <Switch>
                            <Route path="/" exact>
                                <HomePage/>
                            </Route>

                            <Route path="/guides/beginner-tips" exact>
                                <BeginnerTipsPage/>
                            </Route>
                            <Route path="/guides/stat-priorities" exact>
                                <Markdown md={statPriorities}/>
                            </Route>
                            <Route path="/guides/gear-design" exact>
                                <GearDesignPage/>
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
                            <Route path="/gearing/optimized-gear-templates" exact>
                                <OptimizedGearTemplatesPage/>
                            </Route>

                            <Route path="/meta/bloody-hell" exact>
                                <BloodyHellPage/>
                            </Route>
                            <Route path="/meta/turtle" exact>
                                <TurtlePage/>
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

                            <Route path="/currencies/primary" exact>
                                <PrimaryCurrencyPage/>
                            </Route>
                            <Route path="/currencies/secondary" exact>
                                <SecondaryCurrencyPage/>
                            </Route>
                            <Route path="/currencies/shop" exact>
                                <ShopCurrencyPage/>
                            </Route>

                            <Route path="/indexes/gear" exact>
                                <ItemIndexPage/>
                            </Route>
                            <Route path="/item/:id" component={ItemOverviewPage}/>
                            <Route path="/indexes/orb" exact>
                                <OrbIndexPage/>
                            </Route>
                            <Route path="/indexes/hard-boss-stats" exact>
                                <HardBossStatsIndexPage/>
                            </Route>
                            <Route path="/indexes/guild-boss-stats" exact>
                                <GuildBossStatsIndexPage/>
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
                            <Route path="/tools/hero-lookup" exact>
                                <HeroLookupPage/>
                            </Route>
                            <Route path="/tools/guild-be-plan" exact>
                                <GuildBattleEventPlanner/>
                            </Route>
                            {/*<Route path="/tools/gear-planner" exact>
                                <GearPlannerPage/>
                            </Route>*/}

                            <Route path="/about" exact>
                                <Markdown md={about}/>
                            </Route>

                            <Route path="/licensing" exact>
                                <LicensingPage/>
                            </Route>
                            <Route path="/privacy" exact>
                                <PrivacyPolicyPage/>
                            </Route>

                            <Route path="/account" exact>
                                <AccountPage/>
                            </Route>
                        </Switch>
                    </Chrome>
                </Router>
            </CookiesProvider>
        </Provider>
    );
};
