import * as React from 'react';
import { Paper } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    contentPaper: {
      background: '#303030'
    }
  })
);

export const HomePage = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.contentPaper}>
      <h1>Questland Handbook</h1>
      <p>
        This project is meant to be a repository of Questland information,
        opinionated best practices, and utilities.
      </p>

      <h3>Special Thanks</h3>
      <p>
        This document is only possible because of the many amazing guild members
        and friends who have taught me. I want to call out some in particular
        who really inspired me with how helpful and amazing they have been.
      </p>
      <ul>
        <li>SIBB</li>
        <li>TigerFan</li>
        <li>Vangoth</li>
        <li>Punisher777</li>
        <li>Draugluin</li>
        <li>Juoh</li>
        <li>Monstercat</li>
        <li>Peitcadon</li>
        <li>ZombieKat</li>
      </ul>

      <p>Love our work? Please help support us on Patreon!</p>
      <a href="https://www.patreon.com/bePatron?u=33921067">
        <img
          src="become_a_patron_button@2x.png"
          alt="unable to load patreon logo"
        />
      </a>
    </Paper>
  );
};
