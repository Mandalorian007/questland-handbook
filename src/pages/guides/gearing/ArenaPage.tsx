import * as React from 'react';
import { Paper } from '@material-ui/core';
import { BuildExpansionPanel } from '../../../components/BuildExpansionPanel';
import {
  FireBlaster,
  IceCannon,
  ThePAXAntiHealEdition
} from '../../../domain/builds';

export const ArenaPage = () => (
  <Paper>
    <h1>Dominating in the arena</h1>
    <p>
      Questland's arena can at first be extremely intimidating, but it's
      actually incredibly easy to blast through to the top of the ladder by
      leveraging some powerful arena builds.
    </p>

    <h3>Offensive arena setup</h3>
    <p>
      Winning when attacking before hitting higher ranks is as simple as
      starting to use one of the popular builds listed in this website. These
      should easily carry you up to mid tier arena ranks (1500+) without any
      issues at all. My personal favorite build fo this is <b>The Turtle</b>. At
      higher levels things get to be a little trickier due to the presence of
      super strong anti-healing builds. The builds below should serve you well.
    </p>
    <BuildExpansionPanel qlBuild={FireBlaster} />
    <BuildExpansionPanel qlBuild={IceCannon} />
    <BuildExpansionPanel qlBuild={ThePAXAntiHealEdition} />

    <h3>Defensive arena setup</h3>
    <p>
      Defensive arena setup is really a just a mirror of looking at the most
      powerful offensive builds in the game. Almost all of them leverage healing
      for spirit generation and consistent damage output.
    </p>

    <h3>The meta defense</h3>
    <p>
      Basically equip any shield that has "when opponent heals trigger 2 white"
      Then leverage Sacred Rage or White Witchcraft as a backup. Equip the rest
      of either "Hectacombus" or "The Turtle" from the popular builds. The
      entire meta is basically just punish healing while enabling your own dps.
      This defensive setup will make anyone lower geared, or a bit above your
      gear level significantly hesitate before engaging you and have a
      dramatically lower chance of winning. As an alternative for higher ranking
      players give "The Fire Blaster" a try on defense as well as attac. It is
      suprisingly strong at punishing the most popular attack builds.
    </p>
    <BuildExpansionPanel qlBuild={FireBlaster} />
  </Paper>
);
