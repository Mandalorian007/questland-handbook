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
    ListItem,
    ListItemText,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead
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
    totalPotential: 0

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

    const item: Item = useSelector(state => {
        const itemArray = state.itemState.items;
        const maybeItem = itemArray.find(item => item.id === +id);
        if (maybeItem) {
            return maybeItem;
        } else {
            return emptyItem;
        }
    });
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadItems());
        dispatch(loadOrbs());
    }, [dispatch]);

    const resolveItem = (id: number | undefined) => {
        if (id) {
            const maybeItem = items.find(item => item.id === id);
            if (maybeItem) {
                return maybeItem;
            }
        }
        return emptyItem;
    };

    const resolveOrbName = (id: number | undefined) => {
        if (id) {
            const maybeOrb = orbs.find(orb => orb.id === id);
            if (maybeOrb) {
                return maybeOrb.name;
            }
        }
        return 'Unknown Orb'
    };

    const getPassive1 = (item: Item) => {
        if (item.passive1Name && item.passive1Name !== '') {
            return (
                <ListItem>
                    <ListItemText>
                        {item.passive1Name + ': ' + item.passive1Description}
                    </ListItemText>
                </ListItem>
            )
        } else {
            return <div/>
        }
    };

    const getPassive2 = (item: Item) => {
        if (item.passive2Name && item.passive2Name !== '') {
            return (
                <ListItem>
                    <ListItemText>
                        {item.passive2Name + ': ' + item.passive2Description}
                    </ListItemText>
                </ListItem>
            )
        } else {
            return <div/>
        }
    };

    const getLinkedOrbs = (item: Item) => {
        if (item.orbLink1) {
            return (
                <ListItem>
                    <ListItemText>
                        {`Linked Orbs: ${resolveOrbName(item.orbLink1)}, ${resolveOrbName(item.orbLink2)}`}
                    </ListItemText>
                </ListItem>
            )
        } else {
            return <div/>
        }
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
                                        <TableCell>Health</TableCell>
                                        <TableCell>Attack</TableCell>
                                        <TableCell>Defense</TableCell>
                                        <TableCell>Magic</TableCell>
                                    </TableHead>
                                    <TableBody>
                                        <TableCell>{`${item.health} (${item.healthPotential})`}</TableCell>
                                        <TableCell>{`${item.attack} (${item.attackPotential})`}</TableCell>
                                        <TableCell>{`${item.defense} (${item.defensePotential})`}</TableCell>
                                        <TableCell>{`${item.magic} (${item.magicPotential})`}</TableCell>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </CardContent>
                    </div>
                    <Hidden xsDown>
                        <CardMedia className={classes.cardMedia}
                                   image={'https://www.questland-handbook.com/Knight%20of%20Tempest%20Image.png'}/>
                    </Hidden>
                </Card>
            </Grid>
            <Grid item xs={12} md={12}>
                <Paper>
                    <Typography variant="subtitle1" component="h5" paragraph align="center">
                        {`${item.itemBonus} boost item links`}
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={12} md={12}>
                <GridList cellHeight={180} spacing={16} cols={useGridListCols()}>
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
            <Grid item xs={12} md={12}>
                <Paper>
                    <Typography variant="subtitle1" component="h5" paragraph align="center">
                        {`${item.orbBonus} boost orb links`}
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    );
};

export const ItemPage = withRouter(ItemPageInternal);