import {Button, Card, CardContent, List, ListItem, ListItemIcon, ListItemText, Typography} from '@material-ui/core';
import React from 'react';
import {Item} from '../../../domain/item';
import {itemIconInfo} from "./GearPlannerPage";
import {getEmblemImgUrl} from "../../../domain/emblem";
import {getStatUrl} from "../../../domain/stat";

export const SelectedItemCard: React.FC<{
    title: string;
    selectedItem: Item,
    setSelectedItem(item?: Item): void,
    selectedItemLinks: Item[],
    equippedItemIds: number[]
}> = ({title, selectedItem, setSelectedItem, selectedItemLinks, equippedItemIds}) => {

    const getItemLinkIconDetails = (item: Item) => {
        return <span>
            <img
                src={item.iconGraphicsUrl}
                alt={''}
                width={20}
                height={20}
            />
            <img
                src={getEmblemImgUrl(item.emblem)}
                alt=""
                width={20}
                height={20}
            />
            <img
                src={getStatUrl(item.itemBonus)}
                alt=""
                width={20}
                height={20}
            />
        </span>
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
                <Typography gutterBottom variant="body1" component="p">
                    {(selectedItem === undefined ? '' : selectedItem.name)}
                </Typography>
                {itemIconInfo(selectedItem)}
                <Typography gutterBottom variant="body1" component="p">
                    Links:
                </Typography>
                <List dense={true}>
                    {selectedItemLinks.map(item =>
                        <ListItem style={{padding: 0}} key={item.id}>
                            <ListItemIcon>{getItemLinkIconDetails(item)}</ListItemIcon>
                            <ListItemText primary={`\xa0\xa0${item.name}`}/>
                            <ListItemIcon>{getLinkConfirmedImage(
                                equippedItemIds.filter(id => id !== selectedItem.id)
                                    .includes(item ? item.id : 1)
                            )}</ListItemIcon>
                        </ListItem>
                    )}
                </List>
                <Button variant="contained" onClick={() => setSelectedItem(undefined)}>
                    Clear Selection
                </Button>
            </CardContent>
        </Card>
    );
};
