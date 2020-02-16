import * as React from 'react';
import { Paper } from '@material-ui/core';

export const OldArtifactPage = () => (
  <Paper>
    <h1>Artifacts</h1>
    <p>
      Artifacts are an absolutely massive feature in Questland that helps you
      completely scale your character to whole new heights with each level
      increasing not only your base stats, but your increase in stats for every
      level. Currently there are four different levels of artifacts in
      Questland.
    </p>

    <h3>What does an artifact give me</h3>
    <p>
      Each tier of an artifact will unlock:
      <ul>
        <li>higher base stats</li>
        <li>higher potential</li>
        <li>additional reforge points</li>
      </ul>
      What does awakening do to a piece of gear?
      <br />- It increases the item level cap by 20
    </p>

    <h3>Artifact upgrading considerations</h3>
    <p>
      Artifact level 1 is a perfectly safe upgrade. Each artifact level 3 needs
      three level 1 artifacts (1 must be same emblem). So you can have tons of
      artifact level 1s lying around with no downside.
      <br />
      <br />
      Artifact level 2 I avoid because if you can't get level 3 easily your
      legendary investment could be trapped there.
      <br />
      <br />
      Artifact level 3 is good for your "older gear" you are currently wearing
      while farming up your "sick end game build" this is because you can use
      those level 3s to make Artifact level 4s for your end game build.
      <br />
      <br />
      Artifact 4 for super end game build. (This is a dead end. So tons
      legendaries invested with no way to get them back)
    </p>

    <h3>Legendary sacrifices selection logic</h3>
    <p>
      When upgrading to Artifacts you need to select "sacrificial" pieces. There
      are several "selection rules"
    </p>
    <ul>
      <li>
        Select pieces from sets you do not use in your equipment or collections.
      </li>
      <li>
        Be careful not to sacrifice copes of the item you are upgrading to make
        an artifact. It takes 7 of the same item to reach artifact 4
      </li>
      <li>
        Try to avoid pieces in groups of "3" (When making artifact 1s for
        sacrifices in artifact 3 crafting you will need these) Example: I have 5
        dragon rings. I can use 2 for sacrifices, but I want to save 3 dragon
        rings so I can make an artifact 1 from them to help with my Artifact 3
        upgrades
      </li>
    </ul>
  </Paper>
);
