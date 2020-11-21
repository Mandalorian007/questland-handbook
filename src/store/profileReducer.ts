import { Profile } from '../domain/profile';
import {
    ReduxDeleteProfileAction,
    ReduxLoadProfileAction,
    ReduxUnloadProfileAction,
    ReduxUpdateProfileAction
} from './profileActions';
import { ReduxActionTypes } from './rootReducer';
import { Reducer } from 'react';

export interface ReduxProfileState {
    profile: Profile;
}

const emptyProfile: Profile = {
    googleId: ''
};

const initialState: ReduxProfileState = {
    profile: {
        googleId: ''
    }
};

type ProfileReducerActions = ReduxLoadProfileAction | ReduxUpdateProfileAction | ReduxUnloadProfileAction | ReduxDeleteProfileAction;

export const profileReducer: Reducer<ReduxProfileState, ProfileReducerActions> = (
    state: ReduxProfileState = initialState,
    action: ProfileReducerActions
) => {
    switch (action.type) {
        case ReduxActionTypes.LOAD_PROFILE:
            return { ...state, profile: action.data };
        case ReduxActionTypes.UPDATE_PROFILE:
            return { ...state, profile: action.data };
        case ReduxActionTypes.UNLOAD_PROFILE:
            return { ...state, profile: emptyProfile };
        case ReduxActionTypes.DELETE_PROFILE:
            return { ...state, profile: emptyProfile };
        default:
            return state;
    }
};
