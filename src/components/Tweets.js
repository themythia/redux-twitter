import React from 'react';
import { useSelector } from 'react-redux';
import Tweet from './Tweet';

const Tweets = () => {
  const users = useSelector((store) => store.users);
  const tweets = useSelector((store) => store.tweets);

  //Converts tweets object into an array and sorts them by timestamp
  const tweetsArray = Object.keys(tweets)
    .map((tweet) => tweets[tweet])
    .sort((a, b) => b.timestamp - a.timestamp);

  return (
    <React.Fragment>
      <ul>
        {Object.keys(users).length !== 0 &&
          tweetsArray.map((tweet, index) => (
            <li key={index}>
              <Tweet id={tweet.id} />
            </li>
          ))}
      </ul>
    </React.Fragment>
  );
};
export default Tweets;
