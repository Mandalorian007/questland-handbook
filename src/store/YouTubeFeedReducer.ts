import {ReduxActionTypes} from './rootReducer';
import {Reducer} from 'react';
import {Post} from "../domain/post";
import {ReduxLoadYouTubeFeedAction, ReduxResetYouTubeFeedAction} from "./YouTubeFeedActions";

export interface ReduxYouTubeFeedState {
  posts: Post[];
}

const initialState: ReduxYouTubeFeedState = {
  posts: []
};

type YouTubeFeedReducerActions = ReduxLoadYouTubeFeedAction | ReduxResetYouTubeFeedAction;

export const youTubeFeedReducer: Reducer<ReduxYouTubeFeedState, YouTubeFeedReducerActions> = (
  state: ReduxYouTubeFeedState = initialState,
  action: YouTubeFeedReducerActions
) => {
  switch (action.type) {
    case ReduxActionTypes.LOAD_VIDEOS:
      return { ...state, posts: action.data };
    case ReduxActionTypes.RESET_VIDEOS:
      return { ...state, posts: [] };
    default:
      return state;
  }
};
