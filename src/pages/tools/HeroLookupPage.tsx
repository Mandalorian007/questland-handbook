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
import {qlApiUrl} from "../../config";
import {CollectionSlots, EquippedOrb, Hero} from "../../domain/hero";
import {useGridListCols} from "../../lib/responsiveList";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {EquippedGearCard} from "./EquippedGearCard";
import {Item, serverItemToItem} from "../../domain/item";
import {Orb, serverOrbToOrb} from "../../domain/orb";
import {Stat} from "../../domain/stat";
import {ItemSlot, toItemSlot} from "../../domain/ItemSlot";
import {Quality} from "../../domain/quality";
import {Emblem} from "../../domain/emblem";
import {CollectionGearCard, CollectionType} from "./CollectionGearCard";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        itemList: {
            paddingTop: theme.spacing(2),
        }
    })
);

export const HeroLookupPage: React.FC<{}> = () => {
    const classes = useStyles();
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
        fetch(qlApiUrl + 'items?sort=totalPotential,desc')
            .then(res => res.json())
            .then(serverItems => serverItems.map(serverItemToItem))
            .then(setItems);
        fetch(qlApiUrl + 'orbs')
            .then(res => res.json())
            .then(serverOrbs => serverOrbs.map(serverOrbToOrb))
            .then(setOrbs);
    }, [setItems, setOrbs]);

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

    return (
        <>
            <h1>Questland Hero Lookup</h1>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField
                    id="standard-text"
                    label="hero name"
                    type="text"
                    defaultValue={''}
                    onChange={(e: any) => handleHeroNameChange(e)}
                />
                <br/>
                <br/>
                <TextField
                    id="standard-text"
                    label="guild name"
                    type="text"
                    defaultValue={''}
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
            <Divider/>
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
                                                  equippedOrbStats={getOrbsFromEquippedOrbs(gear.socketedOrbs, orbs)}/>
                            </GridListTile>
                        );
                    })}
            </GridList>
            <Divider/>
            <h2>Collection 1</h2>
            <GridList cellHeight={180} spacing={16} cols={useGridListCols()} className={classes.itemList}>
                {hero.collections1
                    .sort((a, b) => a.collectionPosition > b.collectionPosition ? 1 : -1)
                    .map((gear, index) => {
                        return (
                            <GridListTile key={index} cols={1}>
                                <CollectionGearCard collectionGear={gear}
                                                    item={getItemFromEquippedGear(gear.id, items)}
                                                    collectionSlots={hero.collection1Slots}
                                                    collectionType={CollectionType.ONE}/>
                            </GridListTile>
                        );
                    })}
            </GridList>
            <Divider/>
            <h2>Collection 2</h2>
            <GridList cellHeight={180} spacing={16} cols={useGridListCols()} className={classes.itemList}>
                {hero.collections2
                    .sort((a, b) => a.collectionPosition > b.collectionPosition ? 1 : -1)
                    .map((gear, index) => {
                        return (
                            <GridListTile key={index} cols={1}>
                                <CollectionGearCard collectionGear={gear}
                                                    item={getItemFromEquippedGear(gear.id, items)}
                                                    collectionSlots={hero.collection2Slots}
                                                    collectionType={CollectionType.TWO}/>
                            </GridListTile>
                        );
                    })}
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
    totalPotential: 0
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
                statBonus: Stat.None
            };
    })
};