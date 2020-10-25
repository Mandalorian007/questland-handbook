import * as React from 'react';
import { NavTileList, TileData } from '../../components/NavTileList';

const tileDataList: TileData[] = [
  { title: 'Beginner Tips', to: '/guides/beginner-tips' }
];
export const GuidesHomePage = () => (
  <NavTileList buttonSuffix="guide" tileDataList={tileDataList} />
);
