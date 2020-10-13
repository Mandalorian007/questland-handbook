import {ReduxActionTypes} from './rootReducer';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {ReduxItemState} from './itemReducer';
import {Post} from "../domain/post";
import Parser from "rss-parser";

const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';

export interface ReduxLoadYouTubeFeedAction {
  type: ReduxActionTypes.LOAD_VIDEOS;
  data: Post[];
}

export interface ReduxResetYouTubeFeedAction {
  type: ReduxActionTypes.RESET_VIDEOS;
}

export const loadYouTubeFeedPosts = (): ThunkAction<
  Promise<ReduxLoadYouTubeFeedAction>,
  ReduxItemState,
  undefined,
    ReduxLoadYouTubeFeedAction
> => {
  return async (
    dispatch: ThunkDispatch<ReduxItemState, undefined, ReduxLoadYouTubeFeedAction>
  ) => {
    const parser = new Parser({
      customFields: {
        item: [['media:group', 'mediaGroup']],
      }
    });
    const feed = await parser.parseURL(CORS_PROXY + 'https://www.youtube.com/feeds/videos.xml?channel_id=UCLHjCEBoRj-PGCPvmWzQXMQ') || [];
    const videos = feed.items || [];

    return dispatch({
      type: ReduxActionTypes.LOAD_VIDEOS as ReduxActionTypes.LOAD_VIDEOS,
      data: videos.map(videoToPost)
    });
  };
};

export const resetItems = (): ReduxResetYouTubeFeedAction => ({
  type: ReduxActionTypes.RESET_VIDEOS
});

const videoToPost = (item: any) => {
  const thumbnailUrl = item.mediaGroup['media:thumbnail'][0]['$'].url;
  const contentFirstParagraphDescription = item.mediaGroup['media:description'][0].split(/\r?\n/)[0];
  const post: Post = {
    image: thumbnailUrl,
    imageText: 'image not found',
    title: item.title || 'Loading...',
    description: contentFirstParagraphDescription,
    link: item.link || '#',
    date: new Date(item.isoDate || new Date())
  };
  return post;
};