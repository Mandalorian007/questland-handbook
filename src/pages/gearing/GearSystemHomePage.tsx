import * as React from 'react';
import { NavTileList, TileData } from '../../components/NavTileList';

const tileDataList: TileData[] = [
  { title: 'Gear', to: '/gear-system/gear' },
  { title: 'Orbs', to: '/gear-system/orbs' },
  { title: 'Artifacts', to: '/gear-system/artifacts' },
  { title: 'Collections', to: '/gear-system/collections' },
  { title: 'Reforging', to: '/gear-system/reforging' },
  { title: 'Optimized Gear Sets', to: '/gear-system/optimized-gear-sets' }
];
export const GearSystemHomePage = () => (
  <NavTileList buttonSuffix="guide" tileDataList={tileDataList} />
);
