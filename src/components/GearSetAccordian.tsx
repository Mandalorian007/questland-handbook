import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Card,
    CardMedia,
    createStyles,
    List,
    ListItem,
    ListItemText,
    Theme,
    Typography,
    CardContent
} from '@material-ui/core';
import React from 'react';
import {GearSet} from "../domain/gearSet";
import {makeStyles} from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
        },
        media: {
            //paddingTop: '56.25%', // 16:9
            width: 'auto'
        }
    }),
);

export const GearSetAccordian: React.FC<{
    gearSet: GearSet;
}> = ({gearSet}) => {
    /*
    <Accordion disabled>
    */
    const classes = useStyles();

    return (
        <Accordion className={classes.root}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography variant="h5" component="h2">{gearSet.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Card>
                    <CardMedia
                        component="img"
                        image={gearSet.imageUrl}
                    />
                    <CardContent>
                        <Typography variant="h6" component="p">
                            Sets Used
                        </Typography>
                        <List dense={true}>
                            {gearSet.setsUsed ?
                                gearSet.setsUsed.map(set =>
                                    <ListItem key={set}>
                                        <ListItemText>{set}</ListItemText>
                                    </ListItem>
                                )
                                :
                                <ListItem>
                                    <ListItemText/>
                                </ListItem>
                            }
                        </List>
                        <Typography variant="h6" component="p">
                            Notes
                        </Typography>
                        <List dense={true}>
                            {gearSet.notes ?
                                gearSet.notes.map(note =>
                                    <ListItem key={note}>
                                        <ListItemText>{note}</ListItemText>
                                    </ListItem>
                                )
                                :
                                <ListItem>
                                    <ListItemText/>
                                </ListItem>
                            }
                        </List>
                    </CardContent>
                </Card>
            </AccordionDetails>
        </Accordion>
    );
};

export const UnreleasedGearSetAccordian: React.FC<{
    gearSet: GearSet;
}> = ({gearSet}) => {
    /*
    <Accordion disabled>
    */
    const classes = useStyles();

    return (
        <Accordion className={classes.root}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography variant="h5" component="h2">{gearSet.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Card>
                    <CardContent>
                        <Typography variant="body1" component="p">
                            Most recent gear set information is limited to Legendary Tier+ patrons on ThunderSoap's discord.
                            Once a new set is released, this gear set will be made available to all.
                        </Typography>
                    </CardContent>
                </Card>
            </AccordionDetails>
        </Accordion>
    );
};