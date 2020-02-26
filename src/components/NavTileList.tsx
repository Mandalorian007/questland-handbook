import * as React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  GridList,
  GridListTile
} from '@material-ui/core';

export interface TileData {
  title: string;
  to: string;
}

export const NavTileList: React.FC<{
  tileDataList: TileData[];
}> = ({ tileDataList }) => (
  <GridList cellHeight={160} cols={3}>
    {tileDataList.map(tile => (
      <GridListTile key={tile.title} cols={1}>
        <Card>
          <CardHeader title={tile.title} />
          <CardContent>content</CardContent>
          <Button size="small" color="primary" component={NavLink} to={tile.to}>
            Go to Guides
          </Button>
        </Card>
      </GridListTile>
    ))}
  </GridList>
);
