import { QlBuild } from '../components/BuildExpansionPanel';
import { Typography } from '@material-ui/core';
import * as React from 'react';

export const TheHecatombus: QlBuild = {
  buildTitle: 'The Hecatombus',
  weapon1: 'Hecatombus',
  weapon2: 'Azazel Shield',
  talent1: 'BloodLust',
  talent2: 'Transcendental Tornado',
  talent3: 'Crest Guardian',
  description: `This is the defacto go to build for anyone focusing on attack \
    and offers and impressive level of healing and damage.`,
  playstyle: (
    <Typography>
      Hit 1 white or 1 blue to trigger a heal which will add 2 red to your board
      from Hecatombus. Repeat this until you have one or more 4 red available.
      Use 4 red which will deal damage and heal you as well as trigger a heal
      and damage boost from Azazel which procs the 1 white. Since you heal twice
      it will trigger Hecatombus twice and add 4 red to your board ensuring you
      will replenish or gain red spirits to continue comboing.
    </Typography>
  )
};

export const TheTurtle: QlBuild = {
  buildTitle: 'The Turtle',
  weapon1: 'Malachite Truncheon',
  weapon2: 'Depth of Despair',
  talent1: 'Inner Fire',
  talent2: 'Chilling Cold',
  talent3: 'Magic Thief',
  description: `This build is the exact opposite of the Hectacombus build and \
    focuses on magic damage first. It's referred to as the turtle because it \
    regenerates a large amount of armor and some health every turn making it \
    extremely difficult to kill.`,
  playstyle: (
    <Typography>
      Hit 1 red to trigger a heal which will add 2 blue to your board and
      generate 1 blue intensity. When you have 3 blue intensity instead of
      hitting 1 red switch to 1 white to potentially generate 4 blue instead of
      just 2. Once you have one or more 4 blue available, Continuously use 4
      blue which will generate significant armour regen. This will also trigger
      Depth of Despair to proc 1 red which will heal you and keep your blue
      intensity high. Since this build doesn't recover a full 4 blue you can go
      back to hitting 1 white if you have 3 intensity or 1 red if you don't to
      recover additional blue spirits.
    </Typography>
  )
};

export const RatchetRush: QlBuild = {
  buildTitle: 'Ratchet Rush',
  weapon1: 'Ratchet Hatchet',
  weapon2: 'Azazel Shield',
  talent1: 'Inner Fire',
  talent2: 'Faerie Flame',
  talent3: 'Elevation',
  description: `This build is the old attack king build before Hecatombus was \
    released. It is ideal for situations where you need to avoid healing, but \
    still need a strong damage output.`,
  playstyle: (
    <Typography>
      This build has a slower start than Hecatombus, but it works by spamming 1
      blue or 1 white until you have 4 red available. Once you have 4 red
      available spam 4 red as often as possible. When you use 4 red you will add
      1 red to the board and trigger 1 blue and 1 white from Ratchet Hatchet and
      Azazels which additionally gives you armour and 2 more reds on the board.
    </Typography>
  )
};

export const ThePAX: QlBuild = {
  buildTitle: 'The PAX',
  weapon1: 'The PAX',
  weapon2: 'Depth of Despair',
  talent1: 'Fist of Frenzy',
  talent2: 'Faerie Flame',
  talent3: 'Magic Thief',
  description: `This build is famous for it's insanely high RNG based damage \
    and it's ability to clear almost any level in the campaign when RNG is in \
    your favor.`,
  playstyle: (
    <Typography>
      This build is extremely heavy on chance based triggers, but when
      everything triggers it can pull some insane dps, but the healing is very
      unreliable and there is no armor recovery. You open the build with
      spamming 1 white to generate blue spirits until you have 4 blue available.
      Then you spam 4 blue as often as possible which will grant you blue
      intensity and when your blue intensity builds up you have a change to
      trigger 2 red which can heal you and grant 1 blue to the board. Since both
      Pax and Depth of Despair are equipped both a 1 white and 1 red will be
      triggered. 1 red will grant you an additional 1 blue to the board. The 1
      white will grant you 1-2 blue to the board and when your intensity reaches
      level 3 you will also have a high chance at an additional 1 red
      triggering.`
    </Typography>
  )
};

export const TheArmourBuster: QlBuild = {
  buildTitle: 'The Armour Buster',
  weapon1: 'The Sanguiner / Sir Malicious',
  weapon2: 'Any off hand with Resurrection',
  talent1: 'Inner Fire',
  talent2: 'Elemental Wisdom',
  talent3: 'Elevation',
  description: `This build is for bosses that stack huge amounts of armour and \
    it takes a long time for a striker to break through that armour. It can \
    also help in red events breaking the armour so your striker doesn't need \
    to worry about hitting the second instant kill if their multiplier is too \
    low. NOTE: If it is a blue event make sure you either use blue event orbs \
    or no event orbs.`,
  playstyle: (
    <Typography>
      You basically want to spam 2 red as much as possible which will burn 5% of
      the enemy shield (10% with intensity) this will also trigger an additional
      5% of the enemy shield with your primary weapon. You can use 2 blue if
      there is no 2 red available and as a fallback option 1 white.
      <br />
      <br />
      Perfect storm:
      <ol>
        <li>use 2 red: 10% enemy shield</li>
        <li>use 2 red: 10% enemy shield</li>
        <li>use 2 red: 10% enemy shield (max red intensity)</li>
        <li>Boss kills you and you get resurrected</li>
        <li>use 2 red: 15% enemy shield</li>
        <li>use 2 red: 15% enemy shield</li>
        <li>use 2 red: 15% enemy shield</li>
        <li>Boss kills you permanently</li>
      </ol>
      Ignoring your damage you have removed 75% of the enemy's shield.
    </Typography>
  )
};

export const TheAssassin: QlBuild = {
  buildTitle: 'The Assassin',
  weapon1: `Any * it's not a bad idea to use a talent + weapon combo to \
    generate more red spirits`,
  weapon2: 'Any off hand with Resurrection',
  talent1: "Assassin's way",
  talent2: 'Frost Breath / Chilling Cold',
  talent3: 'any / Elevation (for extra reds)',
  description: `This build is perfect for the moment when your striker hits a \
  bad patch of rng and pops up in guild chat with a sad face :( The Assassin \
  is the perfect build to have on your roster for helping to clear up any \
  messed up boss kill giving you a nice 15% of the bosses' health margin where \
  a player with 2 tickets can actually finish the boss off!`,
  playstyle: (
    <Typography>
      The general principle is to make sure you keep the 1 red poison chewing
      away at the boss. During this fight try to 2 red right before the boss
      attacks to boost your dodge chance. Similar to the dodge try and arrange a
      4 blue stun to by yourself extra time damaging the boss.
    </Typography>
  )
};

export const FireBlaster: QlBuild = {
  buildTitle: 'The Fire Blaster',
  weapon1: `Hecatombus`,
  weapon2: 'Windwolf Shield',
  talent1: 'Inner Fire',
  talent2: 'Chilling Cold',
  talent3: 'Sacred Rage',
  description: `Great for heroes with good attack stats`,
  playstyle: (
    <Typography>
      This build primarily leverages 4R Inner Fire to blast down an opponent. If
      you happen to have a 4B for free damage & stun feel free to use it, but
      otherwise your normal tactic will be to use a 2W to trigger a heal and
      start a back and forth chaining mess with your opponent to flood your
      board with red spirits. Usually after this it only takes 2 or 3 attacks to
      completely kill your opponent due to Inner Fire's crazy damage output.
    </Typography>
  )
};

export const IceCannon: QlBuild = {
  buildTitle: 'The Ice Cannon',
  weapon1: `Malachite Truncheon`,
  weapon2: 'Windwolf Shield',
  talent1: 'Inner Fire',
  talent2: 'Chilling Cold',
  talent3: 'White Witchcraft',
  description: `Great for heroes with good magic stats`,
  playstyle: (
    <Typography>
      This build primarily leverages the insanely strong offensive and defensive
      potential of 4B Chilling Cold. Between stuns and flat out not caring about
      opponent's shield regeneration you can't get much better than this. Inner
      fire is more of a placeholder since our opener is typically a 2w to start
      a chain healing competition to flood our board with blue spirits. After
      you have the spirits all you need to do is spam 4B until the opponent is
      dead. Enjoy stunning them and recharging your whole shield.
    </Typography>
  )
};

export const ThePAXAntiHealEdition: QlBuild = {
  buildTitle: 'The Fire Blaster',
  weapon1: `The PAX`,
  weapon2: 'Depth of Despair (anti-magic) / Thunderbash (anti-physical)',
  talent1: 'Bloodlust',
  talent2: 'Chilling Cold',
  talent3: 'Magic Thief',
  description: `Stronger on magic builds, but still works well for physical`,
  playstyle: (
    <Typography>
      This build has a tough start if you get bad rng, but the goal is to reach
      3 intensity and chain like a crazy person from your 4B. For the opener I
      recommend trying to launch a 4B quickly to get an early stun and buy you
      some time. Use 1W to generate more blues and 1R to generate your
      intensity. The moment you hit 3 intensity this build will supply you with
      easy supply of blue spirits for smashing your opponent's face in with 4Bs.
      You will immediately disable a ton of defensive builds in arena due to
      completely ignoring healing. I recommend targeting primarily physical
      builds with this setup since your only defense is against physical damage.
    </Typography>
  )
};
