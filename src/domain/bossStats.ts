export interface BossStats {
  level: number;
  health: number;
  attack: number;
  defense: number;
  magic: number;
}

export interface ServerBossStats {
  health: number;
  attack: number;
  defense: number;
  magic: number;
}

export const serverBossStatsToBossStats = (
  level: number,
  serverBossStats: ServerBossStats
): BossStats => ({
  ...serverBossStats,
  level: level
});
