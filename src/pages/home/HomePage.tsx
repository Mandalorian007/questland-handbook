import * as React from 'react';
import {useEffect} from 'react';
import {Grid, Paper} from '@material-ui/core';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {RecentVideoPost} from "./RecentVideoPost";
import {Post} from "../../domain/post";
import {TypedUseSelectorHook, useDispatch, useSelector as useReduxSelector} from "react-redux";
import {AppState} from "../../store/rootReducer";
import {loadYouTubeFeedPosts} from "../../store/YouTubeFeedActions";
import {FeaturedGuide} from "./FeaturedGuide";
import {HighlightedPost} from "./HighlightedPost";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        contentPaper: {
            background: '#303030'
        },
        container: {
            padding: theme.spacing(3, 0),
        },
    })
);

export const useSelector: TypedUseSelectorHook<AppState> = useReduxSelector;

export const HomePage = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const youTubePosts: Post[] = useSelector(state => state.youTubeFeedState.posts);
    const featuredGuide: Post = {
        title: 'New to Questland? Check out the Beginner Guide!',
        description: 'What should I be equipping? Should I be using my gems? And what are all these resources good for? Find out here!',
        image: 'https://www.questland-handbook.com/Knight%20of%20Tempest%20Image.png',
        //'https://source.unsplash.com/random',
        imageText: 'loading image',
        link: '/guides/beginner-tips'
    };

    const hightlightedPost1: Post = {
        title: 'Have a guild discord? Check out QL Bot',
        description: 'Need to lookup an item, check a popular build, or figure out the best monster slayer quest? We got you covered with the QL Bot!',
        image: 'discordbot_avatar_weasel.png',
        imageText: 'loading image',
        link: '/tools/ql-bot'
    };
    const hightlightedPost2: Post = {
        title: 'All your Guild Battle Event Planning needs in one spot',
        description: 'Hero Power, multipliers, and talent setups for every member in your guild all in one place! No more individual checks!',
        image: 'guild boss trophies.png',
        imageText: 'loading image',
        link: '/tools/guild-be-plan'
    };
    const highlightedContent: Post[] = [hightlightedPost1, hightlightedPost2];

    useEffect(() => {
        dispatch(loadYouTubeFeedPosts());
    }, [dispatch]);

    return (
        <Paper className={classes.contentPaper}>
            <FeaturedGuide post={featuredGuide}/>
            <Grid container spacing={4}>
                {highlightedContent.map((post) => (
                    <HighlightedPost key={post.title} post={post} />
                ))}
            </Grid>
            <h2>Latest videos</h2>
            <Grid container spacing={2} >
                {youTubePosts.slice(0, 6).map(post => (
                    <RecentVideoPost post={post} key={post.title}/>
                ))}
            </Grid>
        </Paper>
    );
};
