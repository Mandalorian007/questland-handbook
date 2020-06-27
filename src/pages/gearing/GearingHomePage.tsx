import * as React from 'react';
import { NavTileList, TileData } from '../../components/NavTileList';

const tileDataList: TileData[] = [
  { title: 'Gear', to: '/gearing/gear' },
  { title: 'Orbs', to: '/gearing/orbs' },
  { title: 'Artifacts', to: '/gearing/artifacts' },
  { title: 'Collections', to: '/gearing/collections' },
  { title: 'Reforging', to: '/gearing/reforging' },
  { title: 'Stat Priorities', to: '/gearing/stat-priorities' }
];
export const GearingHomePage = () => (
  <NavTileList buttonSuffix="guide" tileDataList={tileDataList} />
);
