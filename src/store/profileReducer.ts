import { Profile } from '../domain/profile';
import {ReduxLoadProfileAction, ReduxResetProfileAction, ReduxUpdateProfileAction} from './profileActions';
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

type ProfileReducerActions = ReduxLoadProfileAction | ReduxUpdateProfileAction | ReduxResetProfileAction;

export const profileReducer: Reducer<ReduxProfileState, ProfileReducerActions> = (
    state: ReduxProfileState = initialState,
    action: ProfileReducerActions
) => {
    switch (action.type) {
        case ReduxActionTypes.LOAD_PROFILE:
            return { ...state, profile: action.data };
        case ReduxActionTypes.UPDATE_PROFILE:
            return { ...state, profile: action.data };
        case ReduxActionTypes.RESET_PROFILE:
            return { ...state, profile: emptyProfile };
        default:
            return state;
    }
};
