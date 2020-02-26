import * as React from 'react';
import { Paper } from '@material-ui/core';

export const OldCollectionsPage = () => (
  <Paper>
    <h1>Collections</h1>
    <p>
      Collections are an absolute powerhouse, but a bit complicated so let's
      break them down piece by piece to avoid confusion. Make sure you have
      first read about Gear Bonuses before trying to understand collections.
    </p>
    <h3>Unlocking and leveling Collections</h3>
    <p>
      Collections will benefit you the most by simply unlocking them before
      bothering to level them. After you have all the slots in a collection
      unlocked simply level them up evenly till you hit 220% before focusing on
      getting a single slot up to level 250% which becomes really hard since
      scrolls have large diminishing returns at this point.
    </p>
    <h3>Collection slot stat</h3>
    <p>
      Every collection slot will be focused on a particular stat: health,
      attack, magic, or defense. The goal is to socket high potential items with
      high values for a given stat into that slot. One what to think about this
      is that the collection is a filter. It will ignore every stat on the
      socketed piece of gear except for the stat for that slot.
    </p>
    <h3>Gear links in Collections</h3>
    <p>
      It is important to note that bonuses from gear links will work, so try to
      line up your gear link bonuses as well (Gear that is equipped OR in either
      collection can all link with each other). Increases from gear level will
      be completely ignored so leave your collection gear at level 1.
      <br />
      <br />
      Note: Getting an optimized collection is extremely difficult, but can
      easily afford you a HUGE power boost so it is worth the pain.
    </p>
    <h3>Collections recommendations</h3>
    <p>
      The perfect scenario would be every Attack, Magic, and Defense slot has an
      equipped piece of gear that has high potential and it's gear link lined up
      with the equipped slot so you have a 30% bonus on each of these pieces.
      Then you can use the health slots to make sure you have all your gear
      links filled out and hopefully these "filler" pieces in the health slots
      also have high health. In reality this is very hard which is why you see
      most players stick to wearing 1-2 different sets to make Collections a bit
      easier to work out.
      <br />
      <br />
      Hopefully in the future we will have a tool to "auto-solve" collections
      for you.
    </p>
    <h3>
      Understanding collections with respect to balanced vs focused builds
    </h3>
    <p>
      Collection Analysis for new link system (I will eventually rework this
      info to here)
      <br />
      <a href="https://docs.google.com/document/d/17YQPAsSc0ceVwgv_ZUADImQBwBXqGmeoipztyUZb3EM">
        Collection Analysis
      </a>
    </p>
  </Paper>
);
