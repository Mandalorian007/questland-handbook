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
      return 'Bisque';
    case Emblem.Necro:
      return 'aquamarine';
    case Emblem.Beast:
      return 'brown';
    case Emblem.Nature:
      return 'green';
    case Emblem.Dragon:
      return 'red';
    case Emblem.Shadow:
      return 'grey';
    case Emblem.Myth:
      return 'DarkOrchid';
    case Emblem.Ice:
      return 'aqua';
    case Emblem.Venom:
      return 'purple';
    case Emblem.Death:
      return 'black';
    case Emblem.Lava:
      return 'crimson';
    case Emblem.Hex:
      return 'GreenYellow';
    case Emblem.Noble:
      return 'lightblue';
    case Emblem.Thunder:
      return 'yellow';
    case Emblem.Abyss:
      return 'darkturquoise';
    case Emblem.Wind:
      return 'lightblue';
  }
};