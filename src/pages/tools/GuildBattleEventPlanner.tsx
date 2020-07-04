import {
  Button,
  Divider,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@material-ui/core';
import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import { GuildPlan, HeroPlan } from '../../domain/guildPlan';

export const GuildBattleEventPlanner: React.FC<{}> = () => {
  const [guildName, setGuildName] = React.useState<string>('');
  const [serverName, setServerName] = React.useState<string>('GLOBAL');
  const [isDisabled, setDisabled] = React.useState<boolean>(false);
  const initialState: GuildPlan = {
    guildId: '',
    name: '',
    heroPlans: []
  };
  const [guildPlan, setGuildPlan] = React.useState<GuildPlan>(initialState);

  const handleGuildNameChange = (e: any) => {
    setGuildName(e.target.value);
  };

  const handleServerNameChange = (e: any) => {
    setServerName(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setDisabled(true);
    let url = `https://questland-public-api.cfapps.io/guild/plan/${encodeURI(
      guildName
    )}?server=${serverName}`;
    fetch(url)
      .then(res => res.json())
      .then(json => {
        if ('guildId' in json) {
          setGuildPlan(json);
        } else {
          alert(
            `Couldn't find guild with name: ${guildName} on server: ${serverName}`
          );
        }
        setDisabled(false);
      });
  };

  return (
    <Paper>
      <h1>Questland Guild Battle Event Planner</h1>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          id="standard-text"
          label="guild name"
          type="text"
          defaultValue={''}
          onChange={(e: any) => handleGuildNameChange(e)}
        />
        <br />
        <br />
        <InputLabel id="server-label">Server</InputLabel>
        <Select
          labelId="select-server-label"
          id="select-server"
          value={serverName}
          onChange={handleServerNameChange}
        >
          <MenuItem value={'GLOBAL'}>Global</MenuItem>
          <MenuItem value={'AMERICA'}>USA</MenuItem>
          <MenuItem value={'EUROPE'}>Europe</MenuItem>
          <MenuItem value={'VETERANS'}>Veterans</MenuItem>
          <MenuItem value={'ASIA'}>Asia</MenuItem>
        </Select>
        <br />
        <br />
        <Button
          disabled={isDisabled}
          type="submit"
          style={{ display: 'block' }}
          variant="contained"
          size="small"
          color="primary"
        >
          Generate Battle Event Plan (Please be patient this takes time)
        </Button>
      </form>
      <br />
      <br />
      <Divider />
      <h1>{guildPlan.name}'s Battle Event Planner</h1>
      {guildMemberPlanTable(guildPlan.heroPlans)}
    </Paper>
  );
};

const guildMemberPlanTable = (memberPlans: HeroPlan[]) => {
  return (
    <div>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Hero</TableCell>
              <TableCell>Hero Power</TableCell>
              <TableCell>Stats (Health, Attack, Defense, Magic)</TableCell>
              <TableCell>Battle Event Multiplier</TableCell>
              <TableCell>Row#1 Multiplier Link Bonus</TableCell>
              <TableCell>Row#2 Multiplier Link Bonus</TableCell>
              <TableCell>Row#3 Multiplier Link Bonus</TableCell>
              <TableCell>Row#4 Multiplier Link Bonus</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {memberPlans
              .sort((a, b) => b.heroPower - a.heroPower)
              .map(memberPlan => {
                return (
                  <TableRow key={memberPlan.id}>
                    <TableCell>{memberPlan.name}</TableCell>
                    <TableCell>{memberPlan.heroPower}</TableCell>
                    <TableCell>
                      {memberPlan.health +
                        ', ' +
                        memberPlan.attack +
                        ', ' +
                        memberPlan.defense +
                        ', ' +
                        memberPlan.magic}
                    </TableCell>
                    <TableCell>{memberPlan.battleEventMulti}</TableCell>
                    <TableCell>{memberPlan.row1Bonus}</TableCell>
                    <TableCell>{memberPlan.row2Bonus}</TableCell>
                    <TableCell>{memberPlan.row3Bonus}</TableCell>
                    <TableCell>{memberPlan.row4Bonus}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
