import * as React from 'react';
import { Paper } from '@material-ui/core';
import { BuildExpansionPanel } from '../../components/BuildExpansionPanel';
import { TheArmourBuster, TheAssassin } from '../../domain/builds';

export const GuildBattleEventStrategyPage = () => (
  <Paper>
    <h1>Farming points against a guild boss</h1>
    <p>
      The guild boss is the bread and butter of this event and takes some
      serious coordination from your guild to be competitive in this scene.
      Participation and organization are the pillars on which your score is
      reflected.
    </p>

    <h3>Overall strategy</h3>
    <p>
      Everyone will receive 176 guild boss tickets during the battle event. And
      no matter how many tickets you spend on a guild boss when it dies you will
      receive the same reward for killing it. It's also worth noting that
      killing a higher level boss will grant you more points up to level 150.
      150 is also the level that the guild boss stops getting stronger.
      <br />
      <br />
      So basically you want to have guild members handle 5-10 levels by
      themselves pushing the boss to level 150 before starting a joint guild
      push. When the guild push happens you want to have everyone tag the boss
      (hit it with 2 tickets) and you want a Striker (Someone with passive #2
      and multiplier over 100) to kill the boss. Typically your strikers will
      save tickets to ensure they can kill the boss as many times as possible
      since each kill will cost them 6 tickets instead of just 2 to tag it.
      <br />
      <br />
      You will need a pool between 4 and 6 strikers to successfully push the
      boss to extremely high levels with a constant streak of guild members
      tagging the boss to score immense points for your guild. Because guild
      bosses take a while to kill at this high level it is recommended you have
      2 or more joint pushes with the final push being right at the end of the
      event.
    </p>

    <h2>Custom Guild boss builds</h2>
    <BuildExpansionPanel qlBuild={TheArmourBuster} />
    <BuildExpansionPanel qlBuild={TheAssassin} />
  </Paper>
);
