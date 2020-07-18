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
        The Questland Handbook project was only made possible because of some
        amazing people who have seriously helped me along the way. And I want to
        take a moment to acknowledge these incredible people who have taken
        their time to make this possible.
      </p>
      <h4>My Mentors</h4>
      <p>
        The folks in this section taught so much about Questland that I could
        not have provided so much content to all of you without. In addition
        many of these members built the foundations of an incredible community
        to share knowledge and have fun together. I hope this guide can help
        bring that to you and your own communities.
      </p>
      <ul>
        <li>SIBB</li>
        <li>TigerFan</li>
        <li>Vangoth</li>
        <li>Punisher777</li>
        <li>Draugluin</li>
        <li>Juoh</li>
        <li>Peitcadon</li>
      </ul>
      <h4>Guide contributors</h4>
      <p>
        These incredible people are the members that their content to be
        re-published here for the betterment of the Questland community. Many
        are excluded here due to privacy requests, but know that so many people
        collaborated to make this possible!
      </p>
      <ul>
        <li>SIBB</li>
        <li>Punisher777</li>
        <li>Edo</li>
      </ul>
      <h4>Content Editors</h4>
      <p>
        These are the community members who take my terrible writing skills and
        make it easy to understand and access for everyone here. Without their
        help I would still be second guessing phrasing for months!
      </p>
      <ul>
        <li>Ankari</li>
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
