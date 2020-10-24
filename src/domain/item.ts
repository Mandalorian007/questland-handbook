import { Emblem, toEmblem } from './emblem';
import { ItemSlot, toItemSlot } from './ItemSlot';
import { Quality, toQuality } from './quality';
import { Stat, toStat } from './stat';

export interface Item {
  id: number;
  name: string;
  quality: Quality;
  itemSlot: ItemSlot;
  totalPotential: number;
  attack: number;
  magic: number;
  defense: number;
  health: number;
  attackPotential: number;
  magicPotential: number;
  defensePotential: number;
  healthPotential: number;
  reforgePointsPerLevel: number;
  emblem: Emblem;
  itemBonus: Stat;
  itemLink1?: number;
  itemLink2?: number;
  itemLink3?: number;
  orbBonus: Stat;
  orbLink1?: number;
  orbLink2?: number;
  passive1Name?: string;
  passive1Description?: string;
  passive2Name?: string;
  passive2Description?: string;
}

export interface ServerItem {
  id: number;
  name: string;
  quality: string;
  itemSlot: string;
  totalPotential: number;
  attack: number;
  magic: number;
  defense: number;
  health: number;
  attackPotential: number;
  magicPotential: number;
  defensePotential: number;
  healthPotential: number;
  reforgePointsPerLevel: number;
  emblem: string;
  itemBonus: string;
  itemLink1?: number;
  itemLink2?: number;
  itemLink3?: number;
  orbBonus: string;
  orbLink1?: number;
  orbLink2?: number;
  passive1Name?: string;
  passive1Description?: string;
  passive2Name?: string;
  passive2Description?: string;
}

export const serverItemToItem = (serverItem: ServerItem): Item => ({
  ...serverItem,
  quality: toQuality(serverItem.quality),
  itemSlot: toItemSlot(serverItem.itemSlot),
  emblem: toEmblem(serverItem.emblem),
  itemBonus: toStat(serverItem.itemBonus),
  orbBonus: toStat(serverItem.orbBonus)
});
