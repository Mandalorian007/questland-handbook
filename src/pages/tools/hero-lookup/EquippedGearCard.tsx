import {Card, CardContent, Grid, List, Typography} from '@material-ui/core';
import React from 'react';
import {Item} from '../../../domain/item';
import {getQualityColor, Quality} from "../../../domain/quality";
import {EquippedGear} from "../../../domain/hero";
import {Orb} from "../../../domain/orb";
import {getEmblemImgUrl} from "../../../domain/emblem";
import {getItemSlotUrl} from "../../../domain/ItemSlot";
import {EquippedOrbListItem} from "./EquippedOrbListItem";
import {Stat} from "../../../domain/stat";

export const EquippedGearCard: React.FC<{
    equippedGear: EquippedGear;
    item: Item
    equippedOrbStats: Orb[]
}> = ({equippedGear, item, equippedOrbStats}) => {

    const getOrbStats = (id: number, orbs: Orb[]) => {
        const maybeOrb = orbs.find(orb => orb.id === id);
        return maybeOrb ? maybeOrb :
            {
                attack: 0,
                attackPotential: 0,
                defense: 0,
                defensePotential: 0,
                health: 0,
                healthPotential: 0,
                id: id,
                magic: 0,
                magicPotential: 0,
                name: "Missing Orb",
                quality: Quality.Legendary,
                statBonus: Stat.None,
                iconGraphicsUrl: "",
            };
    };

    return (
        <Card>
            <CardContent style={{
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right top",
                backgroundSize: "25%",
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
                </Grid>
                <Typography variant="body1" color="textSecondary" component="p">
                    Level: {equippedGear.level}
                </Typography>
                <Typography variant="body1" color="textSecondary" component="p">
                    Boosts: {equippedGear.boost}
                </Typography>
                <Typography variant="body1" color="textSecondary" component="p">
                    Reforge(hp,atk,def,mag)
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {equippedGear.healthReforge}, {equippedGear.attackReforge}, {equippedGear.defenseReforge}, {equippedGear.magicReforge}
                </Typography>
                <List dense={true}>
                    {equippedGear.socketedOrbs.map(orb =>
                        <EquippedOrbListItem key={orb.id} equippedOrb={orb} orb={getOrbStats(orb.id, equippedOrbStats)}/>
                    )}
                </List>
            </CardContent>
        </Card>
    );
};
