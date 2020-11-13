import {Item} from "./item";

export interface GearTemplate {
    id?: string,
    name?: string,
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

export interface ServerGearTemplate {
    id?: string,
    name?: string,
    helm?: number,
    chest?: number,
    gloves?: number,
    boots?: number,
    necklace?: number,
    ring?: number,
    talisman?: number,
    healthCollections: (number | undefined)[],
    attackCollections: (number | undefined)[],
    defenseCollections: (number | undefined)[],
    magicCollections: (number | undefined)[],
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

export const convertToServerGearTemplate = (gearTemplate: GearTemplate, name: string): ServerGearTemplate => {
    return {
        name: name,
        helm: gearTemplate.helm?.id,
        chest: gearTemplate.chest?.id,
        gloves: gearTemplate.gloves?.id,
        boots: gearTemplate.boots?.id,
        necklace: gearTemplate.necklace?.id,
        ring: gearTemplate.ring?.id,
        talisman: gearTemplate.talisman?.id,
        healthCollections: convertCollectionForApi(gearTemplate.healthCollections),
        attackCollections: convertCollectionForApi(gearTemplate.attackCollections),
        defenseCollections: convertCollectionForApi(gearTemplate.defenseCollections),
        magicCollections: convertCollectionForApi(gearTemplate.magicCollections),
    }
};

export const convertToGearTemplate = (serverGearTemplate: ServerGearTemplate, items: Item[]): GearTemplate => {
    return {
        name: serverGearTemplate.name,
        id: serverGearTemplate.id,
        helm: findItemOrUndefined(serverGearTemplate.helm, items),
        chest: findItemOrUndefined(serverGearTemplate.chest, items),
        gloves: findItemOrUndefined(serverGearTemplate.gloves, items),
        boots: findItemOrUndefined(serverGearTemplate.boots, items),
        necklace: findItemOrUndefined(serverGearTemplate.necklace, items),
        ring: findItemOrUndefined(serverGearTemplate.ring, items),
        talisman: findItemOrUndefined(serverGearTemplate.talisman, items),
        healthCollections: serverGearTemplate.healthCollections.map(item => findItemOrUndefined(item, items)),
        attackCollections: serverGearTemplate.attackCollections.map(item => findItemOrUndefined(item, items)),
        defenseCollections: serverGearTemplate.defenseCollections.map(item => findItemOrUndefined(item, items)),
        magicCollections: serverGearTemplate.magicCollections.map(item => findItemOrUndefined(item, items)),
    };
};

const findItemOrUndefined = (id: number | undefined, items: Item[]) => {
    if (id) {
        return items.find(item => item.id === id);
    }
    return undefined;
};

const convertCollectionForApi = (collection: (Item | undefined)[]) => {
    let tempCollection: (number | undefined)[] = [];
    if (collection) {
        tempCollection = collection.map(item => item?.id);
    }
    while (tempCollection.length < 5) {
        tempCollection = tempCollection.concat(undefined);
    }
    return tempCollection;
};