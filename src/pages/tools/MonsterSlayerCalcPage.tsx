import React, {useEffect} from 'react';
import {TypedUseSelectorHook, useDispatch, useSelector as useReduxSelector} from 'react-redux';
import {AppState} from '../../store/rootReducer';
import {Paper} from '@material-ui/core';
import {BattleLocation} from "../../domain/battleLocation";
import {loadBattleLocations} from "../../store/battleLocationActions";

export const useSelector: TypedUseSelectorHook<AppState> = useReduxSelector;

export const MonsterSlayerCalcPage: React.FC<{}> = () => {
    const battleLocations: BattleLocation[] = useSelector(state => state.battleLocationState.battleLocations);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadBattleLocations());
    }, [dispatch]);

    return (
        <Paper>
            ${JSON.stringify(battleLocations)}
        </Paper>
    );
};
