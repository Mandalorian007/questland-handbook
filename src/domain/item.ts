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
  emblem: Emblem;
  itemBonus: Stat;
  itemLinks: number[];
  orbBonus: Stat;
  orbLinks: number[];
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
  emblem: string;
  itemBonus: string;
  itemLinks: number[];
  orbBonus: string;
  orbLinks: number[];
}

export const serverItemToItem = (serverItem: ServerItem): Item => ({
  ...serverItem,
  quality: toQuality(serverItem.quality),
  itemSlot: toItemSlot(serverItem.itemSlot),
  emblem: toEmblem(serverItem.emblem),
  itemBonus: toStat(serverItem.itemBonus),
  orbBonus: toStat(serverItem.orbBonus)
});
