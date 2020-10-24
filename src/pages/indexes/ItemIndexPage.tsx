import React, { useEffect } from 'react';
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector as useReduxSelector
} from 'react-redux';
import { AppState } from '../../store/rootReducer';
import {
  Chip,
  FormControl,
  GridList,
  GridListTile,
  InputLabel,
  Select,
  TextField
} from '@material-ui/core';
import { loadItems } from '../../store/itemActions';
import { Item } from '../../domain/item';
import { useGridListCols } from '../../lib/responsiveList';
import { ItemCard } from '../../components/ItemCard';
import { Autocomplete } from '@material-ui/lab';
import { Emblem, getEmblems } from '../../domain/emblem';
import { Quality } from '../../domain/quality';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { getItemSlots, ItemSlot } from '../../domain/ItemSlot';
import { getComparator, stableSort } from '../../lib/sort';

export const useSelector: TypedUseSelectorHook<AppState> = useReduxSelector;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paddingForMe: {
      margin: theme.spacing(2)
    }
  })
);

interface ItemSortOption {
  value: keyof Item & string;
  label: string;
}

export const ItemIndexPage: React.FC<{}> = () => {
  const classes = useStyles();
  const sortOptions: ItemSortOption[] = [
    { value: 'totalPotential', label: 'Potential' },
    { value: 'attack', label: 'Attack' },
    { value: 'magic', label: 'Magic' },
    { value: 'defense', label: 'Defense' },
    { value: 'health', label: 'Health' }
  ];
  const emblems: Emblem[] = getEmblems();
  const qualities: Quality[] = [Quality.Epic, Quality.Legendary];
  const itemSlots: ItemSlot[] = getItemSlots();
  const itemSource: Item[] = useSelector(state => state.itemState.items);
  const [displayedItems, setDisplayedItems] = React.useState<Item[]>(
    itemSource
  );
  const [sortProperty, setSortProperty] = React.useState<keyof Item & string>(
    'totalPotential'
  );
  const [selectedEmblems, setSelectedEmblems] = React.useState<Emblem[]>(
    emblems
  );
  const [selectedQualities, setSelectedQualities] = React.useState<Quality[]>([
    Quality.Legendary
  ]);
  const [selectedItemSlots, setSelectedItemSlots] = React.useState<ItemSlot[]>(
    itemSlots
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadItems());
  }, [dispatch]);

  const configureDisplayedItems = (
    propertySort: keyof Item & string,
    qualities: Quality[],
    emblems: Emblem[],
    itemSlots: ItemSlot[]
  ) => {
    let items: Item[] = itemSource.filter(item =>
      qualities.includes(item.quality)
    );
    items = items.filter(item => emblems.includes(item.emblem));
    items = items.filter(item => itemSlots.includes(item.itemSlot));
    items = stableSort(items, getComparator<Item>('desc', propertySort));
    setDisplayedItems(items);
  };

  const onSortChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const sortProperty = event.target.value as keyof Item & string;
    setSortProperty(sortProperty);
    configureDisplayedItems(
      sortProperty,
      qualities,
      selectedEmblems,
      selectedItemSlots
    );
  };

  const onEmblemFilterChange = (event: any, values: any) => {
    const emblems = values as Emblem[];
    setSelectedEmblems(emblems);
    configureDisplayedItems(
      sortProperty,
      selectedQualities,
      emblems,
      selectedItemSlots
    );
  };

  const onQualityFilterChange = (event: any, values: any) => {
    const qualities = values as Quality[];
    setSelectedQualities(qualities);
    configureDisplayedItems(
      sortProperty,
      qualities,
      selectedEmblems,
      selectedItemSlots
    );
  };

  const onItemSlotFilterChange = (event: any, values: any) => {
    const itemSlots = values as ItemSlot[];
    setSelectedItemSlots(itemSlots);
    configureDisplayedItems(
      sortProperty,
      selectedQualities,
      selectedEmblems,
      itemSlots
    );
  };

  return (
    <>
      <FormControl className={classes.paddingForMe}>
        <InputLabel>Sort By</InputLabel>
        <Select value={sortProperty} onChange={onSortChange}>
          {sortOptions.map(sortOption => (
            <option value={sortOption.value}>{sortOption.label}</option>
          ))}
        </Select>
      </FormControl>
      <Autocomplete
        className={classes.paddingForMe}
        multiple
        id="Quality Filter"
        size="small"
        options={qualities}
        getOptionLabel={emblem => emblem}
        defaultValue={[Quality.Legendary]}
        onChange={onQualityFilterChange}
        renderTags={(value, getTagProps) =>
          value.map((quality, index) => (
            <Chip label={quality} {...getTagProps({ index })} />
          ))
        }
        renderInput={params => (
          <TextField {...params} label="Quality Filter" variant="outlined" />
        )}
      />
      <Autocomplete
        className={classes.paddingForMe}
        multiple
        id="Emblem Filter"
        size="small"
        options={emblems}
        getOptionLabel={emblem => emblem}
        defaultValue={emblems}
        onChange={onEmblemFilterChange}
        renderTags={(value, getTagProps) =>
          value.map((emblem, index) => (
            <Chip label={emblem} {...getTagProps({ index })} />
          ))
        }
        renderInput={params => (
          <TextField {...params} label="Emblem Filter" variant="outlined" />
        )}
      />
      <Autocomplete
        className={classes.paddingForMe}
        multiple
        id="Item Slot Filter"
        size="small"
        options={itemSlots}
        getOptionLabel={emblem => emblem}
        defaultValue={itemSlots}
        onChange={onItemSlotFilterChange}
        renderTags={(value, getTagProps) =>
          value.map((itemSlot, index) => (
            <Chip label={itemSlot} {...getTagProps({ index })} />
          ))
        }
        renderInput={params => (
          <TextField {...params} label="Item Slot Filter" variant="outlined" />
        )}
      />
      <GridList cellHeight={180} spacing={16} cols={useGridListCols()}>
        {displayedItems.map((item, index) => {
          return (
            <GridListTile key={index} cols={1}>
              <ItemCard item={item} />
            </GridListTile>
          );
        })}
      </GridList>
    </>
  );
};
