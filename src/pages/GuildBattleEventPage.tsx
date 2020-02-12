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

export const GuildBattleEventPage = () => {
  const classes = useStyles();

  return (
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
        Everyone will receive 198 guild boss tickets during the battle event.
        And no matter how many tickets you spend on a guild boss when it dies
        you will receive the same reward for killing it. It's also worth noting
        that killing a higher level boss will grant you more points up to level
        150. 150 is also the level that the guild boss stops getting stronger.
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
        bosses take a while to kill at this high level it is recommended you
        have 2 or more joint pushes with the final push being right at the end
        of the event.
      </p>

      <h2>Custom Guild boss builds</h2>

      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>The Armour Buster</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <p>
              This build is for bosses that stack huge amounts of armour and it
              takes a long time for a striker to break through that armour. It
              can also help in red events breaking the armour so your striker
              doesn't need to worry about hitting the second instant kill if
              their multiplier is too low. NOTE: If it is a blue event make sure
              you either use blue event orbs or no event orbs.
            </p>

            <h4>Weapons</h4>
            <ul>
              <li>The Sanguiner / Sir Malicious</li>
              <li>Any off hand with Resurrection</li>
            </ul>

            <h4>Talents</h4>
            <ul>
              <li>Inner Fire</li>
              <li>Elemental Wisdom</li>
              <li>Elevation</li>
            </ul>

            <h4>Playstyle</h4>
            <p>
              You basically want to spam 2 red as much as possible which will
              burn 5% of the enemy shield (10% with intensity) this will also
              trigger an additional 5% of the enemy shield with your primary
              weapon. You can use 2 blue if there is no 2 red available and as a
              fallback option 1 white.
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
          <Typography className={classes.heading}>The Assassin</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <p>
              This build is perfect for the moment when your striker hits a bad
              patch of rng and pops up in guild chat with a sad face :( The
              Assassin is the perfect build to have on your roster for helping
              to clear up any messed up boss kill giving you a nice 15% of the
              bosses' health margin where a player with 2 tickets can actually
              finish the boss off!
            </p>

            <h4>Weapons</h4>
            <ul>
              <li>
                Any * it's not a bad idea to use a talent + weapon combo to
                generate more red spirits
              </li>
              <li>Any off hand with Resurrection</li>
            </ul>

            <h4>Talents</h4>
            <ul>
              <li>Assassin's way</li>
              <li>- Frost Breath / Chilling Cold</li>
              <li>- any / Elevation (for extra reds)</li>
            </ul>

            <h4>Battle Event Links</h4>
            <p>Pickup some juicy dodge bonus</p>

            <h4>Playstyle</h4>
            <p>
              The general principle is to make sure you keep the 1 red poison
              chewing away at the boss. During this fight try to 2 red right
              before the boss attacks to boos your dodge chance. Similar to the
              dodge try and arrange a 4 blue stun to by yourself extra time
              damaging the boss.
            </p>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Paper>
  );
};
