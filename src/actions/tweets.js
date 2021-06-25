import { saveLikeToggle, saveTweet } from '../utils/api';

export const ADD_TWEET = 'ADD_TWEET';
export const RECEIVE_TWEETS = 'RECEIVE_TWEETS';
export const TOGGLE_LIKE = 'TOGGLE_LIKE';

export const receiveTweets = (tweets) => ({ type: RECEIVE_TWEETS, tweets });

const addTweet = (tweet) => ({ type: ADD_TWEET, tweet });

export const handleAddTweet = (text, replyingTo = null) => {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    return saveTweet({ text, author: authedUser, replyingTo }).then((tweet) =>
      dispatch(addTweet(tweet))
    );
  };
};
//TODO: TOGGLE LIKES
const toggleLike = (id, authedUser, likeStatus) => {
  return {
    type: TOGGLE_LIKE,
    id,
    authedUser,
    likeStatus,
  };
};

export const handleToggleLike = (id, authedUser, likeStatus) => {
  return (dispatch) => {
    dispatch(toggleLike(id, authedUser, likeStatus));
  };
};
