import * as React from 'react';
import { TileData, NavTileList } from '../../components/NavTileList';

const tileDataList: TileData[] = [
  { title: 'Gear Index', to: '/indexes/gear' },
  { title: 'Orb Index', to: '/indexes/orb' },
  { title: 'Hard Boss Stats', to: '/indexes/hard-boss-stats' },
  { title: 'Guild Boss Stats', to: '/indexes/guild-boss-stats' }
];

export const IndexHomePage = () => (
  <NavTileList buttonSuffix="" tileDataList={tileDataList} />
);
