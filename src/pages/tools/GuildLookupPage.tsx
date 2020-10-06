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
import { Guild, GuildMember } from '../../domain/guild';

export const GuildLookupPage: React.FC<{}> = () => {
  const [guildName, setGuildName] = React.useState<string>('');
  const [serverName, setServerName] = React.useState<string>('GLOBAL');
  const initialState = {
    guildId: 0,
    server: '',
    name: '',
    description: '',
    level: 0,
    currentMemberCount: 0,
    maximumMemberCount: 0,
    healthResearchLevel: 0,
    attackResearchLevel: 0,
    defenseResearchLevel: 0,
    magicResearchLevel: 0,
    guildMembers: []
  };
  const [guild, setGuild] = React.useState<Guild>(initialState);

  const handleGuildNameChange = (e: any) => {
    setGuildName(e.target.value);
  };

  const handleServerNameChange = (e: any) => {
    setServerName(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    let url = `https://questland-public-api-dot-questland-tools.uc.r.appspot.com/guild/${encodeURIComponent(
      guildName
    )}?server=${serverName}`;
    fetch(url)
      .then(res => res.json())
      .then(json => {
        if ('guildId' in json) {
          setGuild(json);
        } else {
          alert(
            `Couldn't find guild with name: ${guildName} on server: ${serverName}`
          );
        }
      });
  };

  return (
    <Paper>
      <h1>Questland Guild Lookup</h1>
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
          type="submit"
          style={{ display: 'block' }}
          variant="contained"
          size="small"
          color="primary"
        >
          Load Guild Information
        </Button>
      </form>
      <br />
      <br />
      <Divider />
      <h2>Guild Stats</h2>
      <TableContainer>
        <Table aria-label="simple table">
          <TableBody>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>{guild.name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Description</TableCell>
              <TableCell>{guild.description}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Level</TableCell>
              <TableCell>{guild.level}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Membership</TableCell>
              <TableCell>
                {guild.currentMemberCount + '/' + guild.maximumMemberCount}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Research (attack, defense, health, magic)</TableCell>
              <TableCell>
                {guild.attackResearchLevel +
                  ',' +
                  guild.defenseResearchLevel +
                  ',' +
                  guild.healthResearchLevel +
                  ',' +
                  guild.magicResearchLevel}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      {guildMemberTable('Guild Master', 'owner', guild.guildMembers)}
      {guildMemberTable('Officers', 'officer', guild.guildMembers)}
      {guildMemberTable('Guild Members', 'member', guild.guildMembers)}
    </Paper>
  );
};

const guildMemberTable = (
  title: string,
  filterTerm: string,
  guildMembers: GuildMember[]
) => {
  return (
    <div>
      <h2>{title}</h2>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Hero</TableCell>
              <TableCell>Level</TableCell>
              <TableCell>Hero Power</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {guildMembers
              .filter(guildMember => guildMember.guildRank === filterTerm)
              .sort((a, b) => b.heroPower - a.heroPower)
              .map(guildMember => {
                return (
                  <TableRow key={guildMember.id}>
                    <TableCell>{guildMember.name}</TableCell>
                    <TableCell>{guildMember.level}</TableCell>
                    <TableCell>{guildMember.heroPower}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
