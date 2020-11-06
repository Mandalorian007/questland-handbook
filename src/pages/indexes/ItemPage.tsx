import React, {useEffect} from 'react';
import {TypedUseSelectorHook, useDispatch, useSelector as useReduxSelector} from 'react-redux';
import {AppState} from '../../store/rootReducer';
import {
    Card,
    CardContent,
    CardMedia,
    GridList,
    GridListTile,
    Hidden,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead, TableRow
} from '@material-ui/core';
import {loadItems} from '../../store/itemActions';
import {Item} from '../../domain/item';
import {useParams, withRouter} from 'react-router-dom';
import {Emblem, getEmblemColor, getEmblemImgUrl} from "../../domain/emblem";
import {Stat} from "../../domain/stat";
import {getItemSlotUrl, ItemSlot} from "../../domain/ItemSlot";
import {getQualityColor, Quality} from "../../domain/quality";
import {Orb} from "../../domain/orb";
import {loadOrbs} from "../../store/orbActions";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {ItemCard} from "../../components/ItemCard";
import {useGridListCols} from "../../lib/responsiveList";
import {OrbCard} from "../../components/OrbCard";
import {qlApiUrl} from "../../config";
import {ArtifactItemCard} from "../../components/ArtifactItemCard";
import {ArtifactOrbCard} from "../../components/ArtifactOrbCard";

export const useSelector: TypedUseSelectorHook<AppState> = useReduxSelector;

const emptyItem: Item = {
    attack: 0,
    attackPotential: 0,
    defense: 0,
    defensePotential: 0,
    emblem: Emblem.None,
    health: 0,
    healthPotential: 0,
    reforgePointsPerLevel: 0,
    id: 0,
    itemBonus: Stat.None,
    itemSlot: ItemSlot.Unknown,
    magic: 0,
    magicPotential: 0,
    name: "Item not found",
    orbBonus: Stat.None,
    quality: Quality.Legendary,
    totalPotential: 0,
    extractCost: 0,
    fullGraphicsUrl: "",
    iconGraphicsUrl: "",
};

const emptyOrb: Orb = {
    attack: 0,
    attackPotential: 0,
    defense: 0,
    defensePotential: 0,
    health: 0,
    healthPotential: 0,
    id: 0,
    magic: 0,
    magicPotential: 0,
    name: "Unknown Orb",
    quality: Quality.Legendary,
    statBonus: Stat.None,
    iconGraphicsUrl: "",
};

const useStyles = makeStyles((theme) => ({
    card: {
        display: 'flex',
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 250,
    },
}));

const ItemPageInternal: React.FC<{}> = () => {
    const classes = useStyles();
    const {id} = useParams();

    const items: Item[] = useSelector(state => state.itemState.items);
    const orbs: Orb[] = useSelector(state => state.orbState.orbs);

    const [item, setItem] = React.useState<Item>(emptyItem);
    const [artifactItems, setArtifactItems] = React.useState<Item[]>([]);
    const [artifactOrbs, setArtifactOrbs] = React.useState<Orb[]>([]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadItems());
        dispatch(loadOrbs());
        const artifactLookupEndpoint = qlApiUrl + `items/artifacts/${id}`;
        fetch(artifactLookupEndpoint)
            .then(res => res.json())
            .then(artifacts => setArtifactItems(artifacts));

        // resolve item and artifact orbs
        fetch(qlApiUrl + `items/${id}`)
            .then(res => res.json() as Promise<Item>)
            .then(resolvedItem => {
                setItem(resolvedItem);
                return resolvedItem;
            })
            .then(resolvedItem => [resolvedItem.orbLink1, resolvedItem.orbLink2])
            .then(orbLinks => {
                Promise.all([
                    fetch(qlApiUrl + `orbs/artifacts/${orbLinks[0]}`),
                    fetch(qlApiUrl + `orbs/artifacts/${orbLinks[1]}`)
                ]).then(([artifactOrbs1, artifactOrbs2]) => {
                    const array1 = artifactOrbs1.ok ? artifactOrbs1.json() as Promise<Orb[]> : Promise.resolve([]);
                    const array2 = artifactOrbs1.ok ? artifactOrbs2.json() as Promise<Orb[]> : Promise.resolve([]);
                    Promise.all([array1, array2])
                        .then(([artOrbs1, artOrbs2]) => {
                            setArtifactOrbs(artOrbs1.concat(artOrbs2))
                        })
                })
            })
    }, [dispatch, id, setArtifactItems, setItem]);

    const resolveItem = (id: number | undefined) => {
        if (id) {
            const maybeItem = items.find(item => item.id === id);
            if (maybeItem) {
                return maybeItem;
            }
        }
        return emptyItem;
    };

    const resolveOrb = (id: number | undefined) => {
        if (id) {
            const maybeOrb = orbs.find(orb => orb.id === id);
            if (maybeOrb) {
                return maybeOrb;
            }
        }
        return emptyOrb;
    };

    const getItemLinkDescription = () => {
        if (item.itemBonus && item.itemBonus !== Stat.None) {
            return `${item.itemBonus} boost item links`
        } else {
            return `There are no item links`
        }
    };

    const getItemLinkDetails = (cols: number) => {
        if (item.itemBonus && item.itemBonus !== Stat.None) {
            return (
                <Grid item xs={12} md={12}>
                    <GridList cellHeight={180} spacing={16} cols={cols}>
                        <GridListTile>
                            <ItemCard item={resolveItem(item.itemLink1)}/>
                        </GridListTile>
                        <GridListTile>
                            <ItemCard item={resolveItem(item.itemLink2)}/>
                        </GridListTile>
                        <GridListTile>
                            <ItemCard item={resolveItem(item.itemLink3)}/>
                        </GridListTile>
                    </GridList>
                </Grid>
            );
        } else {
            return <div/>
        }
    };

    const getOrbLinkDescription = () => {

        if (item.itemBonus && item.itemBonus !== Stat.None) {
            return `${item.orbBonus} boost orb links`;
        } else {
            return `There are no orb links`
        }
    };

    const getOrbLinkDetails = (cols: number) => {
        if (item.orbBonus && item.orbBonus !== Stat.None) {
            const id1 = item.orbLink1;
            const id2 = item.orbLink2;
            return (
                <Grid item xs={12} md={12}>
                    <GridList cellHeight={140} spacing={16} cols={cols}>
                        <GridListTile>
                            <OrbCard orb={resolveOrb(id1)}/>
                        </GridListTile>
                        <GridListTile>
                            <OrbCard orb={resolveOrb(id2)}/>
                        </GridListTile>
                        {artifactOrbs.map(artifactOrb =>
                            <GridListTile key={artifactOrb.id}>
                                <ArtifactOrbCard orb={artifactOrb}/>
                            </GridListTile>
                        )}
                    </GridList>
                </Grid>
            );
        } else {
            return <div/>
        }
    };

    const getPassiveDetails = () => {
        if (item.passive1Name) {
            return (
                <Paper>
                    <Typography variant="subtitle1" component="h5" paragraph>
                        {item.passive1Name + ': ' + item.passive1Description}
                    </Typography>
                    <Typography variant="subtitle1" component="h5" paragraph>
                        {item.passive2Name + ': ' + item.passive2Description}
                    </Typography>
                </Paper>
            )
        } else {
            return (
                <Paper>
                    <Typography variant="subtitle1" component="h5" paragraph align="center">
                        There are no passives for this item
                    </Typography>
                </Paper>
            )
        }
    };

    const getArtifactDetails = (cols: number) => {
        return (
            <Grid item xs={12} md={12}>
                <GridList cellHeight={140} spacing={16} cols={cols}>
                    {artifactItems.map(artifactItem =>
                        <GridListTile key={artifactItem.id}>
                            <ArtifactItemCard item={artifactItem}/>
                        </GridListTile>
                    )}
                </GridList>
            </Grid>
        );
    };

    return (
        <Grid container spacing={1}>
            <Grid item xs={12} md={12}>
                <Card className={classes.card}>
                    <div className={classes.cardDetails}>
                        <CardContent>
                            <Typography component="h2" variant="h5">
                                {item.name}
                            </Typography>
                            <Typography variant="subtitle1" paragraph style={{color: getQualityColor(item.quality)}}>
                                {item.quality}
                            </Typography>
                            <Grid container direction="row" alignItems="center">
                                <img
                                    src={getEmblemImgUrl(item.emblem)}
                                    alt={item.emblem}
                                    width={22}
                                    height={22}
                                />
                                <Typography gutterBottom variant="subtitle1" component="h5"
                                            style={{color: getEmblemColor(item.emblem)}}>
                                    {`\xa0${item.emblem}`}
                                </Typography>
                            </Grid>
                            <Grid container direction="row" alignItems="center">
                                <img
                                    src={getItemSlotUrl(item.itemSlot)}
                                    alt={item.itemSlot}
                                    width={24}
                                    height={24}
                                />
                                <Typography gutterBottom variant="subtitle1" component="h5">
                                    {`\xa0${item.itemSlot}`}
                                </Typography>
                            </Grid>
                            <Typography variant="subtitle1" component="h5" paragraph>
                                {'Potential: ' + item.totalPotential}
                            </Typography>
                            <Typography variant="subtitle1" component="h5" paragraph>
                                Stats (per level):
                            </Typography>
                            <TableContainer component={Paper}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Health</TableCell>
                                            <TableCell>Attack</TableCell>
                                            <TableCell>Defense</TableCell>
                                            <TableCell>Magic</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>{`${item.health} (${item.healthPotential})`}</TableCell>
                                            <TableCell>{`${item.attack} (${item.attackPotential})`}</TableCell>
                                            <TableCell>{`${item.defense} (${item.defensePotential})`}</TableCell>
                                            <TableCell>{`${item.magic} (${item.magicPotential})`}</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </CardContent>
                    </div>
                    <Hidden xsDown>
                        <CardMedia component="img" image={item.fullGraphicsUrl} className={classes.cardMedia}/>
                    </Hidden>
                </Card>
            </Grid>
            <Grid item xs={12} md={12}>
                <Paper>
                    <Typography variant="subtitle1" component="h5" paragraph align="center">
                        {getItemLinkDescription()}
                    </Typography>
                </Paper>
            </Grid>
            {getItemLinkDetails(useGridListCols())}
            <Grid item xs={12} md={12}>
                <Paper>
                    <Typography variant="subtitle1" component="h5" paragraph align="center">
                        {getOrbLinkDescription()}
                    </Typography>
                </Paper>
            </Grid>
            {getOrbLinkDetails(useGridListCols())}
            <Grid item xs={12} md={12}>
                {getPassiveDetails()}
            </Grid>
            <Grid item xs={12} md={12}>
                <Paper>
                    <Typography variant="subtitle1" component="h5" paragraph align="center">
                        Artifact Item versions
                    </Typography>
                </Paper>
            </Grid>
            {getArtifactDetails(useGridListCols())}
        </Grid>
    );
};

export const ItemPage = withRouter(ItemPageInternal);