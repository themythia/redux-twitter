import React from 'react';
import { useSelector } from 'react-redux';
import Tweet from './Tweet';
const Tweets = () => {
  const users = useSelector((store) => store.users);
  const tweets = useSelector((store) => store.tweets);
  const usersArray = Object.keys(users).map((username) => users[username]);
  const tweetsArray = Object.keys(tweets).map((tweet) => tweets[tweet]);
  console.log('users', users);
  console.log('tweetsArray', tweetsArray);

  return (
    <div>
      {Object.keys(users).length !== 0 &&
        tweetsArray.map((tweet, index) => (
          <li key={index}>
            <Tweet
              id={tweet.id}
              text={tweet.text}
              author={tweet.author}
              timestamp={tweet.timestamp}
              likes={tweet.likes}
              replies={tweet.replies}
              replyingTo={tweet.replyingTo}
              avatarURL={users[tweet.author].avatarURL}
            />
          </li>
        ))}
    </div>
  );
};
export default Tweets;
