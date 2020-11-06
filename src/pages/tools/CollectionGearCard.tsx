import {Card, CardContent, Grid, Typography} from '@material-ui/core';
import React from 'react';
import {Item} from '../../domain/item';
import {getQualityColor} from "../../domain/quality";
import {CollectionSlots, EquippedGear} from "../../domain/hero";
import {getEmblemImgUrl} from "../../domain/emblem";
import {getItemSlotUrl} from "../../domain/ItemSlot";
import {Stat} from "../../domain/stat";

export enum CollectionType {
    ONE,
    TWO
}

export const CollectionGearCard: React.FC<{
    collectionGear: EquippedGear;
    item: Item,
    collectionSlots: CollectionSlots,
    collectionType: CollectionType
}> = ({collectionGear, item, collectionSlots, collectionType}) => {

    const getCollectionType1Stat = (collectionPosition: number) => {
        let slotStat: Stat;
        switch (collectionPosition) {
            case 1:
            case 4:
            case 9:
                slotStat = Stat.Health;
                break;
            case 3:
            case 5:
            case 7:
                slotStat = Stat.Attack;
                break;
            case 2:
            case 6:
                slotStat = Stat.Defense;
                break;
            case 0:
            case 8:
                slotStat = Stat.Magic;
                break;
            default:
                slotStat = Stat.None;
                break;
        }
        return slotStat;
    };
    const getCollectionType2Stat = (collectionPosition: number) => {
        let slotStat: Stat;
        switch (collectionPosition) {
            case 3:
            case 7:
                slotStat = Stat.Health;
                break;
            case 1:
            case 5:
            case 9:
                slotStat = Stat.Attack;
                break;
            case 0:
            case 4:
            case 8:
                slotStat = Stat.Defense;
                break;
            case 2:
            case 6:
                slotStat = Stat.Magic;
                break;
            default:
                slotStat = Stat.None;
                break;
        }
        return slotStat;
    };

    return (
        <Card>
            <CardContent>
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
                </Grid>
                <Typography variant="body1" color="textSecondary" component="p">
                    Boosts: {collectionGear.boost}
                </Typography>
                <Typography variant="body1" color="textSecondary" component="p">
                    {`Slot Type: ${CollectionType.ONE === collectionType ? getCollectionType1Stat(collectionGear.collectionPosition -1) : getCollectionType2Stat(collectionGear.collectionPosition -1)}`}
                </Typography>
                <Typography variant="body1" color="textSecondary" component="p">
                    Slot Level: {collectionSlots.slotUpgradePercentages[collectionGear.collectionPosition - 1]}
                </Typography>
            </CardContent>
        </Card>
    );
};
