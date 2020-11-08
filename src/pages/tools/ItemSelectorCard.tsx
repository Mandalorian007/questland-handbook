import {
    Button,
    Card,
    CardContent,
    Collapse,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    TextField,
    Typography
} from '@material-ui/core';
import React from 'react';
import {Item} from '../../domain/item';
import {getItemSlotUrl, ItemSlot} from "../../domain/ItemSlot";
import {Stat} from "../../domain/stat";
import {Autocomplete} from "@material-ui/lab";
import {Emblem, getEmblemImgUrl} from "../../domain/emblem";

export const ItemSelectorCard: React.FC<{
    title: string;
    slotFilter?: ItemSlot;
    statFilter?: Stat;
    items: Item[],
    selectedItem?: Item,
    setSelectedItem(item?: Item): void,
    selectedItemLinks: Item[],
    equippedItemIds: number[]
}> = ({title, slotFilter, statFilter, items, selectedItem, setSelectedItem, selectedItemLinks, equippedItemIds}) => {

    const getSearchOptions = (slot?: ItemSlot, stat?: Stat) => {
        let options = items.filter(item => !equippedItemIds.includes(item?.id));
        if (slot) {
            options = options.filter(item => item.itemSlot === slot);
        }
        if (stat) {
            if (stat === Stat.Health) {
                //Consider attack gear also reasonable choices for health slots
                options = options.filter(item => item.itemBonus === stat || item.itemBonus === Stat.Attack);
            } else {
                options = options.filter(item => item.itemBonus === stat);
            }
        }
        if (statFilter) {
            switch (statFilter) {
                case Stat.Attack:
                    options = options.sort((a, b) => a.attack < b.attack ? 1 : -1);
                    break;
                case Stat.Magic:
                    options = options.sort((a, b) => a.magic < b.magic ? 1 : -1);
                    break;
                case Stat.Defense:
                    options = options.sort((a, b) => a.defense < b.defense ? 1 : -1);
                    break;
                case Stat.Health:
                    options = options.sort((a, b) => a.health < b.health ? 1 : -1);
                    break;
                default:
                    options = options.sort((a, b) => a.totalPotential < b.totalPotential ? 1 : -1);
            }
        } else {
            options = options.sort((a, b) => a.totalPotential < b.totalPotential ? 1 : -1);
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
            {getItemImageDetails(maybeItem?.emblem, maybeItem?.itemSlot, maybeItem?.itemBonus)}
            {`\xa0\xa0${itemName}`}
        </span>
    };

    const getItemImageDetails = (emblem?: Emblem, slot?: ItemSlot, stat?: Stat) => {
        const statName = (stat ? stat : Stat.None).toString().toLowerCase();
        return <span>
            <img
                src={getEmblemImgUrl(emblem ? emblem : Emblem.None)}
                alt=""
                width={20}
                height={20}
            />
            <img
                src={getItemSlotUrl(slot ? slot : ItemSlot.Unknown)}
                alt=""
                width={20}
                height={20}
            />
            <img
                src={`/stat/${statName}_icon_colored.png`}
                alt=""
                width={20}
                height={20}
            />
        </span>
    };

    const getItemIcon = (item?: Item) => {
        return <img
            src={(item === undefined ? '' : item.iconGraphicsUrl)}
            alt={''}
            width={30}
            height={30}
        />
    };

    const getLinkConfirmedImage = (confirmed: boolean) => {
        return <img
            src={(confirmed ? '/checkmark-button.png' : '/x-button.png')}
            alt={''}
            width={30}
            height={30}
        />
    };

    return (
        <Card>
            <CardContent
                style={{
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right top",
                    backgroundSize: "30%",
                    backgroundImage: "url(" + (selectedItem === undefined ? '' : selectedItem.iconGraphicsUrl) + ")"
                }}>
                <Typography gutterBottom variant="subtitle1" component="h5">
                    {title.charAt(0) + title.slice(1).toLowerCase()}
                </Typography>
                {/*// auto-hide search when item is selected*/}
                <Collapse
                    in={(selectedItem === undefined)}
                    timeout="auto"
                    unmountOnExit
                >
                    <Autocomplete
                        id="item-select"
                        options={getSearchOptions(slotFilter, statFilter)}
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
                </Collapse>
                {/*// auto-hide details when item is not selected*/}
                <Collapse
                    in={(selectedItem !== undefined)}
                    timeout="auto"
                    unmountOnExit
                >
                    <Typography gutterBottom variant="body1" component="p">
                        {(selectedItem === undefined ? '' : selectedItem.name)}
                    </Typography>
                    {getItemImageDetails(selectedItem?.emblem, selectedItem?.itemSlot, selectedItem?.itemBonus)}
                    <Typography gutterBottom variant="body1" component="p">
                        Links:
                    </Typography>
                    <List dense={true}>
                        {selectedItemLinks.map(item =>
                            <ListItem style={{padding: 0}} key={item.id}>
                                <ListItemIcon>{getItemIcon(item)}</ListItemIcon>
                                <ListItemText primary={item.name}/>
                                <ListItemIcon>{getLinkConfirmedImage(
                                    equippedItemIds.filter(id => id !== (selectedItem ? selectedItem.id : 1))
                                        .includes(item ? item.id : 1)
                                )}</ListItemIcon>
                            </ListItem>
                        )}
                    </List>
                    <Button variant="contained" onClick={() => setSelectedItem(undefined)}>
                        Clear Selection
                    </Button>
                </Collapse>
            </CardContent>
        </Card>
    );
};
