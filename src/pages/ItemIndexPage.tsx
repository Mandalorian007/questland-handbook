import React, { useEffect } from 'react';
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector as useReduxSelector
} from 'react-redux';
import { AppState } from '../store/rootReducer';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@material-ui/core';
import { loadItems } from '../store/itemActions';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import TablePagination from '@material-ui/core/TablePagination';
import { getComparator, stableSort } from '../lib/sort';
import { Item } from '../domain/item';

interface ColumnData {
  id: keyof Item;
  label: string;
}

const itemColumns: ColumnData[] = [
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
  const items = useSelector(state => state.itemState.items);
  const [order, setOrder] = React.useState<'asc' | 'desc'>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof Item>('totalPotential');
  const [page, setPage] = React.useState(0);

  const rowsPerPage: number = 10;

  const handleRequestSort = (property: keyof Item) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event: any, newPage: number) => {
    setPage(newPage);
  };

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, items.length - page * rowsPerPage);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadItems());
  });

  return (
    <Paper>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              {itemColumns.map((column: ColumnData, index: number) => (
                <TableCell
                  key={column.id}
                  align={index === 0 ? 'left' : 'right'}
                >
                  <TableSortLabel
                    active={orderBy === column.id}
                    direction={orderBy === column.id ? order : 'asc'}
                    onClick={() => handleRequestSort(column.id)}
                  >
                    {column.label}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {stableSort(items, getComparator<Item>(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((item: any) => (
                <TableRow key={item.id}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell align="right">{item.totalPotential}</TableCell>
                  <TableCell align="right">{item.quality}</TableCell>
                  <TableCell align="right">{item.itemSlot}</TableCell>
                  <TableCell align="right">{item.emblem}</TableCell>
                  <TableCell align="right">{item.attack}</TableCell>
                  <TableCell align="right">{item.magic}</TableCell>
                  <TableCell align="right">{item.defense}</TableCell>
                  <TableCell align="right">{item.health}</TableCell>
                </TableRow>
              ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[rowsPerPage]}
        component="div"
        count={items.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
      />
    </Paper>
  );
};
