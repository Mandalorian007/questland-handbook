export interface Build {
  name: string;
  description: string;
  weapons: string;
  mainHandAlternatives: string;
  offHandAlternatives: string;
  talent1: string;
  talent2: string;
  talent3: string;
  links: string;
  videoGuide: string;
  image: string;
}

export enum BuildOption {
  redBattleEvent = 'RED_BATTLE_EVENT',
  blueBattleEvent = 'BLUE_BATTLE_EVENT',
  redGuildStriker = 'RED_GUILD_STRIKER',
  blueGuildStriker = 'BLUE_GUILD_STRIKER',
  hecatombus = 'HECATOMBUS',
  turtle = 'TURTLE',
  thePax = 'THE_PAX',
  shinobi = 'SHINOBI',
  ratchetRush = 'RATCHET_RUSH',
  boomingTurtle = 'BOOMING_TURTLE',
  wardingFang = 'WARDING_FANG',
  fireBlaster = 'FIRE_BLASTER',
  icyCannon = 'ICY_CANNON',
  farmer = 'THE_FARMER'
}
