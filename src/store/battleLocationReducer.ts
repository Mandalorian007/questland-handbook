import { BattleLocation } from '../domain/battleLocation';
import { ReduxLoadBattleLocationsAction, ReduxResetBattleLocationsAction } from './battleLocationActions';
import { ReduxActionTypes } from './rootReducer';
import { Reducer } from 'react';

export interface ReduxBattleLocationState {
  battleLocations: BattleLocation[];
}

const initialState: ReduxBattleLocationState = {
  battleLocations: []
};

type BattleLocationReducerActions = ReduxLoadBattleLocationsAction | ReduxResetBattleLocationsAction;

export const battleLocationReducer: Reducer<ReduxBattleLocationState, BattleLocationReducerActions> = (
  state: ReduxBattleLocationState = initialState,
  action: BattleLocationReducerActions
) => {
  switch (action.type) {
    case ReduxActionTypes.LOAD_BATTLE_LOCATIONS:
      return { ...state, battleLocations: action.data };
    case ReduxActionTypes.REST_BATTLE_LOCATIONS:
      return { ...state, battleLocations: [] };
    default:
      return state;
  }
};
