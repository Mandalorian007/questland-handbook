import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {Card, CardActionArea, CardContent, CardMedia, Hidden} from "@material-ui/core";
import {Post} from "../../domain/post";

const useStyles = makeStyles((theme) => ({
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        height: 300,
    },
}));

export const RecentVideoPost: React.FC<{
    post: Post;
}> = ({post}) => {
    const classes = useStyles();
    return (
        <Grid item xs={12} md={6}>
            <CardActionArea component="a" href={post.link}>
                <Card>
                    <div className={classes.cardDetails}>
                        <CardContent>
                            <Hidden xsDown>
                                <CardMedia className={classes.cardMedia} image={post.image} title={post.imageText}/>
                            </Hidden>
                            <Typography component="h3" variant="h6">
                                {post.title}
                            </Typography>
                            <Typography color="textSecondary">
                                {new Date(post.date || new Date()).toDateString()}
                            </Typography>
                            <Typography variant="subtitle1" paragraph>
                                {post.description.split(' ').slice(0, 23).join(' ') + '...'}
                            </Typography>
                            <Typography variant="subtitle1" color="primary">
                                Find out more!
                            </Typography>
                        </CardContent>
                    </div>
                </Card>
            </CardActionArea>
        </Grid>
    );
};