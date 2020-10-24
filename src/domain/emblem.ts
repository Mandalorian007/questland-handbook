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

export const getEmblems = () => {
  return [
    Emblem.Sacred,
    Emblem.Necro,
    Emblem.Beast,
    Emblem.Nature,
    Emblem.Dragon,
    Emblem.Shadow,
    Emblem.Myth,
    Emblem.Ice,
    Emblem.Venom,
    Emblem.Death,
    Emblem.Lava,
    Emblem.Hex,
    Emblem.Noble,
    Emblem.Thunder,
    Emblem.Abyss,
    Emblem.Wind
  ];
};

export const getEmblemImgUrl = (emblem: Emblem) => {
  return `/emblems/${emblem}.png`;
};


export const getEmblemColor = (emblem: Emblem) => {
  switch (emblem) {
    case Emblem.Sacred:
    case Emblem.Necro:
    case Emblem.Beast:
    case Emblem.Nature:
    case Emblem.Dragon:
    case Emblem.Shadow:
    case Emblem.Myth:
    case Emblem.Ice:
    case Emblem.Venom:
    case Emblem.Death:
    case Emblem.Lava:
    case Emblem.Hex:
    case Emblem.Noble:
    case Emblem.Thunder:
    case Emblem.Abyss:
    case Emblem.Wind:
      return 'green';
  }
};