import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {Card, CardContent} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    card: {
        display: 'flex',
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 160,
    },
}));

export const DiscordBotFeature: React.FC<{
    title: string;
    description: string;
    image: string;
    textFirst: boolean;
}> = ({title, description, image, textFirst}) => {
    const classes = useStyles();
    return (
        <Grid item xs={12} md={6}>
            <Card className={classes.card}>
                {!textFirst && <img alt='' src={image} height='400' width='auto'/>}
                <div className={classes.cardDetails}>
                    <CardContent>
                        <Typography component="h2" variant="h5">
                            {title}
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                            {description}
                        </Typography>
                    </CardContent>
                </div>
                {textFirst && <img alt='' src={image} height='400' width='auto'/>}
            </Card>
        </Grid>
    );
};