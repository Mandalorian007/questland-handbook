import * as React from 'react';
import { TileData, NavTileList } from '../../components/NavTileList';

const tileDataList: TileData[] = [
  { title: 'Gear Index', to: '/indexes/gear' },
  { title: 'Orb Index', to: '/indexes/orb' }
];

export const IndexHomePage = () => <NavTileList buttonSuffix='' tileDataList={tileDataList} />;
