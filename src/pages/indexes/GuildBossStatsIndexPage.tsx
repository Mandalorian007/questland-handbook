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
import { loadGuildBossStats } from '../../store/guildBossStatActions';
import { AppState } from '../../store/rootReducer';

export const useSelector: TypedUseSelectorHook<AppState> = useReduxSelector;

export const GuildBossStatsIndexPage: React.FC<{}> = () => {
  const statLevels: BossStats[] = useSelector(
    state => state.guildBossStatsState.guildBossStats
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGuildBossStats());
  }, [dispatch]);

  return (
    <Paper>
      <h1>Guild Boss Stats By Level</h1>
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
