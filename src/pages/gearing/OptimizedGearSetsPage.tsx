import * as React from 'react';
import {createStyles, Theme, Typography} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
import {GearSetAccordian, UnreleasedGearSetAccordian} from "../../components/GearSetAccordian";
import {OptimizedGearSet} from "../../domain/optimizedGearSet";
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
    const [optimizedGearSets, setOptimizedGearSets] = React.useState<OptimizedGearSet[]>([]);

    useEffect(() => {
        fetch(qlApiUrl + 'optimized-gear-sets')
            .then(res => res.json())
            .then(json => setOptimizedGearSets(json))
    }, [setOptimizedGearSets]);

    return (
        <>
            <Typography variant="h4" component="h2">
                ThunderSoap's Optimized Gear Sets
            </Typography>
            <div className={classes.root}>
                {optimizedGearSets.map(optimizedGearSet =>
                    optimizedGearSet.imageUrl ?
                        <GearSetAccordian key={optimizedGearSet.title} gearSet={optimizedGearSet}/>
                        :
                        <UnreleasedGearSetAccordian key={optimizedGearSet.title} gearSet={optimizedGearSet}/>
                )}
            </div>
        </>
    );
};
