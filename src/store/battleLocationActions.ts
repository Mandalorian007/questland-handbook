import { ReduxActionTypes } from './rootReducer';
import { BattleLocation } from '../domain/battleLocation';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import {ReduxBattleLocationState} from "./battleLocationReducer";

export interface ReduxLoadBattleLocationsAction {
  type: ReduxActionTypes.LOAD_BATTLE_LOCATIONS;
  data: BattleLocation[];
}

export interface ReduxResetBattleLocationsAction {
  type: ReduxActionTypes.REST_BATTLE_LOCATIONS;
}

export const loadBattleLocations = (): ThunkAction<
  Promise<ReduxLoadBattleLocationsAction>,
  ReduxBattleLocationState,
  undefined,
  ReduxLoadBattleLocationsAction
> => {
  return async (
    dispatch: ThunkDispatch<ReduxBattleLocationState, undefined, ReduxLoadBattleLocationsAction>
  ) => {
    let url =
      'https://questland-public-api.cfapps.io/battle-locations';
    const res = await fetch(url);
    const battleLocations: BattleLocation[] = await res.json();

    return dispatch({
      type: ReduxActionTypes.LOAD_BATTLE_LOCATIONS as ReduxActionTypes.LOAD_BATTLE_LOCATIONS,
      data: battleLocations
    });
  };
};

export const resetBattleLocations = (): ReduxResetBattleLocationsAction => ({
  type: ReduxActionTypes.REST_BATTLE_LOCATIONS
});
