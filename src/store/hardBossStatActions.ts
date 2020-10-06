import { ReduxActionTypes } from './rootReducer';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { BossStats, serverBossStatsToBossStats } from '../domain/bossStats';
import { ReduxHardBossStatState } from './hardBossStatReducer';

export interface ReduxLoadHardBossStatsAction {
  type: ReduxActionTypes.LOAD_HARD_BOSS_STATS;
  data: BossStats[];
}

export interface ReduxResetHardBossStatsAction {
  type: ReduxActionTypes.RESET_HARD_BOSS_STATS;
}

export const loadHardBossStats = (): ThunkAction<
  Promise<ReduxLoadHardBossStatsAction>,
  ReduxHardBossStatState,
  undefined,
  ReduxLoadHardBossStatsAction
> => {
  return async (
    dispatch: ThunkDispatch<
      ReduxHardBossStatState,
      undefined,
      ReduxLoadHardBossStatsAction
    >
  ) => {
    let url = 'https://questland-public-api-dot-questland-tools.uc.r.appspot.com/hardboss/stats';
    const res = await fetch(url);
    const serverHardBossStats: Record<number, BossStats> = await res.json();

    return dispatch({
      type: ReduxActionTypes.LOAD_HARD_BOSS_STATS as ReduxActionTypes.LOAD_HARD_BOSS_STATS,
      data: Object.entries(serverHardBossStats).map((entry, index) =>
        serverBossStatsToBossStats((entry[0] as unknown) as number, entry[1])
      )
    });
  };
};

export const resetHardBossStats = (): ReduxResetHardBossStatsAction => ({
  type: ReduxActionTypes.RESET_HARD_BOSS_STATS
});
