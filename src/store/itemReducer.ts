import { Item } from '../domain/item';
import { ReduxLoadItemsAction, ReduxResetItemsAction } from './itemActions';
import { ReduxActionTypes } from './rootReducer';
import { Reducer } from 'react';

export interface ReduxItemState {
  items: Item[];
}

const initialState: ReduxItemState = {
  items: []
};

type ItemReducerActions = ReduxLoadItemsAction | ReduxResetItemsAction;

export const itemReducer: Reducer<ReduxItemState, ItemReducerActions> = (
  state: ReduxItemState = initialState,
  action: ItemReducerActions
) => {
  switch (action.type) {
    case ReduxActionTypes.LOAD_ITEMS:
      return { ...state, items: action.data };
    case ReduxActionTypes.RESET_ITEMS:
      return { ...state, items: [] };
    default:
      return state;
  }
};
