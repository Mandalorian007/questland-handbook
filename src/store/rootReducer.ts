import { combineReducers, Reducer } from 'redux';
import { itemReducer, ReduxItemState } from './itemReducer';
import { orbReducer, ReduxOrbState } from './orbReducer';
import {
  battleLocationReducer,
  ReduxBattleLocationState
} from './battleLocationReducer';
import {
  stageScoreReducer,
  ReduxStageScoreState
} from './stageScoreReducer';
import {ReduxYouTubeFeedState, youTubeFeedReducer} from "./YouTubeFeedReducer";
import {ReduxProfileState, profileReducer} from "./profileReducer";

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
  REST_BATTLE_LOCATIONS = 'REST_BATTLE_LOCATIONS',
  LOAD_STAGE_SCORES = 'LOAD_STAGE_SCORES',
  RESET_STAGE_SCORES = 'RESET_STAGE_SCORES',
  LOAD_VIDEOS = 'LOAD_VIDEOS',
  RESET_VIDEOS = 'RESET_VIDEOS',
  LOAD_PROFILE = 'LOAD_PROFILE',
  UPDATE_PROFILE = 'UPDATE_PROFILE',
  UNLOAD_PROFILE = 'UNLOAD_PROFILE',
  DELETE_PROFILE = 'DELETE_PROFILE'
}

export const rootReducer: Reducer = combineReducers({
  itemState: itemReducer,
  orbState: orbReducer,
  battleLocationState: battleLocationReducer,
  stageScoreState: stageScoreReducer,
  youTubeFeedState: youTubeFeedReducer,
  profileState: profileReducer
});

export type AppState = {
  itemState: ReduxItemState;
  orbState: ReduxOrbState;
  battleLocationState: ReduxBattleLocationState;
  stageScoreState: ReduxStageScoreState;
  youTubeFeedState: ReduxYouTubeFeedState;
  profileState: ReduxProfileState;
};
