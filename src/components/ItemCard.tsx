import {Button, Card, CardActions, CardContent, Grid, Typography} from '@material-ui/core';
import {getEmblemImgUrl} from '../domain/emblem';
import React from 'react';
import {Item} from '../domain/item';
import {getItemSlotUrl} from "../domain/ItemSlot";
import {NavLink} from "react-router-dom";
import {getQualityColor} from "../domain/quality";

export const ItemCard: React.FC<{
    item: Item;
}> = ({item}) => {
    return (
        <Card>
            <CardContent style={{
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right bottom",
                backgroundSize: "contain 35%",
                backgroundImage: "url(" + item.iconGraphicsUrl + ")"
            }}>
                <Typography gutterBottom variant="subtitle1" component="h5"
                            style={{color: getQualityColor(item.quality)}}>
                    {`${item.name}`}
                </Typography>
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
                </Grid>
                <Typography variant="body1" color="textSecondary" component="p">
                    Potential: {item.totalPotential}
                </Typography>
                <Typography variant="body1" color="textSecondary" component="p">
                    Stats(hp,atk,def,mag)
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {item.health}, {item.attack}, {item.defense}, {item.magic}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small"
                        color="primary"
                        component={NavLink}
                        to={`/item/${item.id}`}>
                    Details
                </Button>
            </CardActions>
        </Card>
    );
};
