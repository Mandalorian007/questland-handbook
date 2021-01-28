import {Card, CardContent, TextField, Typography} from '@material-ui/core';
import React from 'react';
import {Item} from '../../../domain/item';
import {isItemSlot, ItemSlot} from "../../../domain/ItemSlot";
import {isStat, Stat} from "../../../domain/stat";
import {Autocomplete} from "@material-ui/lab";
import {itemIconInfo} from "./GearPlannerPage";

export const ItemSelectorCard: React.FC<{
    title: string;
    collectionLocation: ItemSlot | Stat
    items: Item[],
    setSelectedItem(item?: Item): void,
    equippedItemIds: number[]
}> = ({title, collectionLocation, items, setSelectedItem, equippedItemIds}) => {

    const getSearchOptions = (itemSlotType: ItemSlot | Stat) => {
        let options = items.filter(item => !equippedItemIds.includes(item?.id));
        if (isItemSlot(itemSlotType.toString())) {
            options = options.filter(item => item.itemSlot === itemSlotType);
            options = options.sort((a, b) => a.totalPotential < b.totalPotential ? 1 : -1);
            let collectionItems = options.filter(item => item.orbBonus === Stat.None);
            options = options.filter(item => item.orbBonus !== Stat.None).concat(collectionItems)
        }

        if (isStat(itemSlotType.toString())) {
            if (itemSlotType === Stat.Health) {
                //Consider attack gear also reasonable choices for health slots
                options = options.filter(item => item.itemBonus === itemSlotType || item.itemBonus === Stat.Attack);
            } else {
                options = options.filter(item => item.itemBonus === itemSlotType);
            }
        }
        if (isStat(itemSlotType.toString())) {

            let nonEquippedItems = items.filter(item => !equippedItemIds.includes(item?.id));
            let weapons = nonEquippedItems.filter(item => item.itemSlot === ItemSlot.MainHand || item.itemSlot === ItemSlot.OffHand);

            switch (itemSlotType) {
                case Stat.Attack:
                    options = options.sort((a, b) => a.attack < b.attack ? 1 : -1);
                    options = options.concat(weapons.sort((a, b) => a.attack < b.attack ? 1 : -1).slice(0, 3));
                    break;
                case Stat.Magic:
                    options = options.sort((a, b) => a.magic < b.magic ? 1 : -1);
                    options = options.concat(weapons.sort((a, b) => a.magic < b.magic ? 1 : -1).slice(0, 3));
                    break;
                case Stat.Defense:
                    options = options.sort((a, b) => a.defense < b.defense ? 1 : -1);
                    options = options.concat(weapons.sort((a, b) => a.defense < b.defense ? 1 : -1).slice(0, 3));
                    break;
                case Stat.Health:
                    options = options.sort((a, b) => a.health < b.health ? 1 : -1);
                    options = options.concat(weapons.sort((a, b) => a.health < b.health ? 1 : -1).slice(0, 3));
                    break;
                default:
                    options = options.sort((a, b) => a.totalPotential < b.totalPotential ? 1 : -1);
                    options = options.concat(weapons.sort((a, b) => a.totalPotential < b.totalPotential ? 1 : -1).slice(0, 3));
            }
        }

        return options.map(item => item.name)
    };

    const onItemSearchChange = (value: string | null) => {
        const itemName = value as string | null;
        setSelectedItem(items.find(item => item.name === itemName));
    };

    const getSearchDisplay = (itemName: string) => {
        const maybeItem = items.find(item => item.name === itemName);
        return <span>
            {itemIconInfo(maybeItem)}
            {`\xa0\xa0${itemName}`}
        </span>
    };

    return (
        <Card>
            <CardContent>
                <Typography gutterBottom variant="subtitle1" component="h5">
                    {title.charAt(0) + title.slice(1).toLowerCase()}
                </Typography>
                <Autocomplete
                    id={`item-select-${title.toLowerCase()}`}
                    options={getSearchOptions(collectionLocation)}
                    onChange={(event, value) => onItemSearchChange(value)}
                    autoHighlight
                    getOptionLabel={(option) => option}
                    renderOption={(option) => getSearchDisplay(option)}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="select an item"
                            variant="outlined"
                            inputProps={{
                                ...params.inputProps,
                                autoComplete: 'off', // disable autocomplete and autofill
                            }}
                        />
                    )}
                />
            </CardContent>
        </Card>
    );
};
