import { combineReducers, Reducer } from 'redux';
import { itemReducer, ReduxItemState } from './itemReducer';
import { orbReducer, ReduxOrbState } from './orbReducer';

export enum ReduxActionTypes {
  LOAD_ITEMS = 'LOAD_ITEMS',
  RESET_ITEMS = 'RESET_ITEMS',
  LOAD_ORBS = 'LOAD_ORBS',
  RESET_ORBS = 'RESET_ORBS'
}

export const rootReducer: Reducer = combineReducers({
  itemState: itemReducer,
  orbState: orbReducer
});

export type AppState = {
  itemState: ReduxItemState;
  orbState: ReduxOrbState;
};
