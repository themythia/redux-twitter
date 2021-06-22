import React from 'react';
import { useSelector } from 'react-redux';
import { FaReply, FaHeart } from 'react-icons/fa';

const Tweet = ({
  id,
  text,
  author,
  timestamp,
  likes,
  replies,
  replyingTo,
  avatarURL,
  name,
}) => {
  const tweets = useSelector((store) => store.tweets);
  const users = useSelector((store) => store.users);

  const getDate = (num) => {
    const dateObj = new Date(num);
    return dateObj.toLocaleString();
  };

  return (
    <div className='tweet'>
      <img src={avatarURL} alt='Profile Picture' className='avatar' />
      <div className='tweet-right'>
        <p className='tweet-name'>{name}</p>
        <p className='tweet-date text-faded'>{getDate(timestamp)}</p>
        {replyingTo !== null && (
          <p className='tweet-replyingTo text-faded'>Replying to @{author}</p>
        )}
        <p className='tweet-text'>{text}</p>
        <div className='tweet-right-bottom'>
          <div className='tweet-replies'>
            <span>
              <FaReply />
            </span>
            <span>{replies.length}</span>
          </div>
          <div className='tweet-likes'>
            <span>
              <FaHeart />
            </span>
            <span>{likes.length}</span>
          </div>
        </div>
      </div>

      {/* <p>id: {id}</p>
      <p>name: {name}</p>
      <p>{text}</p>
      <p>author: {author}</p>
      <p>timestamp: {timestamp}</p>
      <p>likes: {likes}</p>
      <p>replies: {replies}</p>
      <p>replyingTo: {replyingTo}</p> */}
    </div>
  );
};
export default Tweet;
