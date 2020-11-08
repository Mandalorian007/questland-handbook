import React, {useEffect} from 'react';
import {TypedUseSelectorHook, useDispatch, useSelector as useReduxSelector} from 'react-redux';
import {AppState} from '../../store/rootReducer';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Chip,
    FormControl,
    GridList,
    GridListTile,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography
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
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export const useSelector: TypedUseSelectorHook<AppState> = useReduxSelector;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        search: {
            paddingBottom: theme.spacing(2)
        },
        heading: {
            fontSize: theme.typography.pxToRem(15),
            fontWeight: theme.typography.fontWeightRegular,
        },
        filters: {
            display: 'flex',
            flexDirection: 'column',
        },
        paddingForMe: {
            margin: theme.spacing(2)
        },
        formControl: {
            margin: theme.spacing(2),
            minWidth: 120,
        },
        itemList: {
            paddingTop: theme.spacing(2),
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
    const [sortProperty, setSortProperty] = React.useState<keyof Item & string>('totalPotential');
    const [selectedEmblems, setSelectedEmblems] = React.useState<Emblem[]>(emblems);
    const [selectedQualities, setSelectedQualities] = React.useState<Quality[]>([Quality.Legendary]);
    const [selectedItemSlots, setSelectedItemSlots] = React.useState<ItemSlot[]>(itemSlots);
    const allItem1Passives: (string | undefined) [] = useSelector(state => cleanArray(state.itemState.items.map(item => item.passive1Name)));
    const allItem2Passives: (string | undefined) [] = useSelector(state => cleanArray(state.itemState.items.map(item => item.passive2Name)));
    const [selected1Passives, setSelected1Passives] = React.useState<(string | undefined) []>(allItem1Passives);
    const [selected2Passives, setSelected2Passives] = React.useState<(string | undefined) []>(allItem2Passives);
    const itemNames: string[] = useSelector(state => cleanArray(state.itemState.items.map(item => item.name)));
    const [selectedItem, setSelectedItem] = React.useState<string | null>(null);
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
        passive2s: (string | undefined) [],
        singleSearch: (string | null)
    ) => {
        let items: Item[] = itemSource;
        if (singleSearch === null) {
            items = items.filter(item => qualities.includes(item.quality));
            items = items.filter(item => emblems.includes(item.emblem));
            items = items.filter(item => itemSlots.includes(item.itemSlot));
            //ensure they load
            if (selected1Passives.length > 0 && selected1Passives.length < 2) {
                console.log(selected1Passives);
                items = items.filter(item => passive1s.includes(item.passive1Name?.trim()));
            }
            if (selected2Passives.length > 0 && selected1Passives.length < 2) {
                console.log(selected2Passives);
                items = items.filter(item => passive2s.includes(item.passive2Name?.trim()));
            }
        } else {
            items = items.filter(item => item.name === singleSearch);
        }
        return stableSort(items, getComparator<Item>('desc', propertySort));
    };

    const onItemSearchChange = (value: string | null) => {
        const itemName = value as string | null;
        setSelectedItem(itemName);
    };

    const onSortChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        const sortProperty = event.target.value as keyof Item & string;
        setSortProperty(sortProperty);
    };

    const onEmblemFilterChange = (event: any, values: any) => {
        const emblems = values as Emblem[];
        setSelectedEmblems(emblems);
    };

    const onQualityFilterChange = (event: any, values: any) => {
        const qualities = values as Quality[];
        setSelectedQualities(qualities);
    };

    const onItemSlotFilterChange = (event: any, values: any) => {
        const itemSlots = values as ItemSlot[];
        setSelectedItemSlots(itemSlots);
    };

    const onPassive1FilterChange = (event: any) => {
        const passives = event.target.value as string;
        let passivesToSet: (string | undefined)[];
        if (passives === 'All') {
            passivesToSet = [];
        } else if (passives === 'None') {
            passivesToSet = [undefined];
        } else {
            passivesToSet = [passives];
        }
        setSelected1Passives(passivesToSet);
    };

    const onPassive2FilterChange = (event: any) => {
        const passives = event.target.value as string;
        let passivesToSet: (string | undefined)[];
        if (passives === 'All') {
            passivesToSet = [];
        } else if (passives === 'None') {
            passivesToSet = [undefined];
        } else {
            passivesToSet = [passives];
        }
        setSelected2Passives(passivesToSet);
    };

    //Note: all passives is present because of awkwardness around react's page refresh
    const getPassiveValue = (passives: (string | undefined)[], allPassives: (string | undefined)[]): string => {
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
            <Autocomplete
                id="item-select"
                style={{width: 300}}
                className={classes.search}
                options={itemNames}
                onChange={(event, value) => onItemSearchChange(value)}
                autoHighlight
                getOptionLabel={(option) => option}
                renderOption={(option) => option}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="find an item"
                        variant="outlined"
                        inputProps={{
                            ...params.inputProps,
                            autoComplete: 'off', // disable autocomplete and autofill
                        }}
                    />
                )}
            />
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>Filter and Sorting Options</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.filters}>
                    <FormControl className={classes.paddingForMe}>
                        <InputLabel>Sort By</InputLabel>
                        <Select value={sortProperty} onChange={onSortChange}>
                            {sortOptions.map(sortOption => (
                                <option key={sortOption.value} value={sortOption.value}>{sortOption.label}</option>
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
                            value={getPassiveValue(selected1Passives, allItem1Passives)}
                            onChange={onPassive1FilterChange}
                        >
                            {(['All', 'None'].concat(allItem1Passives.sort().filter(passive => passive !== undefined) as string[])).map((passive, index) => {
                                    return <MenuItem key={index} value={passive}>{passive}</MenuItem>;
                                }
                            )}
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="passive-2-select-label">Passive 2 Filter</InputLabel>
                        <Select
                            labelId="passive-2-select-label"
                            id="passive-2-select"
                            value={getPassiveValue(selected2Passives, allItem2Passives)}
                            onChange={onPassive2FilterChange}
                        >
                            {(['All', 'None'].concat(allItem2Passives.sort().filter(passive => passive !== undefined) as string[])).map((passive, index) => {
                                    return <MenuItem key={index} value={passive}>{passive}</MenuItem>;
                                }
                            )}
                        </Select>
                    </FormControl>
                </AccordionDetails>
            </Accordion>
            <GridList cellHeight={200} spacing={16} cols={useGridListCols()} className={classes.itemList}>
                {configureDisplayedItems(
                    sortProperty,
                    selectedQualities,
                    selectedEmblems,
                    selectedItemSlots,
                    selected1Passives,
                    selected2Passives,
                    selectedItem
                )
                    .slice(0, 20).map((item) => {
                        return (
                            <GridListTile key={item.id} cols={1}>
                                <ItemCard item={item}/>
                            </GridListTile>
                        );
                    })}
            </GridList>
        </>
    );
};
