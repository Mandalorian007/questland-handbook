import {
  createStyles,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Theme,
  Typography
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';

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

export interface QlBuild {
  buildTitle: string;
  weapon1: string;
  weapon2: string;
  talent1: string;
  talent2: string;
  talent3: string;
  description: string;
  playstyle: React.ReactNode;
}

export const BuildExpansionPanel: React.FC<{
  qlBuild: QlBuild;
}> = props => {
  const classes = useStyles();
  const {
    buildTitle,
    weapon1,
    weapon2,
    talent1,
    talent2,
    talent3,
    description,
    playstyle
  } = props.qlBuild;

  return (
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading}>{buildTitle}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>
          <p>{description}</p>
          <h4>Weapons</h4>
          <ul>
            <li>{weapon1}</li>
            <li>{weapon2}</li>
          </ul>
          <h4>Talents</h4>
          <ul>
            <li>{talent1}</li>
            <li>{talent2}</li>
            <li>{talent3}</li>
          </ul>
          <h4>Playstyle</h4>
          <p>{playstyle}</p>
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};
