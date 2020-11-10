export enum Stat {
  None = 'NONE',
  Attack = 'ATTACK',
  Magic = 'MAGIC',
  Defense = 'DEFENSE',
  Health = 'HEALTH',
  AttackMagic = 'ATTACK_MAGIC'
}

export const isStat = (maybeStat: string): maybeStat is Stat => {
  return Object.values(Stat as object).includes(maybeStat);
};

export const toStat = (expectedStat: string): Stat => {
  if (!isStat(expectedStat)) {
    throw new Error(`Unexpected stat: ${expectedStat}`);
  }
  return expectedStat;
};

export const getStatUrl = (stat: Stat) => {
  return `/stat/${stat.toString().toLowerCase()}_icon_colored.png`;
};