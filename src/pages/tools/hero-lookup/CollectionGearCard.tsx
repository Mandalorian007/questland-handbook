import {Card, CardContent, Grid, Typography} from '@material-ui/core';
import React from 'react';
import {Item} from '../../../domain/item';
import {getQualityColor} from "../../../domain/quality";
import {EquippedGear} from "../../../domain/hero";
import {getEmblemImgUrl} from "../../../domain/emblem";
import {getItemSlotUrl} from "../../../domain/ItemSlot";
import {getStatUrl} from "../../../domain/stat";


export const CollectionGearCard: React.FC<{
    collectionGear: EquippedGear;
    item: Item,
    collectionPercentage: number,
    isLinked: boolean
}> = ({collectionGear, item, collectionPercentage, isLinked}) => {

    const getLinkedImage = (confirmed: boolean) => {
        return <img
            src={(confirmed ? '/checkmark-button.png' : '/x-button.png')}
            alt={''}
            width={18}
            height={18}
        />
    };

    return (
        <Card>
            <CardContent style={{
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right bottom",
                backgroundSize: "20%",
                backgroundImage: "url(" + item.fullGraphicsUrl + ")"
            }}>
                <Typography gutterBottom variant="subtitle1" component="h5"
                            style={{color: getQualityColor(item.quality)}}>
                    {item.quality.toString().replace('ARTIFACT', 'A')}: {item.name}
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
                    <img
                        src={getStatUrl(item.itemBonus)}
                        alt=""
                        width={24}
                        height={24}
                    />
                </Grid>
                <Typography variant="body1" color="textSecondary" component="p">
                    Boosts: {collectionGear.boost}
                </Typography>
                <Typography variant="body1" color="textSecondary" component="p">
                    Slot Level: {collectionPercentage}
                </Typography>
                <Typography variant="body1" color="textSecondary" component="p">
                    Link Status: {getLinkedImage(isLinked)}
                </Typography>
            </CardContent>
        </Card>
    );
};
