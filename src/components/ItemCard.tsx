import {Button, Card, CardActions, CardContent, Grid, Typography} from '@material-ui/core';
import {getEmblemImgUrl} from '../domain/emblem';
import React from 'react';
import {Item} from '../domain/item';
import {Quality} from '../domain/quality';
import {getItemSlotUrl} from "../domain/ItemSlot";

const getItemColor = (item: Item) => {
    switch (item.quality) {
        case Quality.Uncommon:
            return 'grey';
        case Quality.Common:
            return 'green';
        case Quality.Rare:
            return 'blue';
        case Quality.Epic:
            return 'purple';
        case Quality.Legendary:
            return 'orange';
        case Quality.Artifact1:
        case Quality.Artifact2:
        case Quality.Artifact3:
        case Quality.Artifact4:
        case Quality.Artifact5:
            return 'red';
    }
};

export const ItemCard: React.FC<{
    item: Item;
}> = ({item}) => {
    return (
        <Card>
            <CardContent>
                <Grid container direction="row" alignItems="center">
                    <img
                        src={getEmblemImgUrl(item.emblem)}
                        alt={item.emblem}
                        width={22}
                        height={22}
                    />
                    {`\xa0`}
                    <img
                        src={getItemSlotUrl(item.itemSlot)}
                        alt={item.itemSlot}
                        width={24}
                        height={24}
                    />
                    <Typography gutterBottom variant="subtitle1" component="h5" style={{color: getItemColor(item)}}>
                        {`\xa0\xa0${item.name}`}
                    </Typography>
                </Grid>
                <Typography variant="body1" color="textSecondary" component="p">
                    Potential: {item.totalPotential}
                </Typography>
                <Typography variant="body1" color="textSecondary" component="p">
                    Stats (hp, atk, def, mag)
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {item.health}, {item.attack}, {item.defense}, {item.magic}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary">
                    Details
                </Button>
            </CardActions>
        </Card>
    );
};
