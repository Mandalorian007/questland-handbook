import * as React from 'react';
import { TileData, NavTileList } from '../../components/NavTileList';

const tileDataList: TileData[] = [
  { title: 'Red Battle Event', to: '/battle-event/red' },
  { title: 'Blue Battle Event', to: '/battle-event/blue' },
  { title: 'Guild Strategy', to: '/battle-event/guild-strategy' },
  { title: 'Red Guild Striker', to: '/battle-event/red-guild-striker' },
  { title: 'Blue Guild Striker', to: '/battle-event/blue-guild-striker' }
];

export const BattleEventHomePage = () => (
  <NavTileList buttonSuffix="Guide" tileDataList={tileDataList} />
);
