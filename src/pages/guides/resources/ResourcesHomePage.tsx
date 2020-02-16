import * as React from 'react';
import { Divider, Paper } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

/* TODO ask Andrew if it's possible to add this more globally, but only for content pages */
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    contentPaper: {
      background: '#303030'
    }
  })
);

export const ResourcesHomePage = () => {
  const classes = useStyles();
  /*
  TODO add a right side panel for larger screens to help with navigation
  */

  return (
    <Paper className={classes.contentPaper}>
      <h1>Questland Resources Overview</h1>
      <h2>Understanding the different types of resources and how they work</h2>
      {/* image here would be great */}
      <Divider />
      <h2>Primary Currencies</h2>
      <h3>Eternium</h3>
      <p>content</p>
      <h3>Gold</h3>
      <p>content</p>
      <h3>Gems</h3>
      <p>content</p>
      <Divider />
      <h2>Secondary Currencies</h2>
      <h3>Energy</h3>
      <p>content</p>
      <h3>Reforge Powder</h3>
      <p>content</p>
      <h3>Scrolls</h3>
      <p>content</p>
      <h3>Essences</h3>
      <p>content</p>
      <h3>Extract</h3>
      <p>content</p>
      <h3>Empowering Stones</h3>
      <p>content</p>
      <h3>Divide Tokens</h3>
      <p>content</p>
      <h3>Loot Tokens</h3>
      <p>content</p>
      <h3>Arena Tickets</h3>
      <p>content</p>
      <Divider />
      <h2>Shop Currencies</h2>
      <h3>Barrels</h3>
      <p>content</p>
      <h3>Stamp</h3>
      <p>content</p>
      <h3>Guild Coins</h3>
      <p>content</p>
      <Divider />
    </Paper>
  );
};
