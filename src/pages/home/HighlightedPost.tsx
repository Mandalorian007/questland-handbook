import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {Card, CardActionArea, CardContent, CardMedia, Hidden} from "@material-ui/core";
import {Post} from "../../domain/post";

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

export const HighlightedPost: React.FC<{
    post: Post;
}> = ({post}) => {
    const classes = useStyles();
    return (
        <Grid item xs={12} md={6}>
            <CardActionArea component="a" href={post.link}>
                <Card className={classes.card}>
                    <div className={classes.cardDetails}>
                        <CardContent>
                            <Typography component="h2" variant="h5">
                                {post.title}
                            </Typography>
                            <Typography variant="subtitle1" paragraph>
                                {post.description}
                            </Typography>
                            <Typography variant="subtitle1" color="primary">
                                find out more...
                            </Typography>
                        </CardContent>
                    </div>
                    <Hidden xsDown>
                        <CardMedia className={classes.cardMedia} image={post.image} title={post.imageText} />
                    </Hidden>
                </Card>
            </CardActionArea>
        </Grid>
    );
};