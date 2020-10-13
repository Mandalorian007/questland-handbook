import * as React from 'react';
import { Paper } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Markdown} from "../../components/Markdown";
import home from './home.md';

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
      <Markdown md = {home} />
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
