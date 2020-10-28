import * as React from 'react';
import { NavTileList, TileData } from '../../components/NavTileList';

const tileDataList: TileData[] = [
  { title: 'Beginner Tips', to: '/guides/beginner-tips' },
  { title: 'Stat Priorities', to: '/guides/stat-priorities' },
  { title: 'Gear Design', to: '/guides/gear-design' }
];
export const GuidesHomePage = () => (
  <NavTileList buttonSuffix="guide" tileDataList={tileDataList} />
);
