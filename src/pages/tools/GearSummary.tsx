import {
    Accordion,
    AccordionDetails,
    AccordionSummary, Card, CardContent, Divider,
    Grid,
    List,
    ListItem,
    Paper,
    Typography
} from '@material-ui/core';
import React from 'react';
import {Item} from '../../domain/item';
import {getItemSlotUrl, ItemSlot} from "../../domain/ItemSlot";
import {Stat} from "../../domain/stat";
import {Emblem, getEmblemImgUrl} from "../../domain/emblem";
import {GearTemplate, notUndefined} from "./GearPlannerPage";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export const GearSummary: React.FC<{
    gearTemplate: GearTemplate
}> = ({gearTemplate}) => {
    const getItemDisplay = (item?: Item) => {
        return item ?
            <span>
                 {getItemImageDetails(item?.emblem, item?.itemSlot, item?.itemBonus)}
                {`\xa0\xa0${item?.name}\xa0\xa0`}
                {getLinkConfirmedImage(isItemLinked(item, gearTemplate))}
            </span>
            : <div/>
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

    const getLinkConfirmedImage = (confirmed: boolean) => {
        return <img
            src={(confirmed ? '/checkmark-button.png' : '/x-button.png')}
            alt={''}
            width={20}
            height={20}
        />
    };

    const isItemLinked = (item: Item | undefined, gearTemplate: GearTemplate) => {
        const equippedItemIds = getEquippedItems(gearTemplate).map(item => item?.id)
            .concat(gearTemplate.healthCollections.map(item => item?.id))
            .concat(gearTemplate.attackCollections.map(item => item?.id))
            .concat(gearTemplate.defenseCollections.map(item => item?.id))
            .concat(gearTemplate.magicCollections.map(item => item?.id))
            .filter(notUndefined);

        const links = [item?.itemLink1, item?.itemLink2, item?.itemLink3].filter(notUndefined);

        // count completed links
        let count = 0;
        for (let i = 0; i < links.length; i++) {
            if (equippedItemIds.includes(links[i])) {
                count++;
            }
        }
        return count >= 2;
    };

    const getGearTemplateStats = (gearTemplate: GearTemplate) => {
        const equippedItems = getEquippedItems(gearTemplate);

        return [
            equippedItems.concat(gearTemplate.healthCollections).filter(notUndefined).map(item => getStatValue(item.health, item.itemBonus, Stat.Health, isItemLinked(item, gearTemplate))).reduce((total, stat) => total + stat, 0),
            equippedItems.concat(gearTemplate.attackCollections).filter(notUndefined).map(item => getStatValue(item.attack, item.itemBonus, Stat.Attack, isItemLinked(item, gearTemplate))).reduce((total, stat) => total + stat, 0),
            equippedItems.concat(gearTemplate.defenseCollections).filter(notUndefined).map(item => getStatValue(item.defense, item.itemBonus, Stat.Defense, isItemLinked(item, gearTemplate))).reduce((total, stat) => total + stat, 0),
            equippedItems.concat(gearTemplate.magicCollections).filter(notUndefined).map(item => getStatValue(item.magic, item.itemBonus, Stat.Magic, isItemLinked(item, gearTemplate))).reduce((total, stat) => total + stat, 0),
        ]
    };

    const getStatValue = (stat: number, itemStat: Stat, requiredStat: Stat, isLinked: boolean) => {
        const statRequired: boolean = itemStat === requiredStat;
        return isLinked && statRequired ? stat * 1.3 : stat;
    };

    const getEquippedItems = (gearTemplate: GearTemplate) => {
        return [
            gearTemplate.helm,
            gearTemplate.chest,
            gearTemplate.gloves,
            gearTemplate.boots,
            gearTemplate.necklace,
            gearTemplate.ring,
            gearTemplate.talisman,
        ];
    };

    return (
        <>
            {gearTemplateStatCard(getGearTemplateStats(gearTemplate))}
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Item Summary</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography component="p">
                                Equipment
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <List dense={true}>
                                {[gearTemplate.helm, gearTemplate.chest, gearTemplate.gloves, gearTemplate.boots, gearTemplate.necklace, gearTemplate.ring, gearTemplate.talisman]
                                    .filter(notUndefined).map(item => <ListItem
                                        key={item.id}>{getItemDisplay(item)}</ListItem>)}
                            </List>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography component="p">
                                Attack Collections
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <List dense={true}>
                                {gearTemplate.attackCollections.filter(notUndefined).map(item =>
                                    <ListItem key={item.id}>{getItemDisplay(item)}</ListItem>)}
                            </List>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography component="p">
                                Magic Collections
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <List dense={true}>
                                {gearTemplate.magicCollections.filter(notUndefined).map(item =>
                                    <ListItem key={item.id}>{getItemDisplay(item)}</ListItem>)}
                            </List>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography component="p">
                                Defense Collections
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <List dense={true}>
                                {gearTemplate.defenseCollections.filter(notUndefined).map(item =>
                                    <ListItem key={item.id}>{getItemDisplay(item)}</ListItem>)}
                            </List>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography component="p">
                                Health Collections
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <List dense={true}>
                                {gearTemplate.healthCollections.filter(notUndefined).map(item =>
                                    <ListItem key={item.id}>{getItemDisplay(item)}</ListItem>)}
                            </List>
                        </Grid>
                    </Grid>
                </AccordionDetails>
            </Accordion>
        </>
    );
};

const gearTemplateStatCard = (stats: number[]) => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h6" color="textSecondary" component="h5">
                    Build Stats
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Stats are calculated using base legendary gear stats with item link bonuses. Gear level, reforge,
                    orbs, and collection bonuses are ignored. These stat values are best used in comparison to other
                    builds.
                </Typography>
                <Divider/>
                <Typography variant="body1" color="textSecondary" component="p">
                    Total: {stats.reduce((total, stat) => total + stat, 0)}
                </Typography>
                <Typography variant="body1" color="textSecondary" component="p">
                    Health: {stats[0]}
                </Typography>
                <Typography variant="body1" color="textSecondary" component="p">
                    Attack: {stats[1]}
                </Typography>
                <Typography variant="body1" color="textSecondary" component="p">
                    Defense: {stats[2]}
                </Typography>
                <Typography variant="body1" color="textSecondary" component="p">
                    Magic: {stats[3]}
                </Typography>
            </CardContent>
        </Card>
    )
};