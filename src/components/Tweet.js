import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  TiHeartFullOutline,
  TiHeartOutline,
  TiArrowBackOutline,
} from 'react-icons/ti';
import { Link } from 'react-router-dom';
import { handleToggleLike } from '../actions/tweets';

const Tweet = ({ id }) => {
  const tweets = useSelector((store) => store.tweets);
  const users = useSelector((store) => store.users);
  const authedUser = useSelector((store) => store.authedUser);
  const dispatch = useDispatch();
  const tweet = tweets[id];

  const getDate = (num) => {
    const dateObj = new Date(num);
    return dateObj.toLocaleString();
  };
  const handleLikes = (e) => {
    e.preventDefault();
    const hasLiked = tweet.likes.includes(authedUser) ? true : false;
    dispatch(handleToggleLike(id, authedUser, hasLiked));
    console.log(hasLiked);
    console.log('likes: ', tweet.likes);
  };
  return (
    <React.Fragment>
      {Object.keys(users).length !== 0 && (
        <Link to={`/tweet/${id}`}>
          <div className='tweet'>
            <img
              src={users[tweet.author].avatarURL}
              alt='Avatar'
              className='avatar'
            />
            <div className='tweet-right'>
              <p className='tweet-name'>{users[tweet.author].name}</p>
              <p className='tweet-date text-faded'>
                {getDate(tweet.timestamp)}
              </p>
              {tweet.replyingTo !== null && (
                <p className='tweet-replyingTo text-faded'>
                  Replying to @{tweets[tweet.replyingTo].author}
                </p>
              )}
              <p className='tweet-text'>{tweet.text}</p>
              <div className='tweet-right-bottom'>
                <div className='tweet-replies'>
                  <TiArrowBackOutline
                    className='tweet-reply-button'
                    style={{ color: '#969696' }}
                  />
                  <span>{tweet.replies.length}</span>
                </div>
                <div className='tweet-likes'>
                  {tweet.likes.includes(authedUser) ? (
                    <TiHeartFullOutline
                      className='tweet-like-button'
                      style={{ color: '#e0245e' }}
                      onClick={handleLikes}
                    />
                  ) : (
                    <TiHeartOutline
                      className='tweet-like-button'
                      style={{ color: '#969696' }}
                      onClick={handleLikes}
                    />
                  )}

                  <span>{tweet.likes.length}</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      )}
    </React.Fragment>
  );
};
export default Tweet;
