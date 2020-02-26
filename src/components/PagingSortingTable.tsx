import React from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@material-ui/core';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import TablePagination from '@material-ui/core/TablePagination';
import { getComparator, stableSort } from '../lib/sort';

export interface ColumnData<T> {
  id: keyof T & string;
  label: string;
}

export interface PagingSortingTableProps<T> {
  columns: ColumnData<T>[];
  items: T[];
  rowsPerPage: number;
  initialSortingProperty: keyof T & string;
  initialSortDirection: 'asc' | 'desc';
}

export const PagingSortingTable = <T extends Object>(
  props: PagingSortingTableProps<T>
) => {
  const {
    columns,
    items,
    rowsPerPage,
    initialSortingProperty,
    initialSortDirection
  } = props;
  const columnIds: (keyof T & string)[] = columns.map(column => column.id);
  const [order, setOrder] = React.useState<'asc' | 'desc'>(
    initialSortDirection
  );
  const [orderBy, setOrderBy] = React.useState<keyof T>(initialSortingProperty);
  const [page, setPage] = React.useState(0);

  const handleRequestSort = (property: keyof T) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event: any, newPage: number) => {
    setPage(newPage);
  };

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, items.length - page * rowsPerPage);

  return (
    <Paper>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              {columns.map((column: ColumnData<T>, index: number) => (
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
            {stableSort(items, getComparator<T>(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((item: T, index: number) => (
                <TableRow key={index}>
                  {columnIds.map(key => (
                    <TableCell align="right">{item[key]}</TableCell>
                  ))}
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
