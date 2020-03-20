import * as React from 'react';
import {
  createStyles,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Paper,
  Theme,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%'
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular
    }
  })
);

export const IndividualBattleEventPage = () => {
  const classes = useStyles();

  return (
    <Paper>
      <h1>Climbing the individual ladder in the battle event</h1>
      <p>
        The individual ladder in Questland and is probably the largest
        competitive scene next to the Guild ladder and is the perfect place to
        showcase your knowledge of the game and the effort you put into your
        build.
      </p>

      <h3>Multipliers and Links</h3>
      <p>
        In order to score at the top of the ladder you are going to have to
        invest some gems in order to stack your multiplier up nice and high. The
        core behind doing this involves a heavy focus on the event legendary
        items and orbs. Each of these items unlocks a powerful +15 multiplier
        with an additional +2.5 per boost. As opposed to the normal legendary
        items that grant you a +4 multiplier with and no boost at all.
        <br />
        <br />
        In addition to the stronger bonus the event legendary items and orbs
        provide you get some powerful and incredible link bonuses. The 3 core
        event legendary items and the legendary token unlock passive #2 which
        gives a 50% chance to proc a 4 white when you use either a 4 red or 4
        blue depending on the battle event. Having 4 legendary orbs will also
        stack your starting board with 8 additional red or blue spirits so you
        have way less wasted rounds building up.
        <br />
        <br />
        Links are also massively important for dealing with challenging bosses.
        Some extremely important bonuses to be aware of:
        <br />
        <br />
        Row 3: These bonuses are primarily for surviving difficult bosses
        <ul>
          <li>4% healing per round</li>
          <li>4% armour per round</li>
        </ul>
        <br />
        <br />
        It is also important to realize that if your healing and armour is
        sufficient you should simply socket your epic token (+12) and your
        friend token(+10) . Doing this will increase your health and damage and
        help to reduce the chance of being 1 shot.
        <br />
        <br />
        Row 4: This bonus is almost exclusively reserved for damage reduction
        <ul>
          <li>10% magic resistance</li>
          <li>10% melee resistance</li>
        </ul>
        <br />
        <br />
        In most cases these bonuses will be used to reduce the red boss's core
        damage attack and the blue bosses's strongest damage attack.
      </p>

      <h3>Acquiring your bonuses</h3>
      <p>
        How much money you are willing to spend to acquire bonuses tends to be a
        fairly personal decision. However, if you goal is to acquire all the
        event items and full legendary orbs here is the most efficient path.
        <br />
        <br />
        Top-up 6000 points over 2 days from the most expensive offers. This will
        grant you both of the legendary items and a 240K gems out of the minimum
        300K you will need. Use the 150 spins from the event spinner for a
        guaranteed legendary orb. Then sink gems into orb & parts until you get
        2 legendary orbs. In the extremely rare case you get 2 legendary orbs
        before you spend 300K gems for the free spend reward feel free to spend
        the rest of your gems on whatever you would like.
      </p>

      <h3>Ticket management</h3>
      <p>
        The techniques I am about to cover will typically be available for
        everyone, but you might not be able to wait for all crafts if you don't
        have a high enough VIP level. This is because you can have a larger
        amount of both boss and campaign tickets stored up with higher VIP
        levels.
        <ul>
          <li>
            Do not collect any tickets from your quest rewards as they are free
            ticket storage
          </li>
          <li>
            Do not collect any tickets from your campaign clear rewards as they
            are free storage.
          </li>
          <li>
            Do not clear every ticket you have for the campaign because it
            grants more boss tickets (Generally only spend campaign tickets on
            the first day)
          </li>
          <li>
            Watch your hp for clearing 2 ticket bosses to make sure you won't
            die so you know how far you can safely push and don't go past that
            point.
          </li>
        </ul>
        These above strategies are the trick to keeping your tickets from
        overflowing. However, there is one complication. In order to score as
        high as possible you also need to be purchasing boss tickets daily. In a
        low competition bracket you can skip the green boss tickets, but you
        definitely need the red tickets to score very highly. This means you
        will have extra boss tickets you need to keep under the cap. DO NOT
        purchase the Boss tickets pack unless it is the final day and doing so
        will push you up a scoring bracket with some big rewards. Remember that
        pack is a once per event so definitely don't purchase it early and don't
        waste gems if it won't win you anything.
        <br />
        <br />
        In terms of pacing for tickets it is usually safe to burn all your
        campaign and boss tickets you get on the first day.
      </p>

      <h3>Boss killing timings</h3>
      <p>
        When killing bosses it is absolutely critical to keep track of the %hp
        you land at after receiving an attack. The attack you want to track is
        whichever one is more likely to kill you first. Typically this is the
        secondary more powerful boss attack in blue events and the primary boss
        attack in red events. If you are in a red event, you won't be
        regenerating armour so keep in mind you should measure from the attack
        that hits you without armour. By keeping track of the last 3-4 of these
        numbers you can have a fairly reliable prediction of how dangerous the
        next level of boss will be for you and if you can safely handle it or if
        you need to stop and build your multiplier higher.
      </p>

      <h3>Boss killing builds and Techniques</h3>
      <p>
        Bossing generally involve transitioning from 2 tickets to 4 tickets, and
        then again to 6 tickets. Along the way there are build adjustments that
        introduce more RNG risk for the potential of more boss kills. A large
        amount of this RNG risk can be mitigated with having more legendary
        orbs.
        <br />
        <br />
        As a note there are some strategies even more advanced than this that
        will not be covered here as we are interested in the fundamentals.
      </p>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Red Boss Strategy</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <p>
              Starting out the red boss is exceptionally easy and we will simply
              be using "The Hecatombus" build from the popular builds page.
              There are a few things to discuss with event links here.
            </p>
            <ul>
              <li>
                If you have passive #1 use sacred rage instead of crest guardian
                (you can use white witchcraft to try and reduce magic damage,
                but it will make tracking health less reliable so I usually
                don't recommend this)
              </li>
              <li>You want 4% armour regen for your 3rd row of links.</li>
              <li>
                You want magic or melee resistance for your 4th row of links
                depending on the boss's first ability damage type.
              </li>
            </ul>
            <p>
              You will keep using this build until you realize that you no
              longer have enough armour regen to keep your armour up for the
              bosses attacks. Usually around this same point is when you will
              realize that the boss's attacks will probably kill you without
              armour so make sure you are paying attention so you don't lose
              unnecessary tickets.
            </p>
            <h5>Phase 2: Armour Regeneration</h5>
            <p>
              At this point we need armour regen so we need to swap Crest
              Guardian out for Elevation. This swap reduces our red spirit
              generation from 4 per round to 3 which is why we don't use it
              right away. A word of caution for passive #1 users if you have god
              tier luck you can actually reach 3 intensity which will start
              generating blue spirits and cause a mess. You might want to
              disable your passive for this phase.
              <br />
              <br />
              This phase will either end with the boss being able to kill you
              with your armor regeneration or you not being able to generate
              enough armour to prevent the boss from killing you. Don't panic as
              this is a normal point in the progression and you will have to
              pause to consider if you want to level up your orbs, get more
              event multi boosts, or just consider pushing.
            </p>
            <h5>Phase 3: Squeeze out those tickets</h5>
            <p>
              At this point we are accepting we can't kill the boss with any
              more 2 tickets, but we aren't ready to switch to 6 tickets. So we
              are going to drop our 4% armor regen for a physical damage
              increase OR as much multi as we can get into those slots. This
              phase is all about high damage output because the boss will
              definitely kill us, but we need to deal as much damage in a short
              window as possible so that we can finish the boss off with 2
              attacks which will only consume 4 tickets instead of 6. Once we
              are only doing about 60% of the boss's health in damage it's about
              time to consider going to the final phase.
            </p>
            <h5>Phase 4: Finishing off the boss</h5>
            <p>
              At this point we are resetting to our original strategy in
              aspects, except that we are attacking with 6 tickets instead of 2.
              If the boss gets very strong again feel free to repeat the above
              steps.
            </p>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            Blue Boss Strategy
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <p>
              Starting out the blue boss is exceptionally easy and we will
              simply be using "The Turtle" build from the popular builds page.
              There are a few things to discuss with event links here.
            </p>
            <ul>
              <li>
                If you have passive #1 use sacred rage instead of crest guardian
                (you can use white witchcraft to try and reduce magic damage,
                but it will make tracking health less reliable so I usually
                don't recommend this)
              </li>
              <li>
                If you have passive #2 use healing winds for a perfect full
                health heal
              </li>
              <li>You want 4% health regen for your 3rd row of links.</li>
              <li>
                You want magic resistance for your 4th row of links to reduce
                damage from the boss's strongest hitting attack.
              </li>
            </ul>
            <p>
              You will keep using this build until you realize that you no
              longer have enough armour and health after the boss's strong
              attack.
            </p>
            <h5>Phase 2: Squeeze out those tickets</h5>
            <p>
              If you are into a risky advanced tactic skip Phase 2 and see Phase
              2.5 otherwise continue with the below strategy.
              <br />
              <br />
              At this point we are accepting we can't kill the boss with any
              more 2 tickets, but we aren't ready to switch to 6 tickets. So we
              are going to drop our 4% health regen for as much multi as we can
              get into those slots. This phase is all about high damage output
              because the boss will definitely kill us, but we need to deal as
              much damage in a short window as possible so that we can finish
              the boss off with 2 attacks which will only consume 4 tickets
              instead of 6. Once we are only doing about 60% of the boss's
              health in damage it's about time to consider going to the final
              phase.
            </p>
            <h5>Phase 2.5: Rolling the dice</h5>
            <p>
              This stage is for experienced players with high hero power, high
              multi, and a full 4 legendary orbs, and passive #2 only and I
              STRONGLY advise practicing this build by removing some gear and
              fighting the easy boss. This build is only mentioned because of
              the insane number of extra levels achievable.
              <br />
              <br />
              The theory behind this build is accepting that the boss is simply
              too strong for us, but realizing that we can leverage several in
              game mechanics to turn things into our favor.
              <br />
              Build changes:
              <ul>
                <li>Swap Depth of Despair for The Scaleward</li>
                <li>Swap your white talent spot for White Guardian</li>
              </ul>
              Let's talk about how this works. We are accepting that we cannot
              survive the boss's melee attack or it's magic attack. So we are
              going to rely on stuns to save us from melee attacks and a
              combination of magic resistance, magic stat reduction, and
              resurrection to handle the boss's strong attack. It is critical
              that we never hit 3 intensity and ruin our ability to stun. As a
              note resurrection does reset intensity. Assuming our board always
              has 100% blue spirits for ease of an example.
              <ol>
                <li>generate blue spirits or waste turn</li>
                <li>4B</li>
                <li>4B & Boss is stunned out of it's attack</li>
                <li>4B</li>
                <li>
                  4B & We either proc White Guardian and live (2 tickets used)
                  or we revive here (will need to repeat for 4 ticket kill)
                </li>
                <li>regenerate spirits or waste turn</li>
                <li>4B</li>
                <li>4B & Boss is stunned out of it's melee</li>
                <li>4B</li>
                <li>4B & either die or revive here</li>
                <li>regenerate spirits or waste turn</li>
                <li>4B</li>
                <li>4B & Boss is stunned out of it's melee</li>
                <li>4B</li>
                <li>4B & Die</li>
              </ol>
              This phase should be ended as soon as you aren't able to bring the
              boss down to 40% health by the second major boss attack. As a note
              this build can be achieved with just a rez and high DPS, but it is
              less reliable (At that point any blue talent that offers damage or
              spirit regen works).
            </p>
            <h5>Phase 3: Finishing off the boss</h5>
            <p>
              At this point we are resetting to our original strategy in
              aspects, except that we are attacking with 6 tickets instead of 2.
              If the boss gets very strong again feel free to repeat the above
              steps.
            </p>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Paper>
  );
};
