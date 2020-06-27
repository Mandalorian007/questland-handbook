import * as React from 'react';
import { NavTileList, TileData } from '../../components/NavTileList';

const tileDataList: TileData[] = [
  { title: 'Beginner Tips', to: '/guides/beginner-tips' },
  { title: 'Popular Builds', to: '/guides/popular-builds' }
];
export const GuidesHomePage = () => (
  <NavTileList buttonSuffix="guide" tileDataList={tileDataList} />
);
