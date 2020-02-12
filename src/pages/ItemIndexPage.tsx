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

interface ColumnData {
  id: string;
  label: string;
  numeric: boolean;
}

const itemColumns: ColumnData[] = [
  { id: 'name', label: 'Name', numeric: false },
  { id: 'totalPotential', label: 'Potential', numeric: true },
  { id: 'quality', label: 'Quality', numeric: false },
  { id: 'itemSlot', label: 'Item Slot', numeric: false },
  { id: 'emblem', label: 'Emblem', numeric: false },
  { id: 'attack', label: 'Attack', numeric: true },
  { id: 'magic', label: 'Magic', numeric: true },
  { id: 'defense', label: 'Defense', numeric: true },
  { id: 'health', label: 'Health', numeric: true }
];

// TODO remove any and properly type these
const descendingComparator = (a: any, b: any, orderBy: any) => {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
};

const getComparator = (order: any, orderBy: any) => {
  return order === 'desc'
    ? (a: any, b: any) => descendingComparator(a, b, orderBy)
    : (a: any, b: any) => -descendingComparator(a, b, orderBy);
};

const stableSort = (array: any, comparator: any) => {
  const stabilizedThis = array.map((el: any, index: any) => [el, index]);
  stabilizedThis.sort((a: any, b: any) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el: any) => el[0]);
};

export const useSelector: TypedUseSelectorHook<AppState> = useReduxSelector;

export const ItemIndexPage: React.FC<{}> = () => {
  const items = useSelector(state => state.itemState.items);
  const [order, setOrder] = React.useState<'asc' | 'desc'>('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [page, setPage] = React.useState(0);

  const rowsPerPage: number = 10;

  const handleRequestSort = (property: string) => {
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
            {stableSort(items, getComparator(order, orderBy))
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
