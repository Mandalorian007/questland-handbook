import * as React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Button,
  Card,
  CardActions,
  CardHeader,
  GridList,
  GridListTile
} from '@material-ui/core';
import { useGridListCols } from '../lib/responsiveList';

export interface TileData {
  title: string;
  to: string;
}

export const NavTileList: React.FC<{
  buttonSuffix: string;
  tileDataList: TileData[];
}> = ({ buttonSuffix, tileDataList }) => (
  <GridList cellHeight={160} cols={useGridListCols()}>
    {tileDataList.map(tile => (
      <GridListTile key={tile.title} cols={1}>
        <Card>
          <CardHeader title={tile.title} />
          <CardActions>
            <Button
              variant="contained"
              size="small"
              color="primary"
              component={NavLink}
              to={tile.to}
            >
              {`Go to ${tile.title} ${buttonSuffix}`}
            </Button>
          </CardActions>
        </Card>
      </GridListTile>
    ))}
  </GridList>
);
