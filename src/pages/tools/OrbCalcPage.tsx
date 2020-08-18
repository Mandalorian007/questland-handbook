import { Button, Divider, Paper } from '@material-ui/core';
import * as React from 'react';
import TextField from '@material-ui/core/TextField';

export const OrbCalcPage: React.FC<{}> = () => {
  const [baseStat, setBaseStat] = React.useState<number>(0);
  const [potential, setPotential] = React.useState<number>(0);
  const [enhance, setEnhance] = React.useState<number>(0);
  const [level, setLevel] = React.useState<number>(100);
  const [orbTotal, setOrbTotal] = React.useState<number>(0);

  const handleBaseStatChange = (e: any) => {
    setBaseStat(e.target.value);
  };
  const handlePotentialChange = (e: any) => {
    setPotential(e.target.value);
  };
  const handleEnhanceChange = (e: any) => {
    setEnhance(e.target.value);
  };
  const handleLevelChange = (e: any) => {
    setLevel(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    let url = `https://questland-public-api.cfapps.io/orbs/calc?basestat=${baseStat}&potential=${potential}&enhance=${enhance}&level=${level}`;
    fetch(url)
      .then(res => res.text())
      .then(orbTotal => setOrbTotal(parseInt(orbTotal)));
  };

  return (
    <Paper>
      <h1>Orb Stat Calculator</h1>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          id="standard-text"
          label="base stat"
          type="number"
          defaultValue={baseStat}
          onChange={(e: any) => handleBaseStatChange(e)}
        />
        <br />
        <br />
        <TextField
          id="standard-text"
          label="potential"
          type="number"
          defaultValue={potential}
          onChange={(e: any) => handlePotentialChange(e)}
        />
        <br />
        <br />
        <TextField
          id="standard-text"
          label="enhance"
          type="number"
          defaultValue={enhance}
          onChange={(e: any) => handleEnhanceChange(e)}
        />
        <br />
        <br />
        <TextField
          id="standard-text"
          label="level"
          type="number"
          defaultValue={level}
          onChange={(e: any) => handleLevelChange(e)}
        />
        <br />
        <br />
        <Button
          type="submit"
          style={{ display: 'block' }}
          variant="contained"
          size="small"
          color="primary"
        >
          Calculate Orb Stats
        </Button>
      </form>
      <br />
      <br />
      <Divider />
      <h2>Orb Stats</h2>
      <div>{orbTotal}</div>
    </Paper>
  );
};
