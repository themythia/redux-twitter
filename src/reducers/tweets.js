import { RECEIVE_TWEETS, ADD_TWEET, TOGGLE_LIKE } from '../actions/tweets';

const tweet = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_TWEETS:
      return {
        ...state,
        ...action.tweets,
      };
    case ADD_TWEET:
      let replyingTo = {};
      if (action.tweet.replyingTo !== null) {
        replyingTo = {
          [action.tweet.replyingTo]: {
            ...state[action.tweet.replyingTo],
            replies: state[action.tweet.replyingTo].replies.concat([
              action.tweet.id,
            ]),
          },
        };
      }
      return {
        ...state,
        [action.tweet.id]: action.tweet,
        ...replyingTo,
      };
    default:
      return state;
  }
};
export default tweet;

// FOR ADD_TWEET
// -------------------------------------
// Structure of a tweet
//
// tweet = {
//     id: "45p5pskqi88i58qmza2gid",
//     author: "tylermcginnis",
//     text: "Test tweet",
//     timestamp: 1514044994650,
//     likes: ['sarah_edo'],
//     replyingTo: "2mb6re13q842wu8n106bhk",
//     replies: [],
//   },
// ----------------------------------------
// Structure of replyingTo object after a new tweet added
//
// replyingTo = {
//   2mb6re13q842wu8n106bhk: {
//     id: "2mb6re13q842wu8n106bhk",
//     text: "I think I realized I like dogs so much because I can really relate to being motivated by snacks",
//     author: "sarah_edo",
//     timestamp: 1514043995650,
//     likes: ['dan_abramov'],
//     replies: ['26p5pskqi88i58qmza2gid', '45p5pskqi88i58qmza2gid'],
//     replyingTo: null,
//   }
// }
