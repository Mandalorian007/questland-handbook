import { StageScore } from '../domain/stageScore';
import { ReduxLoadStageScoresAction, ReduxResetStageScoresAction } from './stageScoreActions';
import { ReduxActionTypes } from './rootReducer';
import { Reducer } from 'react';

export interface ReduxStageScoreState {
  stageScores: StageScore[];
}

const initialState: ReduxStageScoreState = {
  stageScores: []
};

type StageScoreReducerActions = ReduxLoadStageScoresAction | ReduxResetStageScoresAction;

export const stageScoreReducer: Reducer<ReduxStageScoreState, StageScoreReducerActions> = (
  state: ReduxStageScoreState = initialState,
  action: StageScoreReducerActions
) => {
  switch (action.type) {
    case ReduxActionTypes.LOAD_STAGE_SCORES:
      return { ...state, stageScores: action.data };
    case ReduxActionTypes.RESET_STAGE_SCORES:
      return { ...state, stageScores: [] };
    default:
      return state;
  }
};
