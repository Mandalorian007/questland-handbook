import React, {useEffect} from 'react';
import {TypedUseSelectorHook, useDispatch, useSelector as useReduxSelector} from 'react-redux';
import {AppState} from '../../store/rootReducer';
import {
    Chip,
    FormControl,
    GridList,
    GridListTile,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    TextField
} from '@material-ui/core';
import {loadItems} from '../../store/itemActions';
import {Item} from '../../domain/item';
import {useGridListCols} from '../../lib/responsiveList';
import {ItemCard} from '../../components/ItemCard';
import {Autocomplete} from '@material-ui/lab';
import {Emblem, getEmblems} from '../../domain/emblem';
import {Quality} from '../../domain/quality';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {getItemSlots, ItemSlot} from '../../domain/ItemSlot';
import {getComparator, stableSort} from '../../lib/sort';

export const useSelector: TypedUseSelectorHook<AppState> = useReduxSelector;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paddingForMe: {
            margin: theme.spacing(2)
        },
        formControl: {
            margin: theme.spacing(2),
            minWidth: 120,
        }
    })
);

interface ItemSortOption {
    value: keyof Item & string;
    label: string;
}

const cleanArray = (array: (string | undefined)[]): string[] => {
    const filteredArray = array.map(str => str?.trim())
        .filter(x => x !== '');
    return Array.from(new Set(filteredArray)) as string[];
};

export const ItemIndexPage: React.FC<{}> = () => {
    const classes = useStyles();
    const sortOptions: ItemSortOption[] = [
        {value: 'totalPotential', label: 'Potential'},
        {value: 'attack', label: 'Attack'},
        {value: 'magic', label: 'Magic'},
        {value: 'defense', label: 'Defense'},
        {value: 'health', label: 'Health'}
    ];
    const emblems: Emblem[] = getEmblems();
    const qualities: Quality[] = [Quality.Epic, Quality.Legendary];
    const itemSlots: ItemSlot[] = getItemSlots();
    const itemSource: Item[] = useSelector(state => state.itemState.items);
    const [displayedItems, setDisplayedItems] = React.useState<Item[]>(itemSource);
    const [sortProperty, setSortProperty] = React.useState<keyof Item & string>('totalPotential');
    const [selectedEmblems, setSelectedEmblems] = React.useState<Emblem[]>(emblems);
    const [selectedQualities, setSelectedQualities] = React.useState<Quality[]>([Quality.Legendary]);
    const [selectedItemSlots, setSelectedItemSlots] = React.useState<ItemSlot[]>(itemSlots);
    const allItem1Passives: (string | undefined) [] = useSelector(state => cleanArray(state.itemState.items.map(item => item.passive1Name)));
    const allItem2Passives: (string | undefined) [] = useSelector(state => cleanArray(state.itemState.items.map(item => item.passive2Name)));
    const [selected1Passives, setSelected1Passives] = React.useState<(string | undefined) []>(allItem1Passives);
    const [selected2Passives, setSelected2Passives] = React.useState<(string | undefined) []>(allItem2Passives);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadItems());
    }, [dispatch]);

    const configureDisplayedItems = (
        propertySort: keyof Item & string,
        qualities: Quality[],
        emblems: Emblem[],
        itemSlots: ItemSlot[],
        passive1s: (string | undefined) [],
        passive2s: (string | undefined) []
    ) => {
        let items: Item[] = itemSource.filter(item =>
            qualities.includes(item.quality)
        );
        items = items.filter(item => emblems.includes(item.emblem));
        items = items.filter(item => itemSlots.includes(item.itemSlot));
        items = items.filter(item => passive1s.includes(item.passive1Name?.trim()));
        items = items.filter(item => passive2s.includes(item.passive2Name?.trim()));
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
            selectedItemSlots,
            selected1Passives,
            selected2Passives
        );
    };

    const onEmblemFilterChange = (event: any, values: any) => {
        const emblems = values as Emblem[];
        setSelectedEmblems(emblems);
        configureDisplayedItems(
            sortProperty,
            selectedQualities,
            emblems,
            selectedItemSlots,
            selected1Passives,
            selected2Passives
        );
    };

    const onQualityFilterChange = (event: any, values: any) => {
        const qualities = values as Quality[];
        setSelectedQualities(qualities);
        configureDisplayedItems(
            sortProperty,
            qualities,
            selectedEmblems,
            selectedItemSlots,
            selected1Passives,
            selected2Passives
        );
    };

    const onItemSlotFilterChange = (event: any, values: any) => {
        const itemSlots = values as ItemSlot[];
        setSelectedItemSlots(itemSlots);
        configureDisplayedItems(
            sortProperty,
            selectedQualities,
            selectedEmblems,
            itemSlots,
            selected1Passives,
            selected2Passives
        );
    };

    const onPassive1FilterChange = (event: any) => {
        const passives = event.target.value as string;
        let passivesToSet: (string | undefined)[];
        if (passives === 'All') {
            passivesToSet = allItem1Passives;
        } else if (passives === 'None') {
            passivesToSet = [undefined];
        } else {
            passivesToSet = [passives];
        }
        setSelected1Passives(passivesToSet);
        configureDisplayedItems(
            sortProperty,
            selectedQualities,
            selectedEmblems,
            itemSlots,
            passivesToSet,
            selected2Passives
        );
    };

    const onPassive2FilterChange = (event: any) => {
        const passives = event.target.value as string;
        let passivesToSet: (string | undefined)[];
        if (passives === 'All') {
            passivesToSet = allItem1Passives;
        } else if (passives === 'None') {
            passivesToSet = [undefined];
        } else {
            passivesToSet = [passives];
        }
        setSelected2Passives(passivesToSet);
        configureDisplayedItems(
            sortProperty,
            selectedQualities,
            selectedEmblems,
            itemSlots,
            selected1Passives,
            passivesToSet
        );
    };

    const getPassiveValue = (passives: (string | undefined)[]): string => {
        if (passives.length === 1) {
            if (passives[0] === undefined) {
                return 'None'
            } else {
                return passives[0] as string;
            }
        } else {
            return 'All'
        }
    };

    return (
        <>
            <Paper>
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
                            <Chip label={quality} {...getTagProps({index})} />
                        ))
                    }
                    renderInput={params => (
                        <TextField {...params} label="Quality Filter" variant="outlined"/>
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
                            <Chip label={emblem} {...getTagProps({index})} />
                        ))
                    }
                    renderInput={params => (
                        <TextField {...params} label="Emblem Filter" variant="outlined"/>
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
                            <Chip label={itemSlot} {...getTagProps({index})} />
                        ))
                    }
                    renderInput={params => (
                        <TextField {...params} label="Item Slot Filter" variant="outlined"/>
                    )}
                />
                <FormControl className={classes.formControl}>
                    <InputLabel id="passive-1-select-label">Passive 1 Filter</InputLabel>
                    <Select
                        labelId="passive-1-select-label"
                        id="passive-1-select"
                        value={getPassiveValue(selected1Passives)}
                        onChange={onPassive1FilterChange}
                    >
                        {(['All', 'None'].concat(allItem1Passives.filter(passive => passive !== undefined) as string[])).map(passive => {
                                return <MenuItem key={passive} value={passive}>{passive}</MenuItem>;
                            }
                        )}
                    </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel id="passive-2-select-label">Passive 2 Filter</InputLabel>
                    <Select
                        labelId="passive-2-select-label"
                        id="passive-2-select"
                        value={getPassiveValue(selected2Passives)}
                        onChange={onPassive2FilterChange}
                    >
                        {(['All', 'None'].concat(allItem2Passives.filter(passive => passive !== undefined) as string[])).map(passive => {
                                return <MenuItem key={passive} value={passive}>{passive}</MenuItem>;
                            }
                        )}
                    </Select>
                </FormControl>
            </Paper>
            <GridList cellHeight={180} spacing={16} cols={useGridListCols()}>
                {displayedItems.map((item, index) => {
                    return (
                        <GridListTile key={index} cols={1}>
                            <ItemCard item={item}/>
                        </GridListTile>
                    );
                })}
            </GridList>
        </>
    );
};
