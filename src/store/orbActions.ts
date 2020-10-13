import { ReduxActionTypes } from './rootReducer';
import { Orb, ServerOrb, serverOrbToOrb } from '../domain/orb';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { ReduxOrbState } from './orbReducer';
import {qlApiUrl} from "../config";

export interface ReduxLoadOrbsAction {
  type: ReduxActionTypes.LOAD_ORBS;
  data: Orb[];
}

export interface ReduxResetOrbsAction {
  type: ReduxActionTypes.RESET_ORBS;
}

export const loadOrbs = (): ThunkAction<
  Promise<ReduxLoadOrbsAction>,
  ReduxOrbState,
  undefined,
  ReduxLoadOrbsAction
> => {
  return async (
    dispatch: ThunkDispatch<ReduxOrbState, undefined, ReduxLoadOrbsAction>
  ) => {
    let url = qlApiUrl + 'orbs?filterArtifacts=true';
    const res = await fetch(url);
    const orbs: ServerOrb[] = await res.json();

    return dispatch({
      type: ReduxActionTypes.LOAD_ORBS as ReduxActionTypes.LOAD_ORBS,
      data: orbs.map(serverOrbToOrb)
    });
  };
};

export const resetOrbs = (): ReduxResetOrbsAction => ({
  type: ReduxActionTypes.RESET_ORBS
});
