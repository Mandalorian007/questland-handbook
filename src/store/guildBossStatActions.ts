import { ReduxActionTypes } from './rootReducer';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { BossStats, serverBossStatsToBossStats } from '../domain/bossStats';
import { ReduxGuildBossStatState } from './guildBossStatReducer';

export interface ReduxLoadGuildBossStatsAction {
  type: ReduxActionTypes.LOAD_GUILD_BOSS_STATS;
  data: BossStats[];
}

export interface ReduxResetGuildBossStatsAction {
  type: ReduxActionTypes.RESET_GUILD_BOSS_STATS;
}

export const loadGuildBossStats = (): ThunkAction<
  Promise<ReduxLoadGuildBossStatsAction>,
  ReduxGuildBossStatState,
  undefined,
  ReduxLoadGuildBossStatsAction
> => {
  return async (
    dispatch: ThunkDispatch<
      ReduxGuildBossStatState,
      undefined,
      ReduxLoadGuildBossStatsAction
    >
  ) => {
    let url = 'https://questland-public-api.cfapps.io/guildboss/stats';
    const res = await fetch(url);
    const serverGuildBossStats: Record<number, BossStats> = await res.json();

    return dispatch({
      type: ReduxActionTypes.LOAD_GUILD_BOSS_STATS as ReduxActionTypes.LOAD_GUILD_BOSS_STATS,
      data: Object.entries(serverGuildBossStats).map((entry, index) =>
        serverBossStatsToBossStats((entry[0] as unknown) as number, entry[1])
      )
    });
  };
};

export const resetGuildBossStats = (): ReduxResetGuildBossStatsAction => ({
  type: ReduxActionTypes.RESET_GUILD_BOSS_STATS
});
