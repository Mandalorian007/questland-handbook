const descendingComparator = <T extends Object>(
  a: T,
  b: T,
  orderBy: keyof T
) => {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
};

export const getComparator = <T extends Object>(
  order: 'desc' | 'asc',
  orderBy: keyof T
) => {
  return order === 'desc'
    ? (a: T, b: T) => descendingComparator(a, b, orderBy)
    : (a: T, b: T) => -descendingComparator(a, b, orderBy);
};

export const stableSort = <T extends Object>(
  array: T[],
  comparator: (a: T, b: T) => number
) => {
  const stabilizedThis = array.map<[T, number]>((item: T, index: number) => [
    item,
    index
  ]);
  stabilizedThis.sort(([itemA, indexA], [itemB, indexB]) => {
    const order = comparator(itemA, itemB);
    if (order !== 0) return order;
    return indexA - indexB;
  });
  return stabilizedThis.map(([item, index]) => item);
};
