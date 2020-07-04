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
import { BossStats } from '../../domain/bossStats';
import { loadHardBossStats } from '../../store/hardBossStatActions';
import { AppState } from '../../store/rootReducer';

export const useSelector: TypedUseSelectorHook<AppState> = useReduxSelector;

export const HardBossStatsIndexPage: React.FC<{}> = () => {
  const statLevels: BossStats[] = useSelector(
    state => state.hardBossStatsState.hardBossStats
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadHardBossStats());
  }, [dispatch]);

  return (
    <Paper>
      <h1>Hard Boss Stats By Level</h1>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Level</TableCell>
              <TableCell>Health</TableCell>
              <TableCell>Attack</TableCell>
              <TableCell>Defense</TableCell>
              <TableCell>Magic</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {statLevels.map(stats => {
              return (
                <TableRow key={stats.level}>
                  <TableCell>{stats.level}</TableCell>
                  <TableCell>{Number(stats.health).toLocaleString()}</TableCell>
                  <TableCell>{Number(stats.attack).toLocaleString()}</TableCell>
                  <TableCell>
                    {Number(stats.defense).toLocaleString()}
                  </TableCell>
                  <TableCell>{Number(stats.magic).toLocaleString()}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};
