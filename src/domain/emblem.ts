export enum Emblem {
  Sacred = 'SACRED',
  Necro = 'NECRO',
  Beast = 'BEAST',
  Nature = 'NATURE',
  Dragon = 'DRAGON',
  Shadow = 'SHADOW',
  Myth = 'MYTH',
  Ice = 'ICE',
  Venom = 'VENOM',
  Death = 'DEATH',
  Lava = 'LAVA',
  Hex = 'HEX',
  Noble = 'NOBLE',
  Thunder = 'THUNDER',
  Abyss = 'ABYSS',
  Wind = 'WIND',
  None = 'NONE'
}

export const isEmblem = (maybeEmblem: string): maybeEmblem is Emblem => {
  return Object.values(Emblem as object).includes(maybeEmblem);
};

export const toEmblem = (expectedEmblem: string): Emblem => {
  if (!isEmblem(expectedEmblem)) {
    throw new Error(`Unexpected emblem: ${expectedEmblem}`);
  }
  return expectedEmblem;
};
