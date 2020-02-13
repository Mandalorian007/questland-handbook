import React, { useEffect } from 'react';
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector as useReduxSelector
} from 'react-redux';
import { AppState } from '../store/rootReducer';
import { Paper } from '@material-ui/core';
import { loadOrbs } from '../store/orbActions';
import { Orb } from '../domain/orb';
import {
  ColumnData,
  PagingSortingTable
} from '../components/PagingSortingTable';

const orbColumns: ColumnData<Orb>[] = [
  { id: 'name', label: 'Name' },
  { id: 'quality', label: 'Quality' },
  { id: 'statBonus', label: 'Stat Bonus' },
  { id: 'attack', label: 'Attack' },
  { id: 'magic', label: 'Magic' },
  { id: 'defense', label: 'Defense' },
  { id: 'health', label: 'Health' }
];

export const useSelector: TypedUseSelectorHook<AppState> = useReduxSelector;

export const OrbIndexPage: React.FC<{}> = () => {
  const orbs: Orb[] = useSelector(state => state.orbState.orbs);
  const rowsPerPage: number = 10;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadOrbs());
  });

  return (
    <Paper>
      <PagingSortingTable
        columns={orbColumns}
        items={orbs}
        rowsPerPage={rowsPerPage}
        initialSortingProperty={'attack'}
        initialSortDirection={'desc'}
      />
    </Paper>
  );
};
