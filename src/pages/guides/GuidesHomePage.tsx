import * as React from 'react';
import { TileData, NavTileList } from '../../components/NavTileList';

const tileDataList: TileData[] = [
  { title: 'Resources', to: '/guides/resources' },
  { title: 'Gearing', to: '/guides/gearing' },
  { title: 'Battle Event', to: '/guides/battle-event' }
];

export const GuidesHomePage = () => (
  <NavTileList buttonSuffix="guides" tileDataList={tileDataList} />
);
