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
    title: 'Arena Tickets',
    cardContent: 'This ticket lets you participate in an arena battle.'
  },
  {
    title: 'Energy',
    cardContent:
      'Energy is currently only used to run the campaign so early on in the game you will need more of it and later on it will just build up. You can also get 10 free energy per day by clicking on the + icon.'
  },
  {
    title: 'Stews',
    cardContent:
      'Stews will give you an additional 12 energy and can be purchased with barrels from the Trade Shop.'
  },
  {
    title: 'Loot Tokens',
    cardContent:
      'These tokens let you collect 10 runs of loot from a single campaign level that you have previously completed with 3 stars. These are typically used to farm either purple materials for orbs or rare essences. For loot tokens a popular trick is to run a level 9 times on energy and then use a loot token so you can get level loot 19 times instead of 10.'
  },
  {
    title: 'Scrolls',
    cardContent: (
      <div>
        Scrolls are either for Collection 1 or Collection 2 and will simply
        raise the power of a collection slot when used. Originally they are also
        used to unlock a slot which is much more important than leveling a slot.
        Leveling a slot has 3 phases and in each phase a scroll be comes less
        effective.
        <br />
        <br />
        Per Scroll effectiveness:
        <br />
        '75% -> 190% is ~1% increase.'
        <br />
        '190% -> 220% is a .6% increase.'
        <br />
        '220% -> 250% is a .2% increase.'
        <br />
        '250% -> 275% is a .02-.04% increase.'
      </div>
    )
  },
  {
    title: 'Reforge Powder',
    cardContent:
      'Reforge Powder is used to reforge your gear and grant it extra stats. Even though it seems like you get a decent amount of reforge powder you should save it for your end game gear.'
  },
  {
    title: 'Extract Tools',
    cardContent:
      "Extract's primary purpose is to help you build up more copies of a piece of gear that you already own with the goal of making artifact gear for your build. Since the extract option is limited to once per month and items are pretty expensive make sure you use these wisely."
  },
  {
    title: 'Divide Tokens',
    cardContent:
      'These come in a lesser and a superior form. Typically you will only ever want to use the superior ones. These tokens are used to break down gear you have put resources into (eternium, reforge powder, and empowering stones). You will only get a percentage of the resources you put in back so make sure to only invest large amounts of resources in gear you will be using for a while. The lesser divide tokens with give you 80% of your resources back while the superior tokens will give you 95%. It is recommended to focus on dividing old gear so you can use the resources on your new more powerful gear.'
  },
  {
    title: 'Empowering Stones',
    cardContent:
      'These work exclusively with artifact gear to assist in awakening an item. You can only awaken an artifact once at each level and since artifacts have 4 levels this means you can awaken each piece of your gear for an increasingly more expensive amount of empowering stones.'
  },
  {
    title: 'Essences',
    cardContent:
      'Essences are the primary currency for enhancing your orbs to make them even more powerful. This currency comes in four types (common, rare, epic, legendary) each of which have a stronger effect on raising your power'
  }
];

export const SecondaryCurrencyPage = () => {
  return (
    <GridList cellHeight={'auto'} cols={1} spacing={20}>
      {currencyCardList.map(currencyCard => (
        <GridListTile key={currencyCard.title} cols={1}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2">
                {currencyCard.title}
              </Typography>
              <Typography variant="body2" component="div">
                {currencyCard.cardContent}
              </Typography>
            </CardContent>
          </Card>
        </GridListTile>
      ))}
    </GridList>
  );
};
