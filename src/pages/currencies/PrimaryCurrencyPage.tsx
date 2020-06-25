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
    title: 'Eternium',
    cardContent:
      'This is the core currency needed to upgrade gear levels. It is easily acquired by collecting Idle Rewards. Completing campaign sections will increase amount collected.'
  },
  {
    title: 'Gold',
    cardContent:
      "Gold is the main currency for upgrading your orb's level from 1 to 100 and will also be primarily gathered from idle rewards."
  },
  {
    title: 'Gems',
    cardContent:
      'These are a premium currency that can only be gotten in bulk from spending money. Make sure you spend your gems wisely.'
  }
];

export const PrimaryCurrencyPage = () => {
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
