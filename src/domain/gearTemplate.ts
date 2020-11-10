import {Item} from "./item";

export interface GearTemplate {
    helm?: Item,
    chest?: Item,
    gloves?: Item,
    boots?: Item,
    necklace?: Item,
    ring?: Item,
    talisman?: Item,
    healthCollections: (Item | undefined)[],
    attackCollections: (Item | undefined)[],
    defenseCollections: (Item | undefined)[],
    magicCollections: (Item | undefined)[],
}

export const notUndefined = <T>(x: T | undefined): x is T => {
    return x !== undefined;
};

export const getEquippedItems = (gearTemplate: GearTemplate): Item[] => {
    return [
        gearTemplate.helm,
        gearTemplate.chest,
        gearTemplate.gloves,
        gearTemplate.boots,
        gearTemplate.necklace,
        gearTemplate.ring,
        gearTemplate.talisman,
    ].concat(gearTemplate.healthCollections)
        .concat(gearTemplate.attackCollections)
        .concat(gearTemplate.defenseCollections)
        .concat(gearTemplate.magicCollections)
        .filter(notUndefined);
};


export const getEquippedItemIds = (gearTemplate: GearTemplate): number[] => {
    return getEquippedItems(gearTemplate).map(item => item.id);
};