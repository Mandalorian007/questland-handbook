export interface Guild {
  server: string;
  guildId: number;
  name: string;
  description: string;
  level: number;
  currentMemberCount: number;
  maximumMemberCount: number;
  attackResearchLevel: number;
  defenseResearchLevel: number;
  healthResearchLevel: number;
  magicResearchLevel: number;
  guildMembers: GuildMember[];
}

export interface GuildMember {
  id: number;
  name: string;
  guildRank: string;
  level: number;
  heroPower: number;
}
