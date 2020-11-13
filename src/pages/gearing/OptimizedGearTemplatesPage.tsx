import * as React from 'react';
import {createStyles, Theme, Typography} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
import {GearTemplateAccordian, UnreleasedGearTemplateAccordian} from "../../components/GearTemplateAccordian";
import {OptimizedGearTemplate} from "../../domain/optimizedGearTemplate";
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

export const OptimizedGearTemplatesPage = () => {
    const classes = useStyles();
    const [optimizedGearTemplates, setOptimizedGearTemplates] = React.useState<OptimizedGearTemplate[]>([]);

    useEffect(() => {
        fetch(qlApiUrl + 'optimized-gear-templates')
            .then(res => res.json())
            .then(json => setOptimizedGearTemplates(json))
    }, [setOptimizedGearTemplates]);

    return (
        <>
            <Typography variant="h4" component="h2">
                ThunderSoap's Optimized Gear Templates
            </Typography>
            <div className={classes.root}>
                {optimizedGearTemplates.map(optimizedGearTemplate =>
                    optimizedGearTemplate.imageUrl ?
                        <GearTemplateAccordian key={optimizedGearTemplate.title} gearTemplate={optimizedGearTemplate}/>
                        :
                        <UnreleasedGearTemplateAccordian key={optimizedGearTemplate.title} gearTemplate={optimizedGearTemplate}/>
                )}
            </div>
        </>
    );
};
