export interface Hero {
  id: number;
  server: string;
  guild: string;
  name: string;
  level: number;
  daysPlayed: number;
  vip: number;
  fame: number;
  language: string;
  heroPower: number;
  health: number;
  attack: number;
  defense: number;
  magic: number;
  critChance: number;
  critDmgMuti: number;
  dodgeChance: number;
  heroPowerRank: number;
  heroPvpRank: number;
  collection1Slots: CollectionSlots;
  collection2Slots: CollectionSlots;
  equippedGear: EquippedGear[];
  collections1: EquippedGear[];
  collections2: EquippedGear[];
  battleEventMulti: number;
  row1Bonus: string;
  row2Bonus: string;
  row3Bonus: string;
  row4Bonus: string;
}

export interface CollectionSlots {
  unlockedSlots: number;
  slotUpgradePercentages: number[];
}

export interface EquippedGear {
  id: number;
  level: number;
  boost: number;
  itemSlot: string;
  collectionPosition: number;
  healthReforge: number;
  attackReforge: number;
  defenseReforge: number;
  magicReforge: number;
  socketedOrbs: EquippedOrb[];
}

export interface EquippedOrb {
  id: number;
  level: number;
  enhance: number;
}
