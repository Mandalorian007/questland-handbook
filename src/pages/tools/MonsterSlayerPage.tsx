import React, { useEffect } from 'react';
import {
    TypedUseSelectorHook,
    useDispatch,
    useSelector as useReduxSelector
} from 'react-redux';
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
  } from '@material-ui/core';

import { loadStageScores } from '../../store/stageScoreActions';
import { StageScore } from '../../domain/stageScore';
import { AppState } from '../../store/rootReducer';

export const useSelector: TypedUseSelectorHook<AppState> = useReduxSelector;

export const MonsterSlayerPage: React.FC<{}> = () => {
    const stageScores: StageScore[] = useSelector(
        state => state.stageScoreState.stageScores
    );

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadStageScores());
    }, [dispatch]);

    if (stageScores.length == 0) {
        return (
            <Paper>
                <h1>Monster Slayer</h1>
                <h2>No current Monster Slayer event</h2>
            </Paper>
        );
    }

    return (
        <Paper>
            <h1>Monster Slayer</h1>
            <TableContainer>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                        <TableCell>Battle Location</TableCell>
                        <TableCell>Stage</TableCell>
                        <TableCell>Score</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {stageScores.map(stageScore => {
                        return (
                            <TableRow key={stageScore.stageName}>
                                <TableCell>{stageScore.locationName}</TableCell>
                                <TableCell>{stageScore.stageName}</TableCell>
                                <TableCell>{Number(stageScore.stageScore).toLocaleString()}</TableCell>
                            </TableRow>
                        );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
};
