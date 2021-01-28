import {Card, CardContent, Grid, List, Typography} from '@material-ui/core';
import React from 'react';
import {Item} from '../../../domain/item';
import {getQualityColor, Quality} from "../../../domain/quality";
import {EquippedGear} from "../../../domain/hero";
import {Orb} from "../../../domain/orb";
import {getEmblemImgUrl} from "../../../domain/emblem";
import {getItemSlotUrl} from "../../../domain/ItemSlot";
import {EquippedOrbListItem} from "./EquippedOrbListItem";
import {getStatUrl, Stat} from "../../../domain/stat";
import {filterUndef} from "./HeroLookupPage";

export const EquippedGearCard: React.FC<{
    equippedGear: EquippedGear;
    item: Item
    equippedOrbStats: Orb[],
    allOrbs: Orb[],
    isLinked: boolean
}> = ({equippedGear, item, equippedOrbStats, allOrbs, isLinked}) => {

    const getLinkedImage = (confirmed: boolean) => {
        return <img
            src={(confirmed ? '/checkmark-button.png' : '/x-button.png')}
            alt={''}
            width={18}
            height={18}
        />
    };

    const getItemMaxReforge = (item: Item) => {
        const pointsPerLevel = Math.ceil(item.totalPotential / 2);
        switch (item.quality) {
            case Quality.Legendary:
                return pointsPerLevel * 99;
            case Quality.Artifact1:
                return pointsPerLevel * 119;
            case Quality.Artifact2:
                return pointsPerLevel * 139;
            case Quality.Artifact3:
                return pointsPerLevel * 159;
            case Quality.Artifact4:
                return pointsPerLevel * 179;
            case Quality.Artifact5:
                return pointsPerLevel * 199;
            default:
                return 0;
        }
    };

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

    const doesOrbLink = (id: number) => {
        const orbsThatLink = filterUndef([item.orbLink1, item.orbLink2]);
        return orbsThatLink.includes(convertOrbIdToBase(id) || -1);
    };

    const convertOrbIdToBase = (id: number | undefined) => {
        if (id) {
            const maybeOrb = allOrbs.find(orb => orb.id === id);
            if (maybeOrb && maybeOrb.quality === Quality.Artifact1) {
                return allOrbs.find(orb => orb.name === maybeOrb.name && orb.quality === Quality.Legendary)?.id;
            }
        }
        return id;
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
                    <img
                        src={getStatUrl(item.itemBonus)}
                        alt=""
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
                    Reforge (hp,atk,def,mag)
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {equippedGear.healthReforge}, {equippedGear.attackReforge}, {equippedGear.defenseReforge}, {equippedGear.magicReforge} ({equippedGear.healthReforge + equippedGear.attackReforge + equippedGear.defenseReforge + equippedGear.magicReforge}/{getItemMaxReforge(item)})
                </Typography>
                <Typography variant="body1" color="textSecondary" component="p">
                    Link Status: {getLinkedImage(isLinked)}
                </Typography>
                <List dense={true}>
                    {equippedGear.socketedOrbs.map(orb =>
                        <EquippedOrbListItem key={orb.id} equippedOrb={orb} orb={getOrbStats(orb.id, equippedOrbStats)}
                                             isLinked={doesOrbLink(orb.id)}/>
                    )}
                </List>
            </CardContent>
        </Card>
    );
};
