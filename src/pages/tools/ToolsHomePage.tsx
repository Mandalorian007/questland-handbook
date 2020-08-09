import * as React from 'react';
import { TileData, NavTileList } from '../../components/NavTileList';

const tileDataList: TileData[] = [
  { title: 'Monster Slayer Calculator', to: '/tools/monster-slayer-calc' },
  { title: 'Quest Event Smelting Calculator', to: '/tools/qe-smelting-calc' },
  { title: 'QL Bot for Discord', to: '/tools/ql-bot' },
  { title: 'Questland Public API', to: '/tools/public-api' },
  { title: 'Guild Lookup', to: '/tools/guild-lookup' },
  { title: 'Guild Battle Event Planner', to: '/tools/guild-be-plan' }
];

export const ToolsHomePage = () => (
  <NavTileList buttonSuffix="" tileDataList={tileDataList} />
);
