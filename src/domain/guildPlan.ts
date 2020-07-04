export interface GuildPlan {
  guildId: string;
  name: string;
  heroPlans: HeroPlan[];
}

export interface HeroPlan {
  id: number;
  name: string;
  heroPower: number;
  health: number;
  attack: number;
  defense: number;
  magic: number;
  battleEventMulti: number;
  row1Bonus: string;
  row2Bonus: string;
  row3Bonus: string;
  row4Bonus: string;
}
