import React from 'react';
import { useSelector } from 'react-redux';

const Tweet = ({
  id,
  text,
  author,
  timestamp,
  likes,
  replies,
  replyingTo,
  avatarURL,
}) => {
  const tweets = useSelector((store) => store.tweets);
  const users = useSelector((store) => store.users);
  return (
    <div>
      <img src={avatarURL} />
      <p>id: {id}</p>
      <p>{text}</p>
      <p>author: {author}</p>
      <p>timestamp: {timestamp}</p>
      <p>likes: {likes}</p>
      <p>replies: {replies}</p>
      <p>replyingTo: {replyingTo}</p>
    </div>
  );
};
export default Tweet;
