import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1)
    },
    '& .MuiAutocomplete-root': {
      margin: theme.spacing(1),
      display: `inline-flex`
    }
  }
}));

export const MonsterPointSelector: React.FC<{
  monsterNames: string[];
}> = ({ monsterNames }) => {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Autocomplete
        id="monster-selector"
        options={monsterNames}
        getOptionLabel={option => option}
        defaultValue={monsterNames[0]}
        style={{ width: 300, display: `inline - flex` }}
        renderInput={params => (
          <TextField {...params} label="Monster Selector" variant="outlined" />
        )}
      />
      <TextField
        id="standard-number"
        label="Points"
        type="number"
        defaultValue={0}
      />
    </form>
  );
};
