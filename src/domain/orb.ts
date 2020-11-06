import {Quality, toQuality} from './quality';
import {Stat, toStat} from './stat';

export interface Orb {
  id: number;
  name: string;
  quality: Quality;
  statBonus: Stat;
  attack: number;
  magic: number;
  defense: number;
  health: number;
  attackPotential: number;
  magicPotential: number;
  defensePotential: number;
  healthPotential: number;
  iconGraphicsUrl: string;
}

export interface ServerOrb {
  id: number;
  name: string;
  quality: string;
  statBonus: string;
  attack: number;
  magic: number;
  defense: number;
  health: number;
  attackPotential: number;
  magicPotential: number;
  defensePotential: number;
  healthPotential: number;
  iconGraphicsUrl: string;
}

export const serverOrbToOrb = (serverOrb: ServerOrb): Orb => ({
  ...serverOrb,
  quality: toQuality(serverOrb.quality),
  statBonus: toStat(serverOrb.statBonus)
});

export const getOrbStatUrl = (orbStat: Stat) => {
  return `/orb-stat/${orbStat}.png`;
};

export const getArtifactOrbStatUrl = (orbStat: Stat) => {
  return `/orb-stat/ARTIFACT_${orbStat}.png`;
};
