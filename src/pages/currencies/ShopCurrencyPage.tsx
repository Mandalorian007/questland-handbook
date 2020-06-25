import * as React from 'react';
import {
  Card,
  CardContent,
  GridList,
  GridListTile,
  Typography
} from '@material-ui/core';

interface CurrencyCardList {
  title: string;
  cardContent: React.ReactNode;
}

const currencyCardList: CurrencyCardList[] = [
  {
    title: 'Barrels',
    cardContent:
      'Barrels are collected from voyages and can only be used in the barrel shop.'
  },
  {
    title: 'Stamps',
    cardContent:
      'Stamps are collected from the daily boss fights and completing your daily quests and are only used in the stamp shop.'
  },
  {
    title: 'Guild Coins',
    cardContent:
      'Guild coins can be collected by donating to your guild and as rewards from Battle Events that your guild leader will distribute. These can also only be spent in the guild shop.'
  }
];

export const ShopCurrencyPage = () => {
  return (
    <GridList cellHeight={'auto'} cols={1} spacing={20}>
      {currencyCardList.map(currencyCard => (
        <GridListTile key={currencyCard.title} cols={1}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2">
                {currencyCard.title}
              </Typography>
              <Typography variant="body2" component="p">
                {currencyCard.cardContent}
              </Typography>
            </CardContent>
          </Card>
        </GridListTile>
      ))}
    </GridList>
  );
};
