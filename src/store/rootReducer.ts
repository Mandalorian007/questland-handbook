import { combineReducers, Reducer } from 'redux';
import { itemReducer, ReduxItemState } from './itemReducer';
import { orbReducer, ReduxOrbState } from './orbReducer';
import {battleLocationReducer, ReduxBattleLocationState} from "./battleLocationReducer";

export enum ReduxActionTypes {
  LOAD_ITEMS = 'LOAD_ITEMS',
  RESET_ITEMS = 'RESET_ITEMS',
  LOAD_ORBS = 'LOAD_ORBS',
  RESET_ORBS = 'RESET_ORBS',
  LOAD_BATTLE_LOCATIONS = 'LOAD_BATTLE_LOCATIONS',
  REST_BATTLE_LOCATIONS = 'REST_BATTLE_LOCATIONS'
}

export const rootReducer: Reducer = combineReducers({
  itemState: itemReducer,
  orbState: orbReducer,
  battleLocationState: battleLocationReducer
});

export type AppState = {
  itemState: ReduxItemState;
  orbState: ReduxOrbState;
  battleLocationState: ReduxBattleLocationState;
};
