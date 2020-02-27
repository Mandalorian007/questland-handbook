import { useMediaQuery, useTheme } from '@material-ui/core';

export const useGridListCols = () => {
  const theme = useTheme();
  const isXl = useMediaQuery(theme.breakpoints.up('xl'));
  const isLg = useMediaQuery(theme.breakpoints.up('lg'));
  const isMd = useMediaQuery(theme.breakpoints.up('md'));

  if (isXl) {
    return 4;
  }
  if (isLg) {
    return 3;
  }
  if (isMd) {
    return 2;
  }
  return 1;
};
