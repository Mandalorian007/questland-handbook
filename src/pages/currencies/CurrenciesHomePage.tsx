import * as React from 'react';
import { TileData, NavTileList } from '../../components/NavTileList';

const tileDataList: TileData[] = [
  { title: 'Primary', to: '/currencies/primary' },
  { title: 'Secondary', to: '/currencies/secondary' },
  { title: 'Shop', to: '/currencies/shop' }
];

export const CurrenciesHomePage = () => (
  <NavTileList buttonSuffix="currencies" tileDataList={tileDataList} />
);
