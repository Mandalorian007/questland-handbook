import { Orb } from '../domain/orb';
import { ReduxLoadOrbsAction, ReduxResetOrbsAction } from './orbActions';
import { ReduxActionTypes } from './rootReducer';
import { Reducer } from 'react';

export interface ReduxOrbState {
  orbs: Orb[];
}

const initialState: ReduxOrbState = {
  orbs: []
};

type OrbReducerActions = ReduxLoadOrbsAction | ReduxResetOrbsAction;

export const orbReducer: Reducer<ReduxOrbState, OrbReducerActions> = (
  state: ReduxOrbState = initialState,
  action: OrbReducerActions
) => {
  switch (action.type) {
    case ReduxActionTypes.LOAD_ORBS:
      return { ...state, orbs: action.data };
    case ReduxActionTypes.RESET_ORBS:
      return { ...state, orbs: [] };
    default:
      return state;
  }
};
