import {ReduxActionTypes} from './rootReducer';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {Profile} from "../domain/profile";
import {ReduxProfileState} from "./profileReducer";
import {qlApiUrl} from "../config";

export interface ReduxLoadProfileAction {
    type: ReduxActionTypes.LOAD_PROFILE;
    data: Profile;
}

export interface ReduxUpdateProfileAction {
    type: ReduxActionTypes.UPDATE_PROFILE;
    data: Profile;
}

export interface ReduxResetProfileAction {
    type: ReduxActionTypes.RESET_PROFILE;
}

export const loadProfile = (tokenId: string): ThunkAction<Promise<ReduxLoadProfileAction>,
    ReduxProfileState,
    undefined,
    ReduxLoadProfileAction> => {
    return async (
        dispatch: ThunkDispatch<ReduxProfileState, undefined, ReduxLoadProfileAction>
    ) => {
        const requestInit: RequestInit = {
            headers: {
                'id_token': tokenId,
            }
        };

        let url = qlApiUrl + 'profile';
        const res = await fetch(url, requestInit);
        const Profile: Profile = await res.json();

        return dispatch({
            type: ReduxActionTypes.LOAD_PROFILE as ReduxActionTypes.LOAD_PROFILE,
            data: Profile
        });
    };
};

export const updateProfile = (tokenId: string, profile: Profile): ThunkAction<Promise<ReduxUpdateProfileAction>,
    ReduxProfileState,
    undefined,
    ReduxUpdateProfileAction> => {
    return async (
        dispatch: ThunkDispatch<ReduxProfileState, undefined, ReduxUpdateProfileAction>
    ) => {
        const requestInit: RequestInit = {
            method: 'PATCH',
            headers: {
                'id_token': tokenId,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(profile)
        };

        let url = qlApiUrl + 'profile';
        const res = await fetch(url, requestInit);
        const newProfile: Profile = await res.json();

        return dispatch({
            type: ReduxActionTypes.UPDATE_PROFILE as ReduxActionTypes.UPDATE_PROFILE,
            data: newProfile
        });
    };
};

export const resetProfile = (): ReduxResetProfileAction => ({
    type: ReduxActionTypes.RESET_PROFILE
});
