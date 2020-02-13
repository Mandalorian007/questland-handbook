import React, { useEffect } from 'react';
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector as useReduxSelector
} from 'react-redux';
import { AppState } from '../store/rootReducer';
import { Paper } from '@material-ui/core';
import { loadItems } from '../store/itemActions';
import { Item } from '../domain/item';
import {
  ColumnData,
  PagingSortingTable
} from '../components/PagingSortingTable';

const itemColumns: ColumnData<Item>[] = [
  { id: 'name', label: 'Name' },
  { id: 'totalPotential', label: 'Potential' },
  { id: 'quality', label: 'Quality' },
  { id: 'itemSlot', label: 'Item Slot' },
  { id: 'emblem', label: 'Emblem' },
  { id: 'attack', label: 'Attack' },
  { id: 'magic', label: 'Magic' },
  { id: 'defense', label: 'Defense' },
  { id: 'health', label: 'Health' }
];

export const useSelector: TypedUseSelectorHook<AppState> = useReduxSelector;

export const ItemIndexPage: React.FC<{}> = () => {
  const items: Item[] = useSelector(state => state.itemState.items);
  const rowsPerPage: number = 10;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadItems());
  });

  return (
    <Paper>
      <PagingSortingTable
        columns={itemColumns}
        items={items}
        rowsPerPage={rowsPerPage}
        initialSortingProperty={'totalPotential'}
        initialSortDirection={'desc'}
      />
    </Paper>
  );
};
