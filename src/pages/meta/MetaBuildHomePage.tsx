import * as React from 'react';
import { TileData, NavTileList } from '../../components/NavTileList';

const tileDataList: TileData[] = [
  { title: 'Bloody Hell', to: '/meta/bloody-hell' },
  { title: 'Turtle', to: '/meta/turtle' }
];

export const MetaBuildHomePage = () => (
  <NavTileList buttonSuffix="Guide" tileDataList={tileDataList} />
);
