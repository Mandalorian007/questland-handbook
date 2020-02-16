import * as React from 'react';
import { Paper } from '@material-ui/core';

export const OrbPage = () => (
  <Paper>
    <h1>Orbs</h1>
    <p>
      Orbs a special item that can be socketed into one of your equipped pieces
      of gear for additional bonuses. They come in 3 different types: Health,
      Attack & Magic, and Defense. Each orb also has a particular strength
      associated with it called potential which determines how much stronger an
      orb becomes as you level it up and enhance it's quality.
    </p>

    <h3>Orb Level</h3>
    <p>
      In general any orb you want to use you will spend the gold to level up to
      level 100. If you are short on gold it is recommended to level all your
      orbs evenly until you get them to 100. Please keep in mind that when you
      go to replace the orb there is no way to recover any gold spent leveling
      the orbs and it will all be lost. So before switching to a new orb make
      sure you are going to use the orb for a while.
    </p>

    <h3>Orb Quality</h3>
    <p>
      Don't bother upgrading orb quality until you have decent potential
      legendary orbs in all slots and your orb bonuses working. Raising an orb's
      quality very quickly gets more expensive with each level you upgrade it
      to. However, it can quickly provide some powerful bonuses. When upgrading
      it is recommended to first quality your orbs that have a bonus followed up
      with attack and defense orbs, and then everything else to get the most
      value from your upgrades. Just like with leveling your orbs we recommend
      upgrading them evenly because of the large cost increase to upgrade each
      level. It is also worth noting at orbs currently do not have an
      enhancement cap, but due to the cost increasing dramatically with each
      level, the general soft cap most players agree on is around +6.
    </p>

    <h3>Calculating Orb Bonus</h3>
    <p>
      The formula for calculating an orb's bonus is as follows (confirmed
      December 2019 via support):
      <br />
      <br />
      (Base orb stat + orb enhancement bonus * potential) * 5% = Enhancement
      bonus per level Note: Orb enhancement bonus is the count of the times
      boosted so a +7 would be a 6 bonus
      <br />
      <br />
      Example: Hope Reborn Orb (potential 62) at a +7 enhancement (192 + 62 * 6)
      * 5% = 28.2 enhancement bonus (per level)
      <br />
      <br />
      Now that we have the extra potential points the final formula to calculate
      orb power is: Orb base stat + (orb potential + enhancement bonus) * orb
      level
      <br />
      <br />
      Example continued: 192 + (62 + 28.2) * 100 = 9212 orb stat bonus
    </p>

    <h3>Orb equips and leveling</h3>
    <p>
      As a rule of thumb level up and increase potential evenly across all orbs.
      Ensure that every piece of gear you equip is benefiting from the orb
      bonus, and keep in mind that attack + magic orbs will provide the biggest
      boost to your overall power.
    </p>

    <h3>Optimizing your orb bonuses</h3>
    <p>
      Based on your gearing priority you typically want to activate an orb bonus
      using a defense orb. This is because defense is the worst stat so as you
      get new better orbs you want to upgrade your Health and Attack/Magic orbs
      instead of the defense orbs. Based on the same logic if you need to chose
      between health and attack/magic you would chose health because
      attack/magic is the most valuable.
      <br />
      <br />
      NOTE: This logic is about future proofing your upgrades if you are
      interested in maximum hero power you might be able to do better by
      maximizing your equipped orb potential, but I don't recommend it.
    </p>
  </Paper>
);
