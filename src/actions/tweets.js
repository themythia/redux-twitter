import { saveTweet } from '../utils/api';

export const ADD_TWEET = 'ADD_TWEET';
export const RECEIVE_TWEETS = 'RECEIVE_TWEETS';
export const TOGGLE_LIKE = 'TOGGLE_LIKE';

export const receiveTweets = (tweets) => ({ type: RECEIVE_TWEETS, tweets });

const addTweet = (tweet) => ({ type: ADD_TWEET, tweet });
export const handleAddTweet = (text, replyingTo) => {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    return saveTweet({ text, author: authedUser, replyingTo }).then((tweet) =>
      dispatch(addTweet(tweet))
    );
  };
};
//TODO: TOGGLE LIKES
