import {
    Button,
    Divider,
    GridList,
    GridListTile,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow
} from '@material-ui/core';
import * as React from 'react';
import {useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import {qlApiUrl} from "../../../config";
import {CollectionSlots, EquippedGear, EquippedOrb, Hero} from "../../../domain/hero";
import {useGridListCols} from "../../../lib/responsiveList";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Item, serverItemToItem} from "../../../domain/item";
import {Orb, serverOrbToOrb} from "../../../domain/orb";
import {Stat} from "../../../domain/stat";
import {ItemSlot, toItemSlot} from "../../../domain/ItemSlot";
import {Quality} from "../../../domain/quality";
import {Emblem} from "../../../domain/emblem";
import {CollectionGearCard} from "./CollectionGearCard";
import memoize from "fast-memoize";
import {EquippedGearCard} from "./EquippedGearCard";
import {useParams, withRouter} from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        itemList: {
            paddingTop: theme.spacing(2),
        }
    })
);

export function filterUndef<T>(ts: (T | undefined)[]): T[] {
    return ts.filter((t: T | undefined): t is T => !!t)
}

export const ItemOverviewPageInternal: React.FC<{}> = () => {
    const classes = useStyles();
    const {urlServer, urlGuildName, urlHeroName} = useParams();
    const [heroName, setHeroName] = React.useState<string>('');
    const [guildName, setGuildName] = React.useState<string>('');
    const [serverName, setServerName] = React.useState<string>('GLOBAL');
    const [items, setItems] = React.useState<Item[]>([]);
    const [orbs, setOrbs] = React.useState<Orb[]>([]);

    const emptyCollectionStats: CollectionSlots = {
        slotUpgradePercentages: [],
        unlockedSlots: 0

    };
    const initialState: Hero = {
        attack: 0,
        battleEventMulti: 0,
        collection1Slots: emptyCollectionStats,
        collection2Slots: emptyCollectionStats,
        collections1: [],
        collections2: [],
        critChance: 0,
        critDmgMuti: 0,
        daysPlayed: 0,
        defense: 0,
        dodgeChance: 0,
        equippedGear: [],
        fame: 0,
        guild: "",
        health: 0,
        heroPower: 0,
        heroPowerRank: 0,
        heroPvpRank: 0,
        id: 0,
        language: "",
        level: 0,
        magic: 0,
        name: "",
        row1Bonus: "",
        row2Bonus: "",
        row3Bonus: "",
        row4Bonus: "",
        server: "",
        vip: 0
    };
    const [hero, setHero] = React.useState<Hero>(initialState);

    useEffect(() => {
        if (urlServer) {
            const urlServerFormatted = urlServer.trim().toUpperCase();
            if (['GLOBAL', 'AMERICA', 'EUROPE', 'VETERANS', 'ASIA'].includes(urlServerFormatted)) {
                setServerName(urlServerFormatted);
            }
        }
        if (urlGuildName) {
            setGuildName(urlGuildName);
        }
        if (urlHeroName) {
            setHeroName(urlHeroName);
        }
        fetch(qlApiUrl + 'items?sort=totalPotential,desc')
            .then(res => res.json())
            .then(serverItems => serverItems.map(serverItemToItem))
            .then(setItems);
        fetch(qlApiUrl + 'orbs')
            .then(res => res.json())
            .then(serverOrbs => serverOrbs.map(serverOrbToOrb))
            .then(setOrbs);
    }, [setItems, setOrbs, serverName, setGuildName, setHeroName, urlServer, urlGuildName, urlHeroName]);

    const handleHeroNameChange = (e: any) => {
        setHeroName(e.target.value);
    };

    const handleGuildNameChange = (e: any) => {
        setGuildName(e.target.value);
    };

    const handleServerNameChange = (e: any) => {
        setServerName(e.target.value);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        let url = qlApiUrl + `hero/${encodeURIComponent(
            guildName
        )}/${encodeURIComponent(
            heroName
        )}?server=${serverName}`;
        fetch(url)
            .then(res => res.json())
            .then(json => {
                if ('id' in json) {
                    setHero(json);
                } else {
                    alert(
                        `Couldn't find hero with name: ${heroName} in guild: ${guildName} on server: ${serverName}`
                    );
                }
            });
    };

    const getAttackCollectionItems = (collections1: EquippedGear[], collections2: EquippedGear[]) => {
        return filterUndef([
            collections1.find(item => item.collectionPosition === 4),
            collections1.find(item => item.collectionPosition === 8),
            collections2.find(item => item.collectionPosition === 2),
            collections2.find(item => item.collectionPosition === 6),
            collections2.find(item => item.collectionPosition === 10)
        ]);
    };

    const getMagicCollectionItems = (collections1: EquippedGear[], collections2: EquippedGear[]) => {
        return filterUndef([
            collections1.find(item => item.collectionPosition === 1),
            collections1.find(item => item.collectionPosition === 5),
            collections1.find(item => item.collectionPosition === 9),
            collections2.find(item => item.collectionPosition === 3),
            collections2.find(item => item.collectionPosition === 7)
        ]);
    };

    const getDefenseCollectionItems = (collections1: EquippedGear[], collections2: EquippedGear[]) => {
        return filterUndef([
            collections1.find(item => item.collectionPosition === 3),
            collections1.find(item => item.collectionPosition === 7),
            collections2.find(item => item.collectionPosition === 1),
            collections2.find(item => item.collectionPosition === 5),
            collections2.find(item => item.collectionPosition === 9)
        ]);
    };

    const getHealthCollectionItems = (collections1: EquippedGear[], collections2: EquippedGear[]) => {
        return filterUndef([
            collections1.find(item => item.collectionPosition === 2),
            collections1.find(item => item.collectionPosition === 6),
            collections1.find(item => item.collectionPosition === 10),
            collections2.find(item => item.collectionPosition === 4),
            collections2.find(item => item.collectionPosition === 8)
        ]);
    };

    const getCollectionSlotPercentage = (item: EquippedGear, collections1: EquippedGear[], collection1Upgrades: number[], collection2Upgrades: number[]): number => {
        if (collections1.includes(item)) {
            return collection1Upgrades[item.collectionPosition - 1]
        } else {
            return collection2Upgrades[item.collectionPosition - 1]
        }
    };

    const isItemLinked = (gear: EquippedGear, items: Item[], equippedGear: EquippedGear[], collection1: EquippedGear[], collection2: EquippedGear[]) => {
        //not including worn item
        const allEquippedGear = equippedGear.concat(collection1).concat(collection2).filter(item => item.id === gear.id);
        // get linking item ids.
        const maybeItem = items.find(item => item.id === memoizedGetItemBaseId(gear));
        const itemLinkIds: number[] = filterUndef([maybeItem?.itemLink1, maybeItem?.itemLink2, maybeItem?.itemLink3]);

        //convert equipped gear into the baseIds
        const baseEquippedItemIds = allEquippedGear.map(gear => memoizedGetItemBaseId(gear));

        //check if at least two links are present.
        return baseEquippedItemIds.filter(id => itemLinkIds.includes(id)).length > 1;
    };

    const getItemBaseId = (gear: EquippedGear) => {
        const currentItem = items.find(item => item.id === gear.id);
        if (currentItem && [Quality.Artifact1, Quality.Artifact2, Quality.Artifact3, Quality.Artifact4, Quality.Artifact5].includes(currentItem.quality)) {
            // find the legendary item version
            const legendaryItem = items.filter(item => item.name === currentItem.name).find(item => item.quality === Quality.Legendary);
            if (legendaryItem) {
                return legendaryItem.id;
            }
        }
        //fallback if we can't find the legendary version of the artifact or if the item wasn't an artifact
        return gear.id;
    };

    const memoizedGetItemBaseId = memoize(getItemBaseId);

    const calculateStatBonus = (a: EquippedGear, linkStat: Stat) => {
        const theItem = items.find(item => item.id === a.id);
        if (theItem) {
            if (theItem.itemBonus === linkStat && isItemLinked(a, items, hero.equippedGear, hero.collections1, hero.collections2)) {
                return getItemStatValue(theItem, linkStat) * 1.3;
            } else {
                return getItemStatValue(theItem, linkStat);
            }
        }
        return 0;
    };

    const getItemStatValue = (item: Item, stat: Stat) => {
        switch (stat) {
            case Stat.Attack:
                return item.attack;
            case Stat.Magic:
                return item.magic;
            case Stat.Defense:
                return item.defense;
            case Stat.Health:
                return item.health;
            default:
                return 0;
        }
    };

    return (
        <>
            <h1>Questland Hero Lookup</h1>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField
                    id="select-hero-name-label"
                    label="hero name"
                    type="text"
                    value={heroName}
                    onChange={(e: any) => handleHeroNameChange(e)}
                />
                <br/>
                <br/>
                <TextField
                    id="select-guild-name-label"
                    label="guild name"
                    type="text"
                    value={guildName}
                    onChange={(e: any) => handleGuildNameChange(e)}
                />
                <br/>
                <br/>
                <InputLabel id="server-label">Server</InputLabel>
                <Select
                    labelId="select-server-label"
                    id="select-server"
                    value={serverName}
                    onChange={handleServerNameChange}
                >
                    <MenuItem value={'GLOBAL'}>Global</MenuItem>
                    <MenuItem value={'AMERICA'}>USA</MenuItem>
                    <MenuItem value={'EUROPE'}>Europe</MenuItem>
                    <MenuItem value={'VETERANS'}>Veterans</MenuItem>
                    <MenuItem value={'ASIA'}>Asia</MenuItem>
                </Select>
                <br/>
                <br/>
                <Button
                    type="submit"
                    style={{display: 'block'}}
                    variant="contained"
                    size="small"
                    color="primary"
                >
                    Load Hero Information
                </Button>
            </form>
            <br/>
            <br/>
            <Divider/>
            <h2>Hero Profile</h2>
            <Paper>
                <TableContainer>
                    <Table aria-label="simple table">
                        <TableBody>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>{hero.name}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Level</TableCell>
                                <TableCell>{hero.level}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Days Played</TableCell>
                                <TableCell>{hero.daysPlayed}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>VIP</TableCell>
                                <TableCell>
                                    {hero.vip}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Language</TableCell>
                                <TableCell>{hero.language.toUpperCase()}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Hall of Fame</TableCell>
                                <TableCell>{hero.heroPowerRank}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Arena Rank</TableCell>
                                <TableCell>{hero.heroPvpRank}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Hero Power (Hp, Atk, Def, Mag)</TableCell>
                                <TableCell>
                                    {hero.heroPower +
                                    ' (' + hero.health +
                                    ',' + hero.attack +
                                    ',' + hero.defense +
                                    ',' + hero.magic + ')'}
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
            <h2>Equipment</h2>
            <GridList cellHeight={380} spacing={16} cols={useGridListCols()} className={classes.itemList}>
                {hero.equippedGear
                    .sort((a, b) => {
                        //Sort equipped items by typical worn order to aid in readability
                        const itemSlotOrder = Object.values(ItemSlot);
                        const aOrder = itemSlotOrder.indexOf(toItemSlot(a.itemSlot));
                        const bOrder = itemSlotOrder.indexOf(toItemSlot(b.itemSlot));
                        if (aOrder < bOrder) return -1;
                        if (aOrder > bOrder) return 1;
                        return 0;
                    })
                    .map((gear, index) => {
                        return (
                            <GridListTile key={index} cols={1}>
                                <EquippedGearCard equippedGear={gear} item={getItemFromEquippedGear(gear.id, items)}
                                                  equippedOrbStats={getOrbsFromEquippedOrbs(gear.socketedOrbs, orbs)}
                                                  allOrbs={orbs}
                                                  isLinked={isItemLinked(gear, items, hero.equippedGear, hero.collections1, hero.collections2)}/>
                            </GridListTile>
                        );
                    })}
            </GridList>
            <h2>Attack Collections</h2>
            <GridList cellHeight={180} spacing={16} cols={useGridListCols()} className={classes.itemList}>
                {getAttackCollectionItems(hero.collections1, hero.collections2)
                    .sort((a, b) => {
                        const aStat = calculateStatBonus(a, Stat.Attack);
                        const bStat = calculateStatBonus(b, Stat.Attack);
                        return bStat > aStat ? 1 : -1;
                    })
                    .map((gear, index) =>
                        <GridListTile key={index} cols={1}>
                            <CollectionGearCard collectionGear={gear}
                                                item={getItemFromEquippedGear(gear.id, items)}
                                                collectionPercentage={getCollectionSlotPercentage(gear, hero.collections1, hero.collection1Slots.slotUpgradePercentages, hero.collection2Slots.slotUpgradePercentages)}
                                                isLinked={isItemLinked(gear, items, hero.equippedGear, hero.collections1, hero.collections2)}/>
                        </GridListTile>
                    )
                }
            </GridList>
            <h2>Magic Collections</h2>
            <GridList cellHeight={180} spacing={16} cols={useGridListCols()} className={classes.itemList}>
                {getMagicCollectionItems(hero.collections1, hero.collections2)
                    .sort((a, b) => {
                        const aStat = calculateStatBonus(a, Stat.Magic);
                        const bStat = calculateStatBonus(b, Stat.Magic);
                        return bStat > aStat ? 1 : -1;
                    })
                    .map((gear, index) =>
                        <GridListTile key={index} cols={1}>
                            <CollectionGearCard collectionGear={gear}
                                                item={getItemFromEquippedGear(gear.id, items)}
                                                collectionPercentage={getCollectionSlotPercentage(gear, hero.collections1, hero.collection1Slots.slotUpgradePercentages, hero.collection2Slots.slotUpgradePercentages)}
                                                isLinked={isItemLinked(gear, items, hero.equippedGear, hero.collections1, hero.collections2)}/>
                        </GridListTile>
                    )
                }
            </GridList>
            <h2>Defense Collections</h2>
            <GridList cellHeight={180} spacing={16} cols={useGridListCols()} className={classes.itemList}>
                {getDefenseCollectionItems(hero.collections1, hero.collections2)
                    .sort((a, b) => {
                        const aStat = calculateStatBonus(a, Stat.Defense);
                        const bStat = calculateStatBonus(b, Stat.Defense);
                        return bStat > aStat ? 1 : -1;
                    })
                    .map((gear, index) =>
                        <GridListTile key={index} cols={1}>
                            <CollectionGearCard collectionGear={gear}
                                                item={getItemFromEquippedGear(gear.id, items)}
                                                collectionPercentage={getCollectionSlotPercentage(gear, hero.collections1, hero.collection1Slots.slotUpgradePercentages, hero.collection2Slots.slotUpgradePercentages)}
                                                isLinked={isItemLinked(gear, items, hero.equippedGear, hero.collections1, hero.collections2)}/>
                        </GridListTile>
                    )
                }
            </GridList>
            <h2>Health Collections</h2>
            <GridList cellHeight={180} spacing={16} cols={useGridListCols()} className={classes.itemList}>
                {getHealthCollectionItems(hero.collections1, hero.collections2)
                    .sort((a, b) => {
                        const aStat = calculateStatBonus(a, Stat.Health);
                        const bStat = calculateStatBonus(b, Stat.Health);
                        return bStat > aStat ? 1 : -1;
                    })
                    .map((gear, index) =>
                        <GridListTile key={index} cols={1}>
                            <CollectionGearCard collectionGear={gear}
                                                item={getItemFromEquippedGear(gear.id, items)}
                                                collectionPercentage={getCollectionSlotPercentage(gear, hero.collections1, hero.collection1Slots.slotUpgradePercentages, hero.collection2Slots.slotUpgradePercentages)}
                                                isLinked={isItemLinked(gear, items, hero.equippedGear, hero.collections1, hero.collections2)}/>
                        </GridListTile>
                    )
                }
            </GridList>
        </>
    );
};

const missingItem: Item = {
    attack: 0,
    attackPotential: 0,
    defense: 0,
    defensePotential: 0,
    emblem: Emblem.None,
    health: 0,
    healthPotential: 0,
    id: 0,
    itemBonus: Stat.None,
    itemSlot: ItemSlot.Unknown,
    magic: 0,
    magicPotential: 0,
    name: "Unknown item",
    orbBonus: Stat.None,
    quality: Quality.Legendary,
    reforgePointsPerLevel: 0,
    totalPotential: 0,
    extractCost: 0,
    fullGraphicsUrl: "",
    iconGraphicsUrl: "",
};

const getItemFromEquippedGear = (id: number, items: Item[]) => {
    let maybeItem = items.find(item => item.id === id);
    return maybeItem ? maybeItem : missingItem;
};

const getOrbsFromEquippedOrbs = (equippedOrbs: EquippedOrb[], orbs: Orb[]) => {
    return equippedOrbs.map(equippedOrb => {
        const maybeOrb = orbs.find(orb => orb.id === equippedOrb.id);
        return maybeOrb ? maybeOrb :
            {
                attack: 0,
                attackPotential: 0,
                defense: 0,
                defensePotential: 0,
                health: 0,
                healthPotential: 0,
                id: equippedOrb.id,
                magic: 0,
                magicPotential: 0,
                name: "Missing Orb",
                quality: Quality.Legendary,
                statBonus: Stat.None,
                iconGraphicsUrl: "",
            };
    })
};

export const HeroLookupPage = withRouter(ItemOverviewPageInternal);