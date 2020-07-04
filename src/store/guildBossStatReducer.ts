import {
  ReduxLoadGuildBossStatsAction,
  ReduxResetGuildBossStatsAction
} from './guildBossStatActions';
import { ReduxActionTypes } from './rootReducer';
import { Reducer } from 'react';
import { BossStats } from '../domain/bossStats';

export interface ReduxGuildBossStatState {
  guildBossStats: BossStats[];
}

const initialState: ReduxGuildBossStatState = {
  guildBossStats: []
};

type GuildBossStatReducerActions =
  | ReduxLoadGuildBossStatsAction
  | ReduxResetGuildBossStatsAction;

export const guildBossStatsReducer: Reducer<
  ReduxGuildBossStatState,
  GuildBossStatReducerActions
> = (
  state: ReduxGuildBossStatState = initialState,
  action: GuildBossStatReducerActions
) => {
  switch (action.type) {
    case ReduxActionTypes.LOAD_GUILD_BOSS_STATS:
      return { ...state, guildBossStats: action.data };
    case ReduxActionTypes.RESET_GUILD_BOSS_STATS:
      return { ...state, guildBossStats: [] };
    default:
      return state;
  }
};
