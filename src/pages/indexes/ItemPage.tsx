import React, {useEffect} from 'react';
import {TypedUseSelectorHook, useDispatch, useSelector as useReduxSelector} from 'react-redux';
import {AppState} from '../../store/rootReducer';
import {List, ListItem, ListItemText, Paper} from '@material-ui/core';
import {loadItems} from '../../store/itemActions';
import {Item} from '../../domain/item';
import {useParams, withRouter} from 'react-router-dom';
import {Emblem} from "../../domain/emblem";
import {Stat} from "../../domain/stat";
import {ItemSlot} from "../../domain/ItemSlot";
import {Quality} from "../../domain/quality";
import {Orb} from "../../domain/orb";
import {loadOrbs} from "../../store/orbActions";

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

const ItemPageInternal: React.FC<{}> = () => {
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

    const resolveItemName = (id: number | undefined) => {
        if (id) {
            const maybeItem = items.find(item => item.id === id);
            if (maybeItem) {
                return maybeItem.name;
            }
        }
        return 'Unknown Item'
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

    const getLinkedItems = (item: Item) => {
        if (item.itemLink1) {
            return (
                <ListItem>
                    <ListItemText>
                        {`Linked Items: ${resolveItemName(item.itemLink1)}, ${resolveItemName(item.itemLink2)}, ${resolveItemName(item.itemLink3)}`}
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
        <Paper>
            <List>
                <ListItem>
                    <ListItemText>
                        {'Name: ' + item.name}
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>
                        {'Quality: ' + item.quality}
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>
                        {'Slot: ' + item.itemSlot}
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>
                        {'Emblem: ' + item.emblem}
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>
                        {'Reforge Points per level: ' + item.reforgePointsPerLevel}
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>
                        {'Potential (hp, atk, def, mag): ' + item.totalPotential
                        + ` (${item.healthPotential}, ${item.attackPotential}, ${item.defensePotential}, ${item.magicPotential})`}
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>
                        {'Stats (hp, atk, def, mag): '
                        + `${item.health}, ${item.attack}, ${item.defense}, ${item.magic}`}
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>
                        {'Item Bonus: ' + item.itemBonus}
                    </ListItemText>
                </ListItem>
                {getLinkedItems(item)}
                <ListItem>
                    <ListItemText>
                        {'Orb Bonus: ' + item.orbBonus}
                    </ListItemText>
                </ListItem>
                {getLinkedOrbs(item)}
                {getPassive1(item)}
                {getPassive2(item)}
            </List>
        </Paper>
    );
};

export const ItemPage = withRouter(ItemPageInternal);