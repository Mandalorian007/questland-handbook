import * as React from 'react';
import { Paper } from '@material-ui/core';

export const StatPriorityPage = () => (
  <Paper>
    <h1>Stat Priorities</h1>
    <p>
      This is the foundation for our gearing decision and is strongly
      opinionated. I will cover most of the methodology below.
      <br />
      <br />
      - Attack > Magic <br />
      - Health > Defense
      <br />
      <br />
      Attack + health builds are the foundation of top tier players in Questland
      and with good reason. They destroy content. When optimizing a build we
      have several use cases to consider: Campaign, Arena, and the glorious
      Battle Event.
    </p>

    <h3>Dealing damage: Attack vs Magic</h3>
    <h4>Campaign</h4>
    <p>
      The campaign is a royal pain to optimize for because you are expected to
      change builds to clear different levels. By focusing on the popular builds
      (many of which are great campaign clearers) we can see that almost all of
      the builds are either pure attack or a mix of damage except for "The Tank"
      which is focused on survivability and not speed which isn't good for 3
      staring campaign maps. Overall, the subjective "best" build for clearing
      the campaign with 3 stars is the "The Pax", while a bit RNG heavy, is
      arguably the nest suited for 3 staring the most levels due to it's hybrid
      damage types. Given that the best builds for the campaign are more attack
      based we should prioritize attack over magic for these fights.
    </p>

    <h4>Arena</h4>
    <p>
      The arena is a very interesting place in Questland that has an EXTREMELY
      narrow meta towards the top of the leader board. This meta is usually a
      heal trigger weapon that stacks a particular color and on defense an
      offhand that procs a heal when the opponent heals. For dealing damage
      there are 2 different "standard" approaches. Deal a ton of physical damage
      to overcome armour while healing like a mad man (Bloodlust) or screw the
      enemies armour completely and focus on hitting their HP while keeping your
      armour high to fend of attack builds (Chilling Cold). In arena this
      specialization means you can use either attack or magic as long as you
      decide which approach you want.
    </p>

    <h4>Battle Event</h4>
    <p>
      The battle event is the key focus of Questland's late game as it has great
      rewards for both guilds and individuals. The Battle Events are themed
      either red spirits or blue spirits which alternate each week. For the red
      spirit events the big boss mechanic is a 1 shot every 14 rounds. For the
      blue spirit event the boss will attack with both regular attacks and magic
      attacks meaning you need a well rounded defense. The blue event you can
      easily setup a build that will never die (until the max round counter of
      100). However, the red event actually has a pretty steep dps check of 28
      rounds WITH your offhand needing to be a resurrection item. For Battle
      Events prioritizing attack due to the dps check makes the most sense.
    </p>

    <h3>Dealing with staying alive: Health vs Defense</h3>
    <h4>Campaign</h4>
    <p>Contains enemies that will bypass armour so health is the best stat.</p>

    <h4>Arena</h4>
    <p>
      The most popular arena talent is probably Chilling Cold which bypasses
      most armour, so the winner is also health.
    </p>

    <h4>Battle Event</h4>
    <p>
      This event in the solo player and guild side of things is 100% about
      survivability first (only guild pushing may make some DPS optimizations).
      Since surviving is the primary issue and most bosses have "nuke" attack
      which you need to survive the more hp you have the more likely you are to
      be able to live and push your scores higher. Since, bosses can have magic
      damage OR your build may not have armor regen health is always better.
    </p>

    <h3>Stat Conclusion</h3>
    <p>
      Attack is USUALLY better than Magic, but health is almost ALWAYS better
      than defense. When looking at gear in Questland it's easy to find gear
      link bonuses with a 30% attack and an orb bonus of 15% health. However, if
      you look at most good Magic gear you usually find gear with a 30% magic
      bonus and a 15% defense. This means it is VERY hard to get a solid magic +
      health build, but very easy to get an attack + health build. This gearing
      trend also makes attack extremely favorable and you will see that a large
      number of hall of fame players are only wearing 30% attack bonus with 15%
      health bonus gear.
    </p>
  </Paper>
);
