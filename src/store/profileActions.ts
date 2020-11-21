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

export interface ReduxUnloadProfileAction {
    type: ReduxActionTypes.UNLOAD_PROFILE;
}

export interface ReduxDeleteProfileAction {
    type: ReduxActionTypes.DELETE_PROFILE;
}

export const loadProfile = (authToken: string): ThunkAction<Promise<ReduxLoadProfileAction>,
    ReduxProfileState,
    undefined,
    ReduxLoadProfileAction> => {
    return async (
        dispatch: ThunkDispatch<ReduxProfileState, undefined, ReduxLoadProfileAction>
    ) => {
        const requestInit: RequestInit = {
            headers: {
                'Authorization': 'Bearer ' + authToken,
                'Content-Type': 'application/json',
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

export const updateProfile = (authToken: string, profile: Profile): ThunkAction<Promise<ReduxUpdateProfileAction>,
    ReduxProfileState,
    undefined,
    ReduxUpdateProfileAction> => {
    return async (
        dispatch: ThunkDispatch<ReduxProfileState, undefined, ReduxUpdateProfileAction>
    ) => {
        const requestInit: RequestInit = {
            method: 'PATCH',
            headers: {
                'Authorization': 'Bearer ' + authToken,
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

export const unloadProfile = (): ReduxUnloadProfileAction => ({
    type: ReduxActionTypes.UNLOAD_PROFILE
});

export const deleteProfile = (authToken: string): ThunkAction<Promise<ReduxDeleteProfileAction>,
    ReduxProfileState,
    undefined,
    ReduxDeleteProfileAction> => {
    return async (
        dispatch: ThunkDispatch<ReduxProfileState, undefined, ReduxDeleteProfileAction>
    ) => {
        const requestInit: RequestInit = {
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer ' + authToken,
            }
        };

        let url = qlApiUrl + 'profile';
        await fetch(url, requestInit);

        return dispatch({
            type: ReduxActionTypes.DELETE_PROFILE as ReduxActionTypes.DELETE_PROFILE
        });
    };
};
