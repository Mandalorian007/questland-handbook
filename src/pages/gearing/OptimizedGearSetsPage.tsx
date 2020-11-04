import * as React from 'react';
import {createStyles, Theme, Typography} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
import {GearSetAccordian, UnreleasedGearSetAccordian} from "../../components/GearSetAccordian";
import {GearSet} from "../../domain/gearSet";
import {useEffect} from "react";
import {qlApiUrl} from "../../config";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
        },
        heading: {
            fontSize: theme.typography.pxToRem(15),
            fontWeight: theme.typography.fontWeightRegular,
        },
    }),
);

export const OptimizedGearSetsPage = () => {
    const classes = useStyles();
    const [gearSets, setGearSets] = React.useState<GearSet[]>([]);

    useEffect(() => {
        fetch(qlApiUrl + 'gear-sets')
            .then(res => res.json())
            .then(json => setGearSets(json))
    }, [setGearSets]);

    return (
        <>
            <Typography variant="h4" component="h2">
                ThunderSoap's Optimized Gear Sets
            </Typography>
            <div className={classes.root}>
                {gearSets.map(gearSet =>
                    gearSet.imageUrl ?
                        <GearSetAccordian key={gearSet.title} gearSet={gearSet}/>
                        :
                        <UnreleasedGearSetAccordian key={gearSet.title} gearSet={gearSet}/>
                )}
            </div>
        </>
    );
};
