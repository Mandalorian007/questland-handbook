import * as React from 'react';
import { TileData, NavTileList } from '../../components/NavTileList';

const tileDataList: TileData[] = [
  { title: 'Strategy', to: '/arena/strategy' },
  { title: 'Fire Blaster', to: '/arena/fire-blaster' },
  { title: 'Icy Cannon', to: '/arena/icy-cannon' },
  { title: 'Booming Turtle', to: '/arena/booming-turtle' },
  { title: 'Warding Fang', to: '/arena/warding-fang' },
  { title: 'The Farmer', to: '/arena/the-farmer' }
];

export const ArenaHomePage = () => (
  <NavTileList buttonSuffix="Guide" tileDataList={tileDataList} />
);
