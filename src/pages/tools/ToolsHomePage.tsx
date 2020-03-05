import * as React from 'react';
import { TileData, NavTileList } from '../../components/NavTileList';

const tileDataList: TileData[] = [
    { title: 'Monster Slayer Calculator', to: '/tools/monster-slayer-calc' },
    { title: 'QL Bot for Discord', to: '/indexes/ql-bot' }
];

export const ToolsHomePage = () => <NavTileList buttonSuffix='' tileDataList={tileDataList} />;
