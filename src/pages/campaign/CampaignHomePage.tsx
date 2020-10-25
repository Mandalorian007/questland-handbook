import * as React from 'react';
import { TileData, NavTileList } from '../../components/NavTileList';

const tileDataList: TileData[] = [
  { title: 'Faerie Wrath', to: '/campaign/faerie-wrath' },
  { title: 'Phoenix', to: '/campaign/phoenix' },
  { title: 'Shinobi', to: '/campaign/shinobi' }
];

export const CampaignHomePage = () => (
  <NavTileList buttonSuffix="Guide" tileDataList={tileDataList} />
);
