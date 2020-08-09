import React from 'react';
import { Paper } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

export const QeSmeltingCalcPage: React.FC<{}> = () => {
  const rareTicketPoints: number = 10;
  const epicTicketPoints: number = 30;

  const commonWeekendPoints: number = 9;
  const uncommonWeekendPoints: number = 30;
  const rareWeekendPoints: number = 90;
  const epicWeekendPoints: number = 200;
  const legendaryWeekendPoints: number = 1250;

  const [commons, setCommons] = React.useState<number>(0);
  const [uncommons, setUncommons] = React.useState<number>(0);
  const [rares, setRares] = React.useState<number>(0);
  const [epics, setEpics] = React.useState<number>(0);
  const [legendaries, setLegendaries] = React.useState<number>(0);

  const handleCommonChange = (event: any) => {
    setCommons(event.target.value);
  };
  const handleUncommonChange = (event: any) => {
    setUncommons(event.target.value);
  };
  const handleRareChange = (event: any) => {
    setRares(event.target.value);
  };
  const handleEpicChange = (event: any) => {
    setEpics(event.target.value);
  };
  const handleLegendaryChange = (event: any) => {
    setLegendaries(event.target.value);
  };

  return (
    <Paper>
      <h1>Quest Event Smelting Calculator</h1>
      <TextField
        id="standard-number"
        label="Count of Commons"
        type="number"
        defaultValue={commons}
        onChange={(e: any) => handleCommonChange(e)}
      />
      <br />
      <TextField
        id="standard-number"
        label="Count of Uncommons"
        type="number"
        defaultValue={uncommons}
        onChange={(e: any) => handleUncommonChange(e)}
      />
      <br />
      <TextField
        id="standard-number"
        label="Count of Rares"
        type="number"
        defaultValue={rares}
        onChange={(e: any) => handleRareChange(e)}
      />
      <br />
      <TextField
        id="standard-number"
        label="Count of Epics"
        type="number"
        defaultValue={epics}
        onChange={(e: any) => handleEpicChange(e)}
      />
      <br />
      <TextField
        id="standard-number"
        label="Count of Legendaries"
        type="number"
        defaultValue={legendaries}
        onChange={(e: any) => handleLegendaryChange(e)}
      />
      <br />
      <h4>
        Ticket Quest Event:{' '}
        {rareTicketPoints * rares + epicTicketPoints * epics}
      </h4>
      <h4>
        Weekend Quest Event:{' '}
        {commonWeekendPoints * commons +
          uncommonWeekendPoints * uncommons +
          rareWeekendPoints * rares +
          epicWeekendPoints * epics +
          legendaryWeekendPoints * legendaries}
      </h4>
    </Paper>
  );
};
