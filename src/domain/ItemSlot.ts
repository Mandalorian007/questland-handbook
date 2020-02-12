export enum ItemSlot {
  Helm = 'HELM',
  Chest = 'CHEST',
  Gloves = 'GLOVES',
  Boots = 'BOOTS',
  Necklace = 'NECKLACE',
  Ring = 'RING',
  Talisman = 'TALISMAN',
  MainHand = 'MAIN_HAND',
  OffHand = 'OFF_HAND'
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
