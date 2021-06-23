import React from 'react';
import { useSelector } from 'react-redux';
import { FaReply, FaHeart } from 'react-icons/fa';

const Tweet = ({ id }) => {
  const tweets = useSelector((store) => store.tweets);
  const users = useSelector((store) => store.users);
  const tweet = tweets[id];

  const getDate = (num) => {
    const dateObj = new Date(num);
    return dateObj.toLocaleString();
  };

  return (
    <div className='tweet'>
      <img
        src={users[tweet.author].avatarURL}
        alt='Avatar'
        className='avatar'
      />
      <div className='tweet-right'>
        <p className='tweet-name'>{users[tweet.author].name}</p>
        <p className='tweet-date text-faded'>{getDate(tweet.timestamp)}</p>
        {tweet.replyingTo !== null && (
          <p className='tweet-replyingTo text-faded'>
            Replying to @{tweet.author}
          </p>
        )}
        <p className='tweet-text'>{tweet.text}</p>
        <div className='tweet-right-bottom'>
          <div className='tweet-replies'>
            <span>
              <FaReply />
            </span>
            <span>{tweet.replies.length}</span>
          </div>
          <div className='tweet-likes'>
            <span>
              <FaHeart />
            </span>
            <span>{tweet.likes.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Tweet;
