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

export const ArenaPage = () => {
  const classes = useStyles();

  return (
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
        issues at all. My personal favorite build fo this is <b>The Turtle</b>.
        At higher levels things get to be a little trickier due to the presence
        of super strong anti-healing builds. The builds below should serve you
        well.
      </p>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            The Fire Blaster (Great for heroes with good attack stats)
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <h4>Weapons</h4>
            <ul>
              <li>Hecatombus</li>
              <li>Windwolf Shield</li>
            </ul>

            <h4>Talents</h4>
            <ul>
              <li>Inner Fire</li>
              <li>Chilling Cold</li>
              <li>Sacred Rage</li>
            </ul>

            <h4>Playstyle</h4>
            <p>
              This build primarily leverages 4R Inner Fire to blast down an
              opponent. If you happen to have a 4B for free damage & stun feel
              free to use it, but otherwise your normal tactic will be to use a
              2W to trigger a heal and start a back and forth chaining mess with
              your opponent to flood your board with red spirits. Usually after
              this it only takes 2 or 3 attacks to completely kill your opponent
              due to Inner Fire's crazy damage output.
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
            The Ice Cannon (Great for heroes with good magic stats)
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <h4>Weapons</h4>
            <ul>
              <li>Malachite Truncheon</li>
              <li>Windwolf Shield</li>
            </ul>

            <h4>Talents</h4>
            <ul>
              <li>Inner Fire</li>
              <li>Chilling Cold</li>
              <li>White Witchcraft</li>
            </ul>

            <h4>Playstyle</h4>
            <p>
              This build primarily leverages the insanely strong offensive and
              defensive potential of 4B Chilling Cold. Between stuns and flat
              out not caring about opponent's shield regeneration you can't get
              much better than this. Inner fire is more of a placeholder since
              our opener is typically a 2w to start a chain healing competition
              to flood our board with blue spirits. After you have the spirits
              all you need to do is spam 4B until the opponent is dead. Enjoy
              stunning them and recharging your whole shield.
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
            The PAX anti-heal edition (stronger on magic builds)
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <h4>Weapons</h4>
            <ul>
              <li>The PAX</li>
              <li>
                Depth of Despair (anti-magic) / Thunderbash (anti-physical)
              </li>
            </ul>

            <h4>Talents</h4>
            <ul>
              <li>BloodLust</li>
              <li>Chilling Cold</li>
              <li>Magic Thief</li>
            </ul>

            <h4>Playstyle</h4>
            <p>
              This build has a tough start if you get bad rng, but the goal is
              to reach 3 intensity and chain like a crazy person from your 4B.
              For the opener I recommend trying to launch a 4B quickly to get an
              early stun and buy you some time. Use 1W to generate more blues
              and 1R to generate your intensity. The moment you hit 3 intensity
              this build will supply you with easy supply of blue spirits for
              smashing your opponent's face in with 4Bs. You will immediately
              disable a ton of defensive builds in arena due to completely
              ignoring healing. I recommend targeting primarily physical builds
              with this setup since your only defense is against physical
              damage.
            </p>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <h3>Defensive arena setup</h3>
      <p>
        Defensive arena setup is really a just a mirror of looking at the most
        powerful offensive builds in the game. Almost all of them leverage
        healing for spirit generation and consistent damage output.
      </p>

      <h3>The meta defense</h3>
      <p>
        Basically equip any shield that has "when opponent heals trigger 2
        white" Then leverage Sacred Rage or White Witchcraft as a backup. Equip
        the rest of either "Hectacombus" or "The Turtle" from the popular
        builds. The entire meta is basically just punish healing while enabling
        your own dps. This defensive setup will make anyone lower geared, or a
        bit above your gear level significantly hesitate before engaging you and
        have a dramatically lower chance of winning. As an alternative for
        higher ranking players give "The Fire Blaster" a try on defense. It is
        suprisingly strong at punishing the most popular attack builds.
      </p>
    </Paper>
  );
};
