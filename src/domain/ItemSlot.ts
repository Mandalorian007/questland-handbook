export enum ItemSlot {
  Helm = 'HELM',
  Chest = 'CHEST',
  Gloves = 'GLOVES',
  Boots = 'BOOTS',
  Necklace = 'NECKLACE',
  Ring = 'RING',
  Talisman = 'TALISMAN',
  MainHand = 'MAIN_HAND',
  OffHand = 'OFF_HAND',
  Unknown = 'UNKNOWN'
}

export const isItemSlot = (
  maybeItemSlot: string
): maybeItemSlot is ItemSlot => {
  return Object.values(ItemSlot as object).includes(maybeItemSlot);
};

export const toItemSlot = (expectedItemSlot: string): ItemSlot => {
  if (!isItemSlot(expectedItemSlot)) {
    throw new Error(`Unexpected itemSlot: ${expectedItemSlot}`);
  }
  return expectedItemSlot;
};

export const getItemSlots = () => {
  return [
    ItemSlot.Helm,
    ItemSlot.Chest,
    ItemSlot.Gloves,
    ItemSlot.Boots,
    ItemSlot.Necklace,
    ItemSlot.Ring,
    ItemSlot.Talisman,
    ItemSlot.MainHand,
    ItemSlot.OffHand
  ];
};

export const getItemSlotUrl = (slot: ItemSlot) => {
  return `/slot/${slot}.png`;
};