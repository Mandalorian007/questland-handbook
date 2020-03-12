import React, { useEffect } from 'react';
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector as useReduxSelector
} from 'react-redux';
import { AppState } from '../../store/rootReducer';
import { BattleLocation, Stage, StageMob } from '../../domain/battleLocation';
import { loadBattleLocations } from '../../store/battleLocationActions';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { type } from 'os';
import { ColumnData } from '../../components/PagingSortingTable';
import { getComparator, stableSort } from '../../lib/sort';

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

interface MonsterEntry {
  monsterName: string;
  points: number;
}

interface StageScore {
  battleLocation: string;
  stage: string;
  score: number;
}

const useSelector: TypedUseSelectorHook<AppState> = useReduxSelector;

const extractMonsterNames = (battleLocations: BattleLocation[]) => {
  const monsterNames: Set<string> = new Set();

  let battleLocation: BattleLocation;
  for (battleLocation of battleLocations) {
    let stage: Stage;
    for (stage of battleLocation.stages) {
      let mob: StageMob;
      for (mob of stage.stageMobs) {
        monsterNames.add(mob.name);
      }
    }
  }
  return Array.from(monsterNames).sort();
};

export const MonsterSlayerCalcPage: React.FC<{}> = () => {
  const defaultMonsterEntry: MonsterEntry = {
    monsterName: '',
    points: 0
  };

  const classes = useStyles();
  const battleLocations: BattleLocation[] = useSelector(
    state => state.battleLocationState.battleLocations
  );
  const monsterNames = useSelector(state =>
    extractMonsterNames(state.battleLocationState.battleLocations)
  );
  const [monsterEntries, setMonsterEntries] = React.useState<MonsterEntry[]>([
    defaultMonsterEntry
  ]);
  const [stageScores, setStageScores] = React.useState<StageScore[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBattleLocations());
  }, [dispatch]);

  const addMonsterEntry = () => {
    const newEntry: MonsterEntry = {
      //TODO figure out how to default a valid monster name here
      monsterName: monsterNames[0],
      points: 0
    };
    setMonsterEntries((prevState: MonsterEntry[]) => [...prevState, newEntry]);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const scoredLevels = scoreLevels(monsterEntries);
    console.log(scoredLevels);
    setStageScores(scoredLevels);
  };

  const handleMonsterChange = (e: any, index: number) => {
    monsterEntries[index].monsterName = e.target.innerHTML;
  };

  const handlePointsChange = (e: any, index: number) => {
    monsterEntries[index].points = parseInt(e.target.value);
  };

  const scoreLevels = (monsterEntries: MonsterEntry[]) => {
    let stageScores: StageScore[] = [];
    battleLocations.forEach(battleLocation => {
      battleLocation.stages.forEach(stage => {
        let score: number = 0;
        stage.stageMobs.forEach(mob => {
          monsterEntries.forEach(entry => {
            if (entry.monsterName === mob.name) {
              score = score + mob.count * entry.points;
            }
          });
        });

        const currentStageScore: StageScore = {
          battleLocation: battleLocation.name,
          stage: stage.name,
          score: score
        };

        // Logic don't show 0 score levels and sort by highest to lowest
        if (currentStageScore.score > 0) {
          stageScores.push(currentStageScore);
        }
        stageScores = stableSort(
          stageScores,
          getComparator<StageScore>('desc', 'score')
        );
      });
    });
    return stageScores;
  };

  return (
    <Paper>
      <h1>Monster Slayer Calculator</h1>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Button
          style={{ display: 'block' }}
          variant="contained"
          size="small"
          color="primary"
          onClick={addMonsterEntry}
        >
          Add a new monster
        </Button>
        {monsterEntries.map((monsterEntry, index) => {
          return (
            <div key={index} style={{ display: 'block' }}>
              <Autocomplete
                id="monster-selector"
                options={monsterNames}
                getOptionLabel={option => option}
                style={{ width: 300, display: `inline - flex` }}
                onChange={(e: any) => handleMonsterChange(e, index)}
                renderInput={params => (
                  <TextField
                    {...params}
                    label="Monster Selector"
                    variant="outlined"
                  />
                )}
              />
              <TextField
                id="standard-number"
                label="Points"
                type="number"
                defaultValue={0}
                onChange={(e: any) => handlePointsChange(e, index)}
              />
            </div>
          );
        })}
        <Button
          type="submit"
          style={{ display: 'block' }}
          variant="contained"
          size="small"
          color="primary"
        >
          Calculate Level Points
        </Button>
      </form>
      <Divider />
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Battle Location</TableCell>
              <TableCell>Stage</TableCell>
              <TableCell>Score</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stageScores.map(stageScore => {
              return (
                <TableRow key={stageScore.stage}>
                  <TableCell>{stageScore.battleLocation}</TableCell>
                  <TableCell>{stageScore.stage}</TableCell>
                  <TableCell>{stageScore.score}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};
