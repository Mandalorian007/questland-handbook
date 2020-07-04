import {
  ReduxLoadHardBossStatsAction,
  ReduxResetHardBossStatsAction
} from './hardBossStatActions';
import { ReduxActionTypes } from './rootReducer';
import { Reducer } from 'react';
import { BossStats } from '../domain/bossStats';

export interface ReduxHardBossStatState {
  hardBossStats: BossStats[];
}

const initialState: ReduxHardBossStatState = {
  hardBossStats: []
};

type HardBossStatReducerActions =
  | ReduxLoadHardBossStatsAction
  | ReduxResetHardBossStatsAction;

export const hardBossStatsReducer: Reducer<
  ReduxHardBossStatState,
  HardBossStatReducerActions
> = (
  state: ReduxHardBossStatState = initialState,
  action: HardBossStatReducerActions
) => {
  switch (action.type) {
    case ReduxActionTypes.LOAD_HARD_BOSS_STATS:
      return { ...state, hardBossStats: action.data };
    case ReduxActionTypes.RESET_HARD_BOSS_STATS:
      return { ...state, hardBossStats: [] };
    default:
      return state;
  }
};
