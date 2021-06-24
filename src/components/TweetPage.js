import React from 'react';
import { useParams } from 'react-router';
import NewTweet from './NewTweet';
import Tweet from './Tweet';
import { useSelector } from 'react-redux';
const TweetPage = () => {
  const { id } = useParams();
  const tweets = useSelector((store) => store.tweets);
  let replies = null;
  if (Object.keys(tweets).length !== 0) {
    replies = tweets[id].replies;
  }
  console.log('replies :', replies);
  return (
    <React.Fragment>
      <Tweet id={id} />
      <NewTweet id={id} />
      <ul>
        {replies !== null &&
          replies.map((reply) => (
            <li key={reply}>
              <Tweet id={reply} />
            </li>
          ))}
      </ul>
    </React.Fragment>
  );
};
export default TweetPage;
