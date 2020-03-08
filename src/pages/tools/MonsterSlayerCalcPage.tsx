import React, { useEffect } from 'react';
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector as useReduxSelector
} from 'react-redux';
import { AppState } from '../../store/rootReducer';
import { BattleLocation, Stage, StageMob } from '../../domain/battleLocation';
import { loadBattleLocations } from '../../store/battleLocationActions';
import { MonsterPointSelector } from '../../components/MonsterPointSelector';

export const useSelector: TypedUseSelectorHook<AppState> = useReduxSelector;

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
  const battleLocations: BattleLocation[] = useSelector(
    state => state.battleLocationState.battleLocations
  );
  const monsterNames = useSelector(state =>
    extractMonsterNames(state.battleLocationState.battleLocations)
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBattleLocations());
  }, [dispatch]);

  return <MonsterPointSelector monsterNames={monsterNames} />;
};
