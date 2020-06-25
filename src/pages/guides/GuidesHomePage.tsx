import * as React from 'react';
import { NavTileList, TileData } from '../../components/NavTileList';

const tileDataList: TileData[] = [
  { title: 'Gearing', to: '/guides/gearing' },
  { title: 'Battle Event', to: '/guides/battle-event' }
];

export const GuidesHomePage = () => (
  <NavTileList buttonSuffix="guides" tileDataList={tileDataList} />
);
