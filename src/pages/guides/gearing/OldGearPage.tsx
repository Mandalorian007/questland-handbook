import * as React from 'react';
import { Paper } from '@material-ui/core';

export const OldGearPage = () => (
  <Paper>
    <h1>Gear</h1>
    <h3>Gear Bonuses</h3>
    <p>
      Each pieces of gear comes with 2 different possible bonuses that are
      something you will always want to take advantage of. You can have a bonus
      for having certain other pieces of gear equipped (either on your character
      or in a collection) and you can have bonuses for socketing certain orbs in
      your gear.
    </p>

    <h3>Gear Links</h3>
    <p>
      Each piece of gear will have a list of 3 different pieces of gear that can
      be equipped to get an additional 30% of a particular stat. You will only
      need to equip 2 of 3 pieces of the listed gear to activate the bonus. You
      won't get anything from having all 3 pieces equipped. The equipped piece
      of gear can either be on your character directly or in either of your
      collections.
    </p>

    <h3>Socket orb bonuses</h3>
    <p>
      Every piece of gear will have 2 options for orbs that you can socket to
      get stat bonus from your orb. You will only need to socket 1 of the 2 and
      socketing more than that 1 won't do anything for you. It is common
      practice to prioritize maximizing the stat bonus. For instance if you have
      a %15 orb health bonus, and your piece of gear can socket a low potential
      health orb or a low potential defense orb, then you will want to socket
      the low potential defense orb and equip a powerful health orb to get the
      most out of your bonus.
    </p>
  </Paper>
);
