import { combineReducers, Reducer } from 'redux';
import { itemReducer, ReduxItemState } from './itemReducer';
import { orbReducer, ReduxOrbState } from './orbReducer';
import {
  battleLocationReducer,
  ReduxBattleLocationState
} from './battleLocationReducer';
import {
  hardBossStatsReducer,
  ReduxHardBossStatState
} from './hardBossStatReducer';
import {
  guildBossStatsReducer,
  ReduxGuildBossStatState
} from './guildBossStatReducer';

export enum ReduxActionTypes {
  LOAD_ITEMS = 'LOAD_ITEMS',
  RESET_ITEMS = 'RESET_ITEMS',
  LOAD_ORBS = 'LOAD_ORBS',
  RESET_ORBS = 'RESET_ORBS',
  LOAD_HARD_BOSS_STATS = 'LOAD_HARD_BOSS_STATS',
  RESET_HARD_BOSS_STATS = 'RESET_HARD_BOSS_STATS',
  LOAD_GUILD_BOSS_STATS = 'LOAD_GUILD_BOSS_STATS',
  RESET_GUILD_BOSS_STATS = 'RESET_GUILD_BOSS_STATS',
  LOAD_BATTLE_LOCATIONS = 'LOAD_BATTLE_LOCATIONS',
  REST_BATTLE_LOCATIONS = 'REST_BATTLE_LOCATIONS'
}

export const rootReducer: Reducer = combineReducers({
  itemState: itemReducer,
  orbState: orbReducer,
  hardBossStatsState: hardBossStatsReducer,
  guildBossStatsState: guildBossStatsReducer,
  battleLocationState: battleLocationReducer
});

export type AppState = {
  itemState: ReduxItemState;
  orbState: ReduxOrbState;
  hardBossStatsState: ReduxHardBossStatState;
  guildBossStatsState: ReduxGuildBossStatState;
  battleLocationState: ReduxBattleLocationState;
};
