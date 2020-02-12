import { combineReducers, Reducer } from 'redux';
import { itemReducer, ReduxItemState } from './itemReducer';

export enum ReduxActionTypes {
  LOAD_ITEMS = 'LOAD_ITEMS',
  RESET_ITEMS = 'RESET_ITEMS'
}

export const rootReducer: Reducer = combineReducers({
  itemState: itemReducer
});

export type AppState = {
  itemState: ReduxItemState;
};
