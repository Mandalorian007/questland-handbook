import { ReduxActionTypes } from './rootReducer';
import { serverStageScoreToStageScores, ServerStageScore, StageScore } from '../domain/stageScore';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import {ReduxStageScoreState} from "./stageScoreReducer";
import { qlApiUrl } from "../config";

export interface ReduxLoadStageScoresAction {
  type: ReduxActionTypes.LOAD_STAGE_SCORES;
  data: StageScore[];
}
  
export interface ReduxResetStageScoresAction {
  type: ReduxActionTypes.REST_STAGE_SCORES;
}

export const loadStageScores = (): ThunkAction<
  Promise<ReduxLoadStageScoresAction>,
  ReduxStageScoreState,
  undefined,
  ReduxLoadStageScoresAction
> => {
  return async (
    dispatch: ThunkDispatch<ReduxStageScoreState, undefined, ReduxLoadStageScoresAction>
  ) => {
    let url = qlApiUrl + 'monster-slayer';
    const res = await fetch(url);
    const serverStageScores: ServerStageScore = await res.json();

    return dispatch({
      type: ReduxActionTypes.LOAD_STAGE_SCORES as ReduxActionTypes.LOAD_STAGE_SCORES,
      data: serverStageScoreToStageScores(serverStageScores)
    });
  };
};

export const resetStageScores = (): ReduxResetStageScoresAction => ({
  type: ReduxActionTypes.REST_STAGE_SCORES
});
