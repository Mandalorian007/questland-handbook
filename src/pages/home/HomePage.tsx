import * as React from 'react';
import {useEffect} from 'react';
import {Grid} from '@material-ui/core';
import {RecentVideoPost} from "./RecentVideoPost";
import {Post} from "../../domain/post";
import {TypedUseSelectorHook, useDispatch, useSelector as useReduxSelector} from "react-redux";
import {AppState} from "../../store/rootReducer";
import {loadYouTubeFeedPosts} from "../../store/YouTubeFeedActions";
import {FeaturedGuide} from "./FeaturedGuide";
import {HighlightedPost} from "./HighlightedPost";

export const useSelector: TypedUseSelectorHook<AppState> = useReduxSelector;

export const HomePage = () => {
    const dispatch = useDispatch();

    const youTubePosts: Post[] = useSelector(state => state.youTubeFeedState.posts);
    const featuredGuide: Post = {
        title: 'New to Questland? Check out the Beginner Guide!',
        description: 'What should I be equipping? Should I be using my gems? And what are all these resources good for? Find out here!',
        image: 'https://www.questland-handbook.com/Knight%20of%20Tempest%20Image.png',
        link: '/guides/beginner-tips'
    };

    const hightlightedPost1: Post = {
        title: 'Have a guild discord? Check out QL Bot',
        description: 'Need to lookup an item, check a popular build, or figure out the best monster slayer quest? We got you covered with the QL Bot!',
        image: 'discordbot_avatar_weasel.png',
        link: '/tools/ql-bot'
    };
    const hightlightedPost2: Post = {
        title: 'All your Guild Battle Event Planning needs in one spot',
        description: 'Hero Power, multipliers, and talent setups for every member in your guild all in one place! No more individual checks!',
        image: 'guild boss trophies.png',
        link: '/tools/guild-be-plan'
    };
    const highlightedContent: Post[] = [hightlightedPost1, hightlightedPost2];

    useEffect(() => {
        dispatch(loadYouTubeFeedPosts());
    }, [dispatch]);

    return (
        <>
            <FeaturedGuide post={featuredGuide}/>
            <Grid container spacing={4}>
                {highlightedContent.map((post) => (
                    <HighlightedPost key={post.title} post={post}/>
                ))}
            </Grid>
            <h2>Latest videos</h2>
            <Grid container spacing={2}>
                {youTubePosts.slice(0, 6).map(post => (
                    <RecentVideoPost post={post} key={post.title}/>
                ))}
            </Grid>
        </>
    );
};
